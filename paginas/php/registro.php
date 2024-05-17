<?php
// Datos de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "motos_repuestos"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir y sanitizar datos del formulario
$nombres = $conn->real_escape_string($_POST['nombres']);
$apellidos = $conn->real_escape_string($_POST['apellidos']);
$correo = $conn->real_escape_string($_POST['correo']);
$contrasena = $conn->real_escape_string($_POST['contrasena']); // No se encripta la contraseña
$numeroDocumento = $conn->real_escape_string($_POST['cedula']);

// Validaciones del lado del servidor
if (strlen($contrasena) < 7 || !preg_match('/[!@#$%^&*(),.?":{}|<>]/', $contrasena)) {
    echo "La contraseña debe tener al menos 8 caracteres y contener al menos un carácter especial.";
    exit;
}

if (strpos($correo, '@') === false) {
    echo "El correo no es correcto";
    exit;
}

// Insertar datos en la base de datos
$sql = "INSERT INTO usuario (nombres, apellidos, correo, contrasena, numeroDocumento) 
VALUES ('$nombres', '$apellidos', '$correo', '$contrasena', '$numeroDocumento')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
