var express = require('express');
var router = express.Router();

router.get('/admin/adm', function(req,res, next) {
  res.render('admin/adm', { title:"Página do Administrador" });
});

router.get('/admin/registrations', function(req,res, next) {
  res.render('admin/table_registrations_users', { title:"Registros de Usuários" });
});

router.get('/admin/new_registration', function(req,res, next) {
  res.render('admin/registration_new_user', { title:"Novo Registro" });
});

module.exports = router;
