form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: data
    });

    if(response.ok){
        window.location.href = "/page/gracias.html";
    }
});