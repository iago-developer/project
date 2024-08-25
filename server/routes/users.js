var express = require("express");
var router = express.Router();
var Cooks = require("../models/Cooks");
var Waiters = require("../models/Waiters");

/* GET users listing. */
router.get("/user/user", async function (req, res, next) {
  const cooks = await Cooks.find();
  const waiters = await Waiters.find();

  waiters.forEach((waiter) => {
    console.log(waiter.fullname);
  });
  res.render("user/user", { title: "Página do Usuário", cooks, waiters });
});

router.get("/user/table_office_hours", function (req, res, next) {
  const horario_entrada = null;
  const horario_saida = null;
  res.render("user/table_office_hours", {
    title: "Registros de Expediente",
    horario_entrada,
    horario_saida,
  });
});

router.get("/user/new_office_hour", function (req, res, next) {
  res.render("user/new_office_hour", { title: "Novo registro de Expediente" });
});

router.get("/user/wage", function (req, res, next) {
  res.render("user/wage", { title: "Tabela de Salário" });
});

router.post("/user/table_office_hours", (req, res, next) => {
  const horario_entrada = req.body.horario_entrada;
  const horario_saida = req.body.horario_saida;
  const date = new Date();
  const dia = String(date.getDate()).padStart(2, "0");
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const date_formated = `${dia}/${mes}`;
  const data_formatada = date_formated;

  res.render("user/table_office_hours", { horario_entrada, horario_saida, data_formatada });
});

module.exports = router;
