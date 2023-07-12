var inputTarea = document.getElementById("nombre")
var btn = document.getElementById("agrega")
var listado = document.getElementById("listado")
var cantidad = document.getElementById("cantidad")

var total = 0;

btn.onclick = function() {
    var elemento = inputTarea.value;
    var li = document.createElement("li");
    listado.appendChild(li);
    li.textContent=elemento;
    total++;
    cantidad.textContent = total;

    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "ELIMINAR";
    li.appendChild(btnEliminar);
   
   
    btnEliminar.onclick = function() {
    li.remove();
    total--;
    cantidad.innerHTML = total;
    }
  
   
    btnEliminar.classList.add("btn-danger");
    btnEliminar.classList.add("btn");
    btnEliminar.classList.add("m-1");



    li.classList.add("list-group-item")
    li.classList.add("list-group-item-secondary");



}

