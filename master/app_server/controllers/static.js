'use strict';

module.exports = {
    login            : (req, res) => res.render('static/login'),
    register           : (req, res) => res.render('static/register'),
    forgottenPassword: (req, res) => res.render('static/forgotten-password'),
    about            : (req, res) => res.render('static/about')
};