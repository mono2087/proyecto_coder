const express = require("express");
const path = require("path");
const app = express();
const controladores = require("../controladores/ingresocontrolador.js");
const loginRouter = require("../api/ingresar.js");

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



// Configurar una ruta para manejar las solicitudes de inicio de sesión
app.post("/api/ingresar", loginRouter);

// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el puerto", app.get("port"));
});
