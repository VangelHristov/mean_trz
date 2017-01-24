'use strict';

const
    sendJson       = require('./send-json'),
    saveDoc        = require('./save-document'),
    toStr          = Object.prototype.toString,
    isObject       = (obj) => {
        return toStr.call(obj) === '[object Object]';
    },

    /** Performs an update and save of a mongodb document.
     * If the update and save are both successful a response with status code 200 will be sent to the client.
     * If either an update or save fails a response with status code of 400 will be sent along with the error object.
     *
     * @params {Object} data - The object containing the new data.
     * @params {Object} document - The document on which to perform the update.
     * @response {http.ServerResponse} response - The response object
     * */
    updateDocument = (data, document, response) => {
        let
            error = {},
            loop  = (data, document, response) => {
                let options = Object.keys(data),
                    prop;

                for (let i = 0; i < options.length; i += 1) {
                    prop = options[i];

                    if (isObject(data[prop])) {

                        if (isObject(document[prop])) {
                            let innerOptions = Object.keys(data[prop]);

                            for (let j = 0; j < innerOptions.length; j += 1) {
                                loop(data[prop], document[prop], response);
                            }
                        } else {
                            error.message = `Document don't have property ${prop}`;
                            return;
                        }
                    } else {
                        if (document[prop] != null) {
                            document[prop] = data[prop];
                        } else {
                            error.message = `Document don't have property ${prop}`;
                            return;
                        }
                    }
                }
            };

        loop(data, document, response);

        if (error.message) {
            sendJson(response, 400, error);
        } else {
            saveDoc(document, null, response, 200);
        }
    };

module.exports = updateDocument;
