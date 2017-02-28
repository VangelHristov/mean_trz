'use strict';

const
  lodash = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId,

  validateId = (id) => (/^[a-fA-F0-9]{24}$/.test(id.toString()) && ObjectId.isValid(id)),

  hasAll = (obj, props) => {
      return props.every(prop => {
          if (prop.indexOf('.') > -1) {
              let lastDot = prop.lastIndexOf('.'),
                p = prop.substring(lastDot + 1),
                o = prop.substring(0, lastDot);

              return obj[o].hasOwnProperty(p);
          }

          return obj.hasOwnProperty(prop);
      });
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

  sendCreated = (res, data) => {
      data.message = 'Successfully created.';
      sendJson(res, 201, data);
  },

  sendError = (res, err) => sendJson(res, err.status || 400, {message:err.message || 'Bad request.'}),

  find = (model, id, populate, select) => {

      return new Promise((resolve, reject) => {

          if (!validateId(id)) {
              return reject({status: 400, message: errors.badId});
          }

          let query = model.findById(id);

          if (populate) {
              query.populate(populate);
          }

          if (select) {
              query.select(select);
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

              return resolve({message: 'ok'});
          });
      });
  },

  create = (model, data, required) => {

      return new Promise((resolve, reject) => {

          if (!hasAll(data, required)) {
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

  update = (model, data, id, required) => {
      return new Promise((resolve, reject) => {

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
              resolve(doc);
          });
      });
  };

module.exports = {
    update,
    create,
    save,
    find,
    validateId,
    hasAll,
    sendCreated,
    sendError,
    sendSuccess,
    errors
};