'use strict';

const
  usersDb         = require('../../models/db'),
  sendJson        = require('./send-json'),
  respond         = require('./respond'),
  saveDoc         = require('./save-document'),
  updateDoc       = require('./update-document'),
  isValidObjectId = require('./validate-objectId'),
  invalidIdError  = {message: 'Invalid id'},

  /** Returns an controller object with the following properties:
   *    + createNew
   *    + getById
   *    + updateById
   *
   * The params object has the following properties
   *
   * @params {String} model - The name of the mongoose model for which the controller will create, retrieve and update documents.
   * @params {Object} owner - The owner must have two properties:
   *        +`name` {String} - The name of the owner document. Needed for saving a reference to the new child documents.
   *        + `collection` or `property` {String} - The name of the collection which is holding references to the child documents.
   * @params {Array} required - The collection of all of the fields,required to create new document.
   * @params {Object} populate - Optional. An object used for populating sub-documents. The same as the one used in mongoose Model.populate().
   * @params {String} select - Optional. A space delimited list of properties to return by `getById`. If omitted the whole document is returned as is.
   * */
  controller      = (params) => {
      const
        Model = usersDb.model(params.model),
        Owner = params.owner ? usersDb.model(params.owner.name) : null;

      return {
          /** The data required to create a new document needs to be sent in the request body, and it needs to have the same
           * structure as the structure of the document model.
           *
           * Each document, except for the documents in the `users` collection, MUST have an owner property which
           * is a reference to the owner's _id.
           *
           * Once the new document is successfully created the owner document is retrieved and a reference to
           * the newly created document is added to the owner document's collection.
           *
           * If an error occurs during the creation or saving of the document, response with status code 400 and error object are sent to the client.
           * If an the owner document cant't be retrieved, response with status 404 and message indication the reason are sent to the client.
           * If all operations are successful, response with status code 201 and the _id of the newly created document are sent to the client
           *
           * @params {http.IncomingMessage} request - The request object
           * @params {http.ServerResponse} response - The response object
           * */
          createNew : (request, response) => {
              if (Owner && !isValidObjectId(request.body.owner)) {
                  sendJson(response, 400, invalidIdError);
                  return;
              }

              //noinspection JSIgnoredPromiseFromCall
              Model.create(request.body, (error, document) => {
                  if (error) {
                      sendJson(response, 400, error.message);
                      return;
                  } else if (!Owner) {
                      // If the document is an instance of the User model save it.
                      // All of the other documents need to add a reference in the owner document.
                      saveDoc(document, null, response, 201);
                      return;
                  }

                  // Some of the references in the owner documents are saved in an array, but some are a single property.
                  // The caller of the function must provide either a collection name or a property name.
                  let collection = params.owner.collection,
                      property   = params.owner.property;

                  Owner.findById(document.owner, (error, documentOwner) => {
                      respond(error, documentOwner, response, () => {
                          // If a collection name was provided the reference will be saved there.
                          // Otherwise the specified property will point to single document.
                          if (collection) {
                              documentOwner[collection].unshift(document._id);
                          } else {
                              documentOwner[property] = document._id;
                          }

                          saveDoc(documentOwner, document, response, 201);
                      });
                  });
              });
          },
          /** Returns the document with the corresponding _id.
           *  If no document with the specified id is found responds with status code 404 and an error object containing a descriptive message.
           *
           *  @params {http.IncomingMessage} request - The request object
           *  @params {http.ServerResponse} response - the response object
           * */
          getById   : (request, response) => {

              if (!isValidObjectId(request.params.id)) {
                  sendJson(response, 400, invalidIdError);
                  return;
              }

              let populateOptions = params.populate,
                  selectedFields  = params.select,
                  query           = Model.findById(request.params.id);

              if (populateOptions) {
                  query.populate(populateOptions);
              }

              if (selectedFields) {
                  query.select(selectedFields);
              }

              //noinspection JSIgnoredPromiseFromCall
              query.exec((error, document) => {
                  respond(error, document, response, () => sendJson(response, 200, document));
              });
          },
          /** Performs an update of the document with the specified _id.
           * If the update was successful returns a response with status code 200 with and object with the following properties:
           *    + message - ok
           * If the update fails a response with status code 400 and an error message are sent to the client.
           * If no such document is found a response with status code 404 and a descriptive message is sent to the client.
           *
           * @params {http.IncomingMessage} request - The request object
           * @params {http.ServerResponse} response - the response object
           * */
          updateById: (request, response) => {
              if (request.body.owner) {
                  sendJson(response, 400, {message: 'It\'s not allowed to change the owner of the document'});
                  return;
              } else if (!isValidObjectId(request.params.id)) {
                  sendJson(response, 400, invalidIdError);
                  return;
              }

              //noinspection JSIgnoredPromiseFromCall
              Model.findById(request.params.id)
                   .exec((error, document) => {
                       respond(error, document, response, () => updateDoc(request.body, document, response));
                   });

          }
      };
  };

module.exports = controller;
