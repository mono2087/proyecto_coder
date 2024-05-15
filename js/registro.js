// registro.js

document.getElementById("Formulario").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    try {
        const response = await fetch("/api/registro", { // Utiliza la ruta relativa
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert("Registro exitoso");
            // Redireccionar o realizar otras acciones después del registro exitoso
        } else {
            alert("Ya se encuentra en uso este EMAIL");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al conectar con el servidor");
    }
});
