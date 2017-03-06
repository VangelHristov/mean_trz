'use strict';

const
  lodash = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId,

  validateId = (id) => (/^[a-fA-F0-9]{24}$/.test(id.toString()) && ObjectId.isValid(id)),

  getMissingProperties = (obj, props) => {
      return props
        .reduce((missing, prop) => {

            if (prop.indexOf('.') > -1) {
                let lastDot = prop.lastIndexOf('.'),
                  p = prop.substring(lastDot + 1),
                  o = prop.substring(0, lastDot);

                if (!obj[o].hasOwnProperty(p)) {
                    missing.push(p);
                }

                return missing;
            } else if (!obj.hasOwnProperty(prop)) {
                missing.push(prop);
            }

            return missing;
        }, [])
        .join('\n');
  },

  getErrorMessage = (err) => {
      if (err.errors) {
          let errors = [];

          Object.keys(err.errors).forEach(currentError => {
              errors.push(err.errors[currentError].message);
          }, []);

          return errors.join('\n');
      }

      return err.message;
  },

  errors = {
      notFound    : 'Документът който търсите не съществува.',
      badId       : 'Невалидно id.',
      missingField: 'Липсват задължителни полета.',
      immutable   : 'Опит за промяна на неизменимо поле (immutable property).'
  },

  sendJson = (res, status, content) => {
      res.status(status);
      res.json(content);
  },

  sendSuccess = (res, data) => sendJson(res, 200, data),

  sendCreated = (res, data) => {
      data.message = 'Успешно записан.';
      sendJson(res, 201, data);
  },

  sendError = (res, err) => sendJson(res, err.status || 400, {message: err.message || err || 'Oops something\'s wrong but I\'m not quite sure what.'}),

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
               .catch(err => reject({status: 400, message: getErrorMessage(err)}));
      });
  },

  save = (document) => {
      return new Promise((resolve, reject) => {
          document.save((err) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err)});
              }

              return resolve({message: 'Успешен запис.'});
          });
      });
  },

  create = (model, data, required) => {

      return new Promise((resolve, reject) => {
          let missing = getMissingProperties(data, required);

          if (missing) {
              return reject({status: 400, message: `Липсват следните задължителни полета:\n ${missing}`});
          }

          model.create(data, (err, doc) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err)});
              }

              return resolve(doc);
          });
      });
  },

  update = (model, data, id) => {
      return new Promise((resolve, reject) => {

          if (!validateId(id)) {
              return reject({status: 400, message: errors.badId});
          }

          model.findById(id, (err, doc) => {
              if (err) {
                  return reject({status: 400, message: getErrorMessage(err)});
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
    sendCreated,
    sendError,
    sendSuccess,
    errors,
    getErrorMessage,
    getMissingProperties
};