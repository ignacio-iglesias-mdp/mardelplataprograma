const caja1=document.querySelector(".caja1");
const caja2=document.querySelector(".caja2");
const caja3=document.querySelector(".caja3");
const boton1 = document.getElementById("press1");


boton1.addEventListener("click", function(){ 
    caja1.style.backgroundColor="green";
    caja1.style.width="100%";
    caja1.style.height="20vh";
});

boton1.addEventListener("click", function(){ 
    caja2.style.backgroundColor="green";
    caja2.style.width="100%";
    caja2.style.height="20vh";
});

boton1.addEventListener("click", function(){ 
    caja3.style.backgroundColor="green";
    caja3.style.width="100%";
    caja3.style.height="20vh";
});


const boton2 = document.getElementById("press2");

boton2.addEventListener("click", function(){ 
    caja1.style.backgroundColor="rgb(189, 211, 22)";
    caja1.style.width="100%";
    caja1.style.height="20vh";
});

boton2.addEventListener("click", function(){ 
    caja2.style.backgroundColor="rgb(26, 31, 189)";
    caja2.style.width="50%";
    caja2.style.height="40vh";
});

boton2.addEventListener("click", function(){ 
    caja3.style.backgroundColor="rgb(26, 31, 189)";
    caja3.style.width="50%";
    caja3.style.height="40vh";
});