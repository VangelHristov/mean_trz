'use strict';

module.exports = {
    companies: (req, res) => res.render('app/companies'),
    company  : (req, res) => res.render('app/company/view'),
    profile  : (req, res) => res.render('app/profile'),
    dossier  : (req, res) => res.render('app/dossier/view')
};