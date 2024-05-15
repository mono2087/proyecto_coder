const mysql = require("mysql");

// Configurar la conexión a la base de datos
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

// Manejador para la ruta /api/login
const ingresar = (req, res) => {
  const { correo, contrasena } = req.body;
  

  // Ejecuta la consulta SQL para verificar las credenciales del usuario
  const query = `SELECT * FROM usuario WHERE correo = ? AND contrasena = ?`;
  connection.query(query, [correo, contrasena], (error, results, fields) => {
    if (error) {
      console.error("Error al buscar cuenta en la base de datos:", error);
      res.status(500).json({ error: "Error interno del servidor" });
      return;
    }

    if (results.length === 0) {
      // No se encontró una cuenta con las credenciales proporcionadas
      console.log("Credenciales incorrectas");
      res.status(400).json({ error: "Credenciales incorrectas" });
    } else {
      // Credenciales correctas, redirigir al usuario al índice de la página
      console.log("Inicio de sesión exitoso");
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    }
  });
};

// Exporta los métodos del controlador
module.exports = {
  ingresar
};
