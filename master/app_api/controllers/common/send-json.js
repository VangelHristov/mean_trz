'use strict';

/** Will send a JSON response with the provided status code and content.
 *
 * @params {http.ServerResponse} response - The response object.
 * @params {Number/ String} statusCode - The response status code.
 * @params {Object} content - The JSON
 * */
module.exports = (res, status, content) => {
    res.status(status);
    res.json(content);
};