
<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: ingreso.html"); // Redirige al formulario de inicio de sesión si no está autenticado
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido - Monkey Garage</title>
</head>
<body>
    <h1>Bienvenido, <?php echo $_SESSION['usuario']; ?></h1>
    <p>Has iniciado sesión correctamente.</p>
</body>
</html>
