const express = require("express");
const router = express.Router();
const controladores = require("../controladores/ingresocontrolador.js");

// Ruta para el inicio de sesión
router.post("/", controladores.ingresar);

module.exports = router;
