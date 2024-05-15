// controladores.js

const mysql = require("mysql");

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "motos_repuestos"
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión exitosa a la base de datos MySQL");
});

const registro = (req, res) => {
    const { nombres, apellidos, cedula, correo, contrasena } = req.body;
  
    // Verificar si ya existe una cuenta con el mismo correo electrónico
    const queryCheck = "SELECT * FROM usuario WHERE correo = ?";
    connection.query(queryCheck, [correo], (error, results, fields) => {
      if (error) {
        console.error("Error al buscar cuenta en la base de datos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        return;
      }
  
      if (results.length > 0) {
        // Ya existe una cuenta con el mismo correo electrónico
        console.log("Ya existe una cuenta con el correo electrónico proporcionado");
        res.status(400).json({ error: "Ya existe una cuenta con el correo electrónico proporcionado" });
      } else {
        // No existe una cuenta con el mismo correo electrónico, se puede proceder con el registro
        // Ejecuta la consulta SQL para insertar los datos en la tabla usuario
        const queryInsert = `INSERT INTO usuario (nombres, apellido, correo, contrasena, numeroDocumento) VALUES (?, ?, ?, ?, ?)`;
        connection.query(queryInsert, [nombres, apellidos, correo, contrasena, cedula], (errorInsert, resultsInsert, fieldsInsert) => {
          if (errorInsert) {
            console.error("Error al insertar en la base de datos:", errorInsert);
            res.status(500).json({ error: "Error interno del servidor" });
            return;
          }
  
          console.log("Datos insertados correctamente en la tabla usuario");
          res.status(200).json({ message: "Datos insertados correctamente en la tabla usuario" });
        });
      }
    });
  };
  
  // Exporta los métodos del controlador
  module.exports = {
    registro
  };
