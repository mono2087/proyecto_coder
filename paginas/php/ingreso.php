<?php
session_start();

// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "motos_repuestos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir datos del formulario
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

// Sanitizar datos de entrada
$correo = $conn->real_escape_string($correo);
$contrasena = $conn->real_escape_string($contrasena);

// Verificar las credenciales
$sql = "SELECT * FROM usuario WHERE correo = '$correo' AND contrasena = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicio de sesión exitoso
    echo "Acceso concedido";
} else {
    // Inicio de sesión fallido
    echo "Correo o contraseña incorrectos";
}

// Cerrar conexión
$conn->close();


?>
