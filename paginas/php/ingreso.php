<?php
session_start();

// Configuración de la conexión a la base de datos
$host = "localhost";
$user = "root";
$pass = "";
$db = "motos_repuestos";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "Conexión fallida: " . $conn->connect_error)));
}

$response = array("success" => false, "message" => "");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST['correo'];
    $contrasena = $_POST['contrasena'];

    if (empty($correo) || empty($contrasena)) {
        $response["message"] = "El correo o la contraseña están vacíos.";
        echo json_encode($response);
        exit();
    }

    $response["debug"] = array(
        "Correo" => $correo,
        "Contraseña" => $contrasena
    );

    $sql = "SELECT * FROM usuarios WHERE correo = ?";
    $stmt = $conn->prepare($sql);

  

    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $result = $stmt->get_result();

    $response["debug"]["Número de filas devueltas"] = $result->num_rows;

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response["debug"]["Hash de la contraseña en la base de datos"] = $row['contrasena'];

        if (password_verify($contrasena, $row['contrasena'])) {
            $_SESSION['usuario'] = $row['correo'];
            $response["success"] = true;
            $response["message"] = "Inicio de sesión exitoso.";
            // Redirigir a la página de bienvenida
           
            exit();
        } else {
            $response["message"] = "Contraseña incorrecta.";
        }
    } else {
        $response["message"] = "No se encontró una cuenta con ese correo electrónico.";
    }

    $stmt->close();
}

$conn->close();
echo json_encode($response);
?>
