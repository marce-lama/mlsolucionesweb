const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

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
        alert("Hubo un error al enviar el formulario.");
    }
});
