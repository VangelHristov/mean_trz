'use strict';

//const
//  usersDb   = require('../../models/db'),
//  User      = usersDb.model('User'),
//  checkReq  = require('../common/check-request-content'),
//  respond   = require('../common/respond-accordingly'),
//  updateDoc = require('../common/update-document'),
//  sendJson  = require('../common/send-json-response');

module.exports = {
    model   : 'User',
    owner   : null,
    required: ['username', 'password', 'email'],
    populate: {
        path  : 'companies',
        select: 'companyInfo.name companyInfo.bulstat director _id'
    },
    select  : '_id companies'
};

//function createNew(req, res) {
//    if (checkReq.body(req, res, ['username', 'password', 'email'])) {
//
//        User.create(req.body, (error, user) => {
//            respond(error, user, res, null, () => sendJson(res, 201, {_id: user._id}));
//        });
//    }
//}
//
//function authenticate(req, res) {
//    if (checkReq.body(req, res, ['username', 'password'])) {
//
//        User
//          .findOne(req.body)
//          .populate({
//              path  : 'companies',
//              select: 'companyInfo.name companyInfo.bulstat director _id'
//          })
//          .select('_id companies')
//          .exec((error, user) => {
//              respond(error, user, res, 200);
//          });
//    }
//}
//
//function updateById(req, res) {
//    if (checkReq.params(req, res)) {
//
//        User.findById(req.params.id, (error, user) => {
//            respond(error, user, res, null, () => updateDoc(req.body, user, res));
//        });
//    }
//}
//
//function deleteById(req, res) {
//    if (checkReq.params(req, res)) {
//        //TODO: find all related sub-documents and delete them as well
//        User
//          .findById(req.params.id)
//          .remove((error, user) => {
//              respond(error, user, res, 204);
//          });
//    }
//}
//
//function getById(req, res) {
//
//    if (checkReq.params(req, res)) {
//
//        User
//          .findById(req.params.id)
//          .populate({
//              path  : 'companies',
//              select: 'companyInfo.name companyInfo.bulstat director _id'
//          })
//          .select('_id companies')
//          .exec((error, user) => {
//              respond(error, user, res, 200);
//          });
//    }
//}
//
//module.exports = {
//    createNew,
//    authenticate,
//    updateById,
//    deleteById,
//    getById
//};