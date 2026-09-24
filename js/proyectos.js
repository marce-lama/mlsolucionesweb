fetch("data/proyectos.json")
.then((response)=> {
    return response.json() 
})
.then((proyectos)=>{
    mostrarProyectos(proyectos);
})



function mostrarProyectos(proyectos){
    const container = document.querySelector("#containerProyectos"); 
    container.innerHTML = ``; 

    proyectos.forEach(proyecto => {
        container.innerHTML += `
        
        <div class="column is-one-third">
                    <div class="card">
                        <div class="card-image">
                                <figure class="image">
                                    <img src="${proyecto.image}" alt="${proyecto.altImage}">
                                </figure>
                        </div>

                        <div class="card-content">
                                <h3 class="title is-5">
                                    ${proyecto.titulo}
                                </h3>

                                <p>
                                    ${proyecto.descripcion}
                                </p>
                        </div>
                        <div>
                            <a href="${proyecto.url}"><button class="button">Ver Proyecto</button></a>
                        </div>
                    </div>
                </div>
        
        
        
        
        `
    });
}