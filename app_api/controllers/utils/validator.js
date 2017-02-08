'use strict';

const
  _        = require('lodash'),
  ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    validateId : (id) => {
        try {
            let objId = new ObjectId(id);
            return (objId.toString() === id && ObjectId.isValid(id));
        } catch (e) {
            return false;
        }
    },
    validateHas: (props) => _.hasIn(props)
};