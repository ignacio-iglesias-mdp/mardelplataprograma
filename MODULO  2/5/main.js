//caracteresn en blanco

function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthday = document.getElementById("birthday").value;
    var address = document.getElementById("address").value;
    var status = document.getElementById("status").value;

    if (firstName === "" || lastName === "" || birthday === "" || address === "" || status === "") {
        alert("Por favor, complete todos los campos antes de agregar.");
        return false; 
    }

    return true; 
}

//duplicados

if (validateForm()) {
    const buscaPersona = dataPersona.find(person => person.firstName === firstName && person.lastName === lastName);
    
    if (buscaPersona) {
        alert("Esta persona ya está en la lista.");
    } else {
        addDataPersona(firstName, lastName, birthday, address, status);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("address").value = "";
        document.getElementById("status").value = "";
        console.table(dataPersona);
    }
}


let dataPersona = [];
const addDataPersona = (firstName,lastName,birthday,address,status,orientation=true)=>{
    let person ={
        firstName,
        lastName,
        birthday,
        address,
        status
    };
    if(orientation){
        dataPersona.push(person);
    }
    else{
        dataPersona.unshift(person);
    }
}

const addFormPersona = () =>{
    let firstName = document.getElementById("firstName")
    let lastName = document.getElementById("lastName")
    let birthday = document.getElementById("birthday")
    let address = document.getElementById("address")
    let status = document.getElementById("status")
    addDataPersona(firstName.value,lastName.value,birthday.value,address.value,status.value);
   firstName.value="";
   lastName.value="";
   birthday.value="";
   address.value="";
   status.value="";
    console.table(dataPersona);
}


//caracteresn en blanco

function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var birthday = document.getElementById("birthday").value;
    var address = document.getElementById("address").value;
    var status = document.getElementById("status").value;

    if (firstName === "" || lastName === "" || birthday === "" || address === "" || status === "") {
        alert("Por favor, complete todos los campos antes de agregar.");
        return false; 
    }

    return true; 
}

//duplicados

if (validateForm()) {
    const buscaPersona = dataPersona.find(person => person.firstName === firstName && person.lastName === lastName);
    
    if (buscaPersona) {
        alert("Esta persona ya está en la lista.");
    } else {
        addDataPersona(firstName, lastName, birthday, address, status);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birthday").value = "";
        document.getElementById("address").value = "";
        document.getElementById("status").value = "";
        console.table(dataPersona);
    }
}


/** 1.- actividad evaluar que el formulario no este vacio, y no permita caracteres 
 * blanco.
 *  2.- Evitar duplicidad de Datos.
 */