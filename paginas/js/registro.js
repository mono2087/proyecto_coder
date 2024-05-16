document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario de la manera predeterminada

    const formData = new FormData(this);
    const cedula = document.getElementById('cedula').value.trim();
        if (cedula.length !== 10) {
            alert("Debe contener 10 caracteres");
            return; }
        const contrasena = document.getElementById('contrasena').value;
        if (contrasena.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres debe tener un caracter especial:  ", "@");
            return; }//este es el validador de la contraseña le return hace que no se envie el formulario y se detenga
            const correo = document.getElementById("correo").value;
        if (!correo.includes("@")) { // include se necarag de hacerloVerificar si el correo no contiene el carácter "@"
                alert("El correo no es correcto");
                return;
            }
            
    fetch('./php/registro.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Mostrar el mensaje recibido del servidor en una ventana emergente
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
