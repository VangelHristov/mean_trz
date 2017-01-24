'use strict';

const
  ObjectId        = require('mongoose').Types.ObjectId,
  isValidObjectId = (id) => {
      try {
          let objId = new ObjectId(id);
          return (objId.toString() === id && ObjectId.isValid(id));
      } catch (e) {
          return false;
      }
  };

module.exports = (obj) => {
    return (obj && isValidObjectId(obj));
};