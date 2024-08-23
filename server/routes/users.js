var express = require('express');
var router = express.Router();
var Cooks = require('../models/Cooks');
var Waiters = require('../models/Waiters');

/* GET users listing. */
router.get('/user/user', async function(req, res, next) {
  const cooks = await Cooks.find();
  const waiters = await Waiters.find();

  waiters.forEach(waiter => {
    console.log(waiter.fullname)
  });
  res.render("user/user", { title: "Página do Usuário", cooks, waiters });
});

router.get('/user/redirect', function(req, res, next) {
  res.render("user/redirect", { title: "Página do Usuário" });
});

router.get('/user/table_office_hours', function(req, res, next) {
  res.render("user/table_office_hours", { title: "Registros de Expediente" });
});

router.get('/user/new_office_hour', function(req, res, next) {
  res.render("user/new_office_hour", { title: "Novo registro de Expediente" });
});

router.get('/user/wage', function(req, res, next) {
  res.render("user/wage", { title: "Tabela de Salário" });
});

router.post('/user/redirect', (req, res, next) => {
  const horario_entrada = req.body.horario_entrada;
  const horario_saida = req.body.horario_saida;
  
  res.render("user/table_office_hours", { horario_entrada, horario_saida });
});

module.exports = router;
