const tasks = [];  //almacenar las tareas
let time = 0;     // llevar la cuenta regresiva
let timer = null;  // para la funcion para ejecutar cada determinado tiempo setInterval
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");      // elementos  html
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

// funcion que se activa al apretar submit
form.addEventListener('submit', e => {
    e.preventDefault();  // cuando se envia el formulario anulamos el funcionamiento nativo
    if(itTask.value != '' ){
        createTask(itTask.value);
        itTask.value = ''; //eliminamos el texto del input
    } renderTasks();  //una vez ingresamos al arreglo un nuevo elemento tenemos que renderizar nuestras tareas
} );

function createTask(value){
    const newTask = {
        id:(Math.random() * 100).toString(36).slice(3),
        // math.random nos genera un valor entre 0 y 1 lo volvemos string a base 36. slice para quitar 3 caracteres raros
        title: value,
        completed: false
    };

    tasks.unshift(newTask) // agregar al arreglo
}


// permiter tomar los elementos de las tareas y generar un html e inyectarlo a un contenedor
function renderTasks(){
    // metodo map nos permite iterar en cada uno de los elementos de nuestro arreglo y para cada iteracion una operacion especial, al final regresar un arreglo nuevo con cada una de las operaciones a cada elemento
    const html = tasks.map( tasks => {
        return `
            <div class="task">
                <div class="completed"></div>
                <div class="title"></div>
            </div>

        `;
    });

}