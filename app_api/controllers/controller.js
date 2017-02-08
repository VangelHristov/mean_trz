'use strict';

const
  lodash     = require('lodash'),
  ObjectId   = require('mongoose').Types.ObjectId,

  validateId = (id) => {
      try {
          let objId = new ObjectId(id);
          return (objId.toString() === id && ObjectId.isValid(id));
      } catch (e) {
          return false;
      }
  },

  hasIn      = (obj, props) => {
      return lodash.hasIn(obj, props);
  },

  find       = (model, id, populate, select) => {

      let query = model.findById(id);

      if (populate) {
          query.populate(populate);
      }

      if (select) {
          query.select(select);
      }
      return new Promise((resolve, reject) => {
          query.exec((err, doc) => {
              if (err) {
                  return reject(err.message);
              } else if (!doc) {
                  return reject({message: 'Not found!'});
              }

              return resolve(doc);
          });
      });
  },

  sendJson   = (res, status, content) => {
      res.status(status);
      res.json(content);
  },

  save       = (document) => {
      return new Promise((resolve, reject) => {
          document.save((err) => {
              if (err) {
                  return reject(err.message);
              }

              return resolve({message: 'ok'});
          });
      });
  },

  create     = (model, data, required, res) => {
      if (!hasIn(data, required)) {
          return sendJson(res, 401, {message: 'Missing required field!'});
      }

      return new Promise((resolve, reject) => {
          model.create(data, (err, doc) => {
              if (err) {
                  return reject(err.message);
              }

              return resolve(doc);
          });
      });
  },

  update     = (model, data, id,immutable, res) => {
      if (hasIn(data, immutable)) {
          sendJson(res, 403, {message: 'Attempted change of immutable property!'});
      } else if (!validateId(id)) {
          sendJson(res, 400, {message: 'Invalid _id!'});
      } else {
          model.findById(id, (err, doc) => {
              if (err) {
                  sendJson(res, 401, err.message);
              } else if (!doc) {
                  sendJson(res, 404, {message: 'Not found'});
              } else {
                  lodash.merge(doc, data);

                  save(doc)
                    .then(result => sendJson(res, 200, result))
                    .catch(error => sendJson(res, 400, error));
              }
          });
      }
  };

module.exports = {
    update,
    create,
    save,
    find,
    validateId,
    hasIn,
    sendJson
};