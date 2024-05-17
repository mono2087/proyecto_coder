document.getElementById('cuenta').addEventListener('click', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    window.location.href = "usuario.html"; // Usar una URL relativa
});
document.getElementById('FormularioInicio').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario de la manera predeterminada

    const formData = new FormData(this);

    fetch('./php/ingreso.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Mostrar la respuesta del servidor en una alerta
        if (data.includes("Acceso concedido")) {
            window.location.href = '../index.html'; // Redirigir a la página principal o de bienvenida
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
