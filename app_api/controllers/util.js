'use strict';

const
  lodash = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId,

  validateId = (id) => {
      try {
          let objId = new ObjectId(id);
          return (objId.toString() === id && ObjectId.isValid(id));
      } catch (e) {
          return false;
      }
  },

  hasIn = (obj, props) => {
      return lodash.hasIn(obj, props);
  },

  getErrorMessage = (err, required) => {
      let message = '';

      required.forEach(field => {
          if (err.errors[field]) {
              message = err.errors[field].message;
          }
      });

      return message;
  },

  errors = {
      notFound    : 'The document you are looking for does not exist.',
      badId       : 'Invalid id.',
      missingField: 'Missing required field/s.',
      immutable   : 'Attempted change of immutable property.'
  },

  sendJson = (res, status, content) => {
      res.status(status);
      res.json(content);
  },

  sendSuccess = (res, data) => sendJson(res, 200, data),

  sendCreated = (res) => sendJson(res, 201, {message: 'Successfully created.'}),

  sendError = (res, err) => sendJson(res,  err.status || 400, err.message || 'Bad request.'),

  find = (model, id, populate, select) => {

      let query = model.findById(id);

      if (populate) {
          query.populate(populate);
      }

      if (select) {
          query.select(select);
      }

      return new Promise((resolve, reject) => {
          if (!validateId(id)) {
              return reject({status: 400, message: errors.badId});
          }

          query.exec()
               .then(doc => {
                   if (!doc) {
                       return reject({status: 404, message: errors.notFound});
                   }

                   resolve(doc);
               })
               .catch(err => reject({status: 400, message: err.message || err}));
      });
  },

  save = (document, required) => {
      return new Promise((resolve, reject) => {
          document.save((err) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err, required)});
              }

              return resolve('ok');
          });
      });
  },

  create = (model, data, required) => {
      return new Promise((resolve, reject) => {

          if (!hasIn(data, required)) {
              return reject({status: 400, message: errors.missingField});
          }

          model.create(data, (err, doc) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err, required)});
              }

              return resolve(doc);
          });
      });
  },

  update = (model, data, id, required, immutable) => {
      return new Promise((resolve, reject) => {

          if (hasIn(data, immutable)) {
              return reject({status: 400, message: errors.immutable});
          }

          if (!validateId(id)) {
              return reject({status: 400, message: errors.badId});
          }

          model.findById(id, (err, doc) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err, required)});
              }

              if (!doc) {
                  return reject({status: 404, message: errors.notFound});
              }

              lodash.merge(doc, data);

              save(doc, required)
                .then(result => resolve(result))
                .catch(error => reject({status: 400, message: error.message || error}));
          });
      });
  };

module.exports = {
    update,
    create,
    save,
    find,
    validateId,
    hasIn,
    sendCreated,
    sendError,
    sendSuccess,
    errors
};