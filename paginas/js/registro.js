document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    const formData = new FormData(this);
    const cedula = document.getElementById('cedula').value.trim();
    const contrasena = document.getElementById('contrasena').value;
    const correo = document.getElementById('correo').value;

    // Validar cédula
    if (cedula.length !== 10) {
        alert("La cédula debe contener exactamente 10 caracteres.");
        return;
    }

    // Validar contraseña
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (contrasena.length < 7 || !specialCharPattern.test(contrasena)) {
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos un carácter especial.");
        return;
    }

    // Validar correo electrónico
    if (!correo.includes("@")) {
        alert("El correo electrónico no es válido.");
        return;
    }

    // Enviar datos del formulario usando fetch
    fetch('http://localhost/proyecto/paginas/php/registro.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Mostrar la respuesta del servidor en una alerta
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
