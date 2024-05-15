
document.getElementById("Formulariouno").addEventListener("submit", async (e) => {
  e.preventDefault();
  const correo = e.target.elements.correo.value;
  const contrasena = e.target.elements.contrasena.value;

  try {
    const response = await fetch("/api/ingresar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correo, contrasena })
    });
    console.log('Esta es la respuesta en el try', response);

    if (response.ok) {
      window.location.href = "/index.html";
    } else {
      const data = await response.json();
      alert(data.error);
    }
  } catch (error) {
    console.error(`Este es el error: ${error}`);
    alert(correo,contrasena);
  }
});
