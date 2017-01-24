'use strict';

const sendJson = require('./send-json');

/**The function will send response according to the values of its parameters.
 * If there is an error the response will be with status code 400 and the body will contain the error object.
 * If no data the response will be 404.
 * Otherwise the callback will be invoked.
 *
 * This function will perform simple if/else if/ else and will take the appropriate actions based on the values of the parameters.
 *
 * @params {Object} error - An error object or null.
 * @params {Object} data - The data object or null.
 * @params {Function} callback - The function which will be invoked if no error and data is an object
 * */
module.exports = (error, data, response, callback) => {
    if (error) {
        sendJson(response, 400, error.message);
    } else if (!data) {
        sendJson(response, 404, {message: 'Could\'t find documents that match the query'});
    } else {
        callback();
    }
};