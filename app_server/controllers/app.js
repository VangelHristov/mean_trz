'use strict';

module.exports = {
    companies: (req, res) => {console.log(res.body);res.render('app/dashboard/view');},
    company  : (req, res) => res.render('app/company/view'),
    profile  : (req, res) => res.render('app/profile'),
    dossier  : (req, res) => res.render('app/dossier/view')
};