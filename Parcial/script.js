(function () {
    emailjs.init("9YFpKfszfi7NzDdtJ");
})();

const formulario = document.getElementById("formulario-contacto");
const estado = document.getElementById("estado");
const boton = formulario.querySelector('button[type="submit"]');

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !asunto || !mensaje) {
        estado.textContent = "Completa todos los campos.";
        estado.style.color = "#dc2626";
        return;
    }

    const parametros = {
        from_name: nombre,
        from_email: email,
        subject: asunto,
        message: mensaje
    };

    boton.disabled = true;
    boton.textContent = "Enviando...";
    estado.textContent = "Enviando tu mensaje...";
    estado.style.color = "#2563eb";

    emailjs.send("service_ndg624b", "template_o9czx2c", parametros)
        .then(function () {
            estado.textContent = "¡Mensaje enviado correctamente!";
            estado.style.color = "#15803d";
            formulario.reset();
        })
        .catch(function (error) {
            console.error("Error al enviar:", error);
            estado.textContent =
                "No se pudo enviar el mensaje. Inténtalo nuevamente.";
            estado.style.color = "#dc2626";
        })
        .finally(function () {
            boton.disabled = false;
            boton.textContent = "Enviar mensaje";
        });
});
