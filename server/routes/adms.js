var express = require('express');
var router = express.Router();
var Adms = require('../models/Adms');

router.get('/admin/adm', async function(req,res, next) {
  const adms = await Adms.find();
  adms.forEach((adm) => {
    console.log(adm.fullname, adm.nameuser, adm.password);
  });
  res.render('admin/adm', { title:"Página do Administrador", adms });
});

router.get('/admin/registrations', function(req,res, next) {
  res.render('admin/table_registrations_users', { title:"Registros de Usuários" });
});

router.get('/admin/new_registration', function(req,res, next) {
  res.render('admin/registration_new_user', { title:"Novo Registro" });
});

module.exports = router;
