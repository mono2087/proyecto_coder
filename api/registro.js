// api/registro.js

const express = require("express");
const router = express.Router();
const controladores = require("../controladores/controladores");

// Manejador para la ruta /api/registro
router.post("/", controladores.registro);

module.exports = router;
