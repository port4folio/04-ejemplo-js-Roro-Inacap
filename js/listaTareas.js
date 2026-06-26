let tareas = ["Tarea 1", "Tarea 2", "Tarea 3"];
let listaTareas = document.getElementById("listaTareas");
listarTareas(tareas);
console.log(listaTareas)
//funcion que agrega tarea
function listarTareas(t) {
    listaTareas.innerHTML = "";
    t.forEach(
        (tarea) => {
        li = document.createElement("li");
        li.textContent = tarea;
        listaTareas.appendChild(li);
        li.className = "list-group-item";
    });
}

let btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregarTarea);
function agregarTarea() {
    let tarea = document.getElementById("tarea").value;
    tareas.push(tarea);
    listarTareas(tareas);
}

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", buscarTarea);
function buscarTarea() {
    let tareaBuscada = document.getElementById("tarea").value;
    if (tareaBuscada == "") {
        listarTareas(tareas);
    } else {
    tareasEncontradas = tareas.filter((tarea) => tarea == tareaBuscada);
    if (tareasEncontradas.length > 0) {
        listarTareas(tareasEncontradas);
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontraron tareas!",
            footer: "",
        });
    }
    }
}

let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
let btnEditar = document.getElementById("btnEditar");
btnEditar.addEventListener("click", buscarTareaEditar);
let i = 0;
function buscarTareaEditar() {
    let tarea_buscada = document.getElementById("tarea").value;
    i = tareas.findIndex((tarea) => tarea == tarea_buscada);
    if (i == -1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontro tarea para editar, ingrese una existente!",
            footer: "",
        });
    } else {
        let tituloModal = document.getElementById("modalEditarLabel");
        tituloModal.textContent = "Editando " + tareas[i];
        modalEditar.show();
    }
}

let btnGuardar = document.getElementById("btnGuardar");
btnGuardar.addEventListener("click", guardarTarea);
function guardarTarea() {
    let tarea_nueva = document.getElementById("tarea_nueva").value;
    modalEditar.hide();
    tareas[i] = tarea_nueva;
    listarTareas(tareas);
}

let modalEliminar = new bootstrap.Modal(
document.getElementById("modalEliminar"));
let btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", eliminarTarea);
function eliminarTarea() {
    let tarea_buscada = document.getElementById("tarea").value;
    i = tareas.findIndex((tarea) => tarea == tarea_buscada);
    if (i == -1) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontro tarea para elimitar, ingrese una existente!",
            footer: "",
        });
    } else {
        let tituloModal = document.getElementById("modalEliminarLabel");
        tituloModal.textContent = "Eliminando " + tareas[i];
        modalEliminar.show();
    }
}

let btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", deleteTarea);
function deleteTarea() {
    modalEliminar.hide();
    tareas = tareas.filter(t=>t!=tareas[i]);
    listarTareas(tareas);
}