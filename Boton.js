document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert("✅ Tu mensaje fue enviado con éxito!");
                status.style.color = "green";
                form.reset();
            } else {
                status.textContent = "❌ Ocurrió un error. Intenta de nuevo.";
                status.style.color = "red";
            }
        } catch (error) {
            status.textContent = "⚠️ Error de conexión. Intenta más tarde.";
            status.style.color = "red";
        }
    });
});

let voluntario = document.getElementById("vtn-voluntario");
let donacion = document.getElementById("vtn-donacion");
let alianza = document.getElementById("vtn-alianza");
let voz = document.getElementById("vtn-darvoz");


voluntario.style.display = "none";
donacion.style.display = "none";
alianza.style.display = "none";
voz.style.display = "none";


function abrir(id) {
    document.getElementById("vtn-" + id).style.display = "block";

}

function cerrar(id) {
    document.getElementById("vtn-" + id).style.display = "none";
}
