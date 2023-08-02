const prompt = require('prompt-sync')({ sigint: true });
let dataPersona = [];

const addDataPersona = (nombre, apellido, edad, provincia, status, pago) => {
    let persona = {
        nombre,
        apellido,
        edad,
        provincia,
        status,
    };

    if (pago) {
        dataPersona.push(persona);
    } else {
        dataPersona.unshift(persona);
    }
};

for (let i = 1; i <= 4; i++) {
    let nombre = prompt("INGRESE EL NOMBRE: ");
    let apellido = prompt("INGRESE EL APELLIDO: ");
    let edad = parseInt(prompt("INGRESE LA EDAD: "));
    let provincia = prompt("INGRESE LA PROVINCIA: ");
    let status = parseInt(prompt("INGRESE EL STATUS: "));
    let pago = prompt("INGRESE SI ABONO LA CUOTA (si / no ): ") === "si";
    addDataPersona(nombre, apellido, edad, provincia, status, pago);
    console.log("+-+-+-+-+-+-+");
}

console.table(dataPersona);









