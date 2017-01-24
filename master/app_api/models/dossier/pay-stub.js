'use strict';

const
  mongoose  = require('mongoose'),
  Schema    = mongoose.Schema,
  objectId  = mongoose.Schema.Types.ObjectId,
  rowSchema = new Schema({
      data: [{type: String, required: true}]
  }, {
      _id: false
  });

module.exports = new Schema({
    owner: {type: objectId, ref: 'Dossier', required: true},
    rows : [rowSchema]
});