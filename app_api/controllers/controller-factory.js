'use strict';

const util = require('./util');

module.exports = (config) => {
    function getById(req, res) {
        util
          .find(config.Model, req.params.id, config.populate)
          .then(doc => util.sendSuccess(res, doc))
          .catch(error => util.sendError(res, {message: error.message}));
    }

    function updateById(req, res) {
        util
          .update(config.Model, req.body, req.params.id)
          .then(doc => util.save(doc))
          .then(result => util.sendSuccess(res, result))
          .catch(error => util.sendError(res, {message: util.getErrorMessage(error)}));
    }

    function createNew(req, res) {
        let docId = '';

        util
          .create(config.Model, req.body, config.required)
          .then(doc => {
              docId = doc._id;

              return new Promise((resolve, reject) => {
                  util.find(config.ParentModel, req.body[config.parentModelName])
                      .then(resolve, (err) => reject({message: util.getErrorMessage(err)}));
              });
          })
          .then(parentDoc => {
              parentDoc[config.parentRefCollectionName].unshift(docId);
              return Promise.resolve(parentDoc);
          })
          .then(parentDoc => util.save(parentDoc))
          .then(() => util.sendCreated(res, {_id: docId}))
          .catch(error => util.sendError(res, error));
    }

    return {
        getById, updateById, createNew
    };
};