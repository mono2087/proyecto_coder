// conexion.js

const express = require("express");
const path = require("path");
const app = express();
const controladores = require("../controladores/controladores.js");
const registroRouter = require("../api/registro.js"); // Importa el enrutador para /api/registro

app.set("port", 4000);

// Configuración de middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.json());

// Configurar Express para servir archivos estáticos
app.use('/CSS', express.static(path.join(__dirname, "../CSS")));
app.use('/js', express.static(path.join(__dirname, "../js")));

// Configurar una ruta para el servidor Express
app.get("/ingreso", (req, res) => res.sendFile(path.join(__dirname, "../paginas/usuario.html")));
app.get("/registro", (req, res) => res.sendFile(path.join(__dirname, "../paginas/ingreso.html")));

// Usar el enrutador para /api/registro
app.use("/api/registro", registroRouter);

// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el puerto", app.get("port"));
});
