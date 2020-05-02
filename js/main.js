var listaTareas = new Array();

listaTareas = [
    /* {
            'idTarea': 0,
            'tarea': 'Estudiar Javascript',
            'prioridad': 'urgente'
        },
        {
            'idTarea': 1,
            'tarea': 'Sacar al perro',
            'prioridad': 'diaria'
        },
        {
            'idTarea': 2,
            'tarea': 'Salir a cenar ',
            'prioridad': 'mensual'
        }
     */


]

//introducir una tarea

var botonGuardar = document.querySelector('#btn');
var seccionTareas = document.querySelector('.container')

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

var contador = 0;

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

    seccionTareas.innerHTML += `<div class="row ${pObjeto.prioridad}">
                            <article class="actividad ">
                                <p>${pObjeto.tarea}</p>

                            </article>
                            <div class="boton">Eliminar</div>
                            </div>`
}