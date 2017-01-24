'use strict';

const sendJson = require('./send-json');

/** Attempts to save a mongodb document and sends response to the client based on the outcome.
 * If the save was unsuccessful a response with status code of 400 and an error object are sent.
 * Otherwise a response with the user provided status code is sent along with the _id of the document which was saved.
 *
 * If a child document is provided it will be saved and its _id will be sent in the response body.
 *
 * @params {Object} parent - An instance of mongoose model
 * @params {Object} child - Optional. An instance of mongoose model.
 * @response {http.ServerResponse} response - The response object
 * @params {Number/ String} statusCode - The status code which will be returned if the save was successful.
 * */
module.exports = (parent, child, response, statusCode) => {
    let success = {
        message: 'ok'
    };
    parent.save((error) => {
        if (error) {
            sendJson(response, 400, error.message);
            return;
        }

        if (child) {
            child.save((error) => {
                if (error) {
                    sendJson(response, 400, error.message);
                    return;
                }

                success._id = child._id;
                sendJson(response, statusCode, success);
            });
        } else {
            success._id = parent._id;
            sendJson(response, statusCode, success);
        }
    });
};
