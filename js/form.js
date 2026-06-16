const form = document.getElementById("contactForm");
const btnEnviar = document.getElementById("btnEnviar");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        if (result.success) {

            window.location.href = "page/gracias.html";

        } else {

            alert("No se pudo enviar el formulario. Intenta nuevamente.");

            btnEnviar.disabled = false;
            btnEnviar.textContent = "Enviar consulta";
        }

    } catch (error) {

        alert("Error de conexión. Intenta nuevamente.");

        btnEnviar.disabled = false;
        btnEnviar.textContent = "Enviar consulta";

        console.error(error);
    }

});
