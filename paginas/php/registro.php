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

// Recibir datos del formulario
$nombres = $_POST['nombres'];
$apellidos = $_POST['apellidos'];
$correo = $_POST['correo'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_BCRYPT); // Encriptar la contraseña
$numeroDocumento = $_POST['cedula'];
    if ( strlen($contrasena)<8){
        echo "la contraseña detener minimo 8 caracteres";
        exit();//este tuene de funcion de detener la ejecucion de le scrip 
    }
    if (strpos($correo, '@') === false) {
        echo "El correo no es correcto";
        return; // Detener la ejecución del script si el correo no contiene el carácter "@"
    }
   // if (strlen($numeroDocumento)<=10){
      //  echo"Debe tener 10 caracteres";
     //   exit();
 //   }
    
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

