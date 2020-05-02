//introducir una tarea

var botonGuardar = document.querySelector('#btn');
var seccionTareas = document.querySelector('#seccionTareas')

botonGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    mensaje.innerText = "";
    //capturar datos que me pasa el formulario
    let tarea = document.querySelector('#tarea').value
    let prioridad = document.querySelector('#menu').value
    //console.log(prioridad)
    if (tarea != "" && prioridad != "") {
        guardarDatos(tarea, prioridad)
        document.querySelector('#tarea').value = "";
        document.querySelector('#menu').value = "";

    } else {
        mensaje.innerText = "Debes rellenar todos los campos";
    }

});

var contador = 3;


function guardarDatos(pTarea, pPrioridad) {
    let registro = new Object();

    registro.idTarea = contador++;
    registro.tarea = pTarea;
    registro.prioridad = pPrioridad;

    //lo metemos en el array
    listaTareas.push(registro);
    pintarTarea(registro)
}

function pintarTarea(pObjeto) {

    seccionTareas.innerHTML += ` <article class="row ${pObjeto.prioridad} ">
                                <div class="actividad">
                                    <p>${pObjeto.tarea}</p>

                                </div>
                                <div data-id="${pObjeto.idTarea}"  id="boton">Eliminar</div>
                            </article>`
}


function pintarTareas(plista) {
    for (tarea of plista) {
        pintarTarea(tarea)
    }
}
pintarTareas(listaTareas);


 var listaBotones = document.querySelectorAll('#boton')

for (boton of listaBotones) {
    boton.addEventListener('click', eliminarTarea)
}


function eliminarTarea(event) {
    event.preventDefault();

    let borrarId = event.target.dataset.id;
  
    console.log(borrarId)




} 




// filtrar por prioridad


//captura el lanzador del evento que en este caso es propio select evento change


var seleccionPrioridad = document.querySelector('#menuFiltro');
seleccionPrioridad.addEventListener('change', capturarCambio);


function capturarCambio(event) {
    let tipoPrioridad = event.target.value;
    console.log(tipoPrioridad)

    if (tipoPrioridad != "") {
        seccionTareas.innerHTML = "";
        pintarTareas(filtrarPrioridad(listaTareas, tipoPrioridad));
    } else {
        seccionTareas.innerHTML = "";
        pintarTareas(listaTareas)
    }


}

function filtrarPrioridad(plista, pPrioridad) {
    listaFiltrada = plista.filter(function (elemento) {
        return elemento.prioridad == pPrioridad;
    })
    return listaFiltrada;
}


//buscar por nombre de tarea

var buscador = document.querySelector('#buscador');



function busquedaPalabra  () {
    //console.log(buscador.value)
    seccionTareas.innerHTML = "";
    const texto = buscador.value.toLowerCase();
    for (let tarea of listaTareas) {

        let nombre = tarea.tarea.toLowerCase()
        if (nombre.indexOf(texto) != -1) {
            pintarTarea(tarea)

        }
         
        

    }
}
buscador.addEventListener('keyup', busquedaPalabra)