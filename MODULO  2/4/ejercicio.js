/**agregar 10 objetos personas con diferente datos
 * 1.- Filtrado por nombre (coincidencia) (solicitar al usuario el nombre a buscar)
 * 2.- MOSTRAR EL PROMEDIO DE LAS EDADES. 
 */
const prompt = require('prompt-sync')({ sigint: true });
let dataPersona = [];

const addDataPersona = (nombre, apellido, edad, provincia, status, pago) => {
    let persona = {
        nombre,
        apellido,
        edad,
        provincia,
        status,
        pago,
    };

    if (pago) {
        dataPersona.push(persona);
    } else {
        dataPersona.unshift(persona);
    }
};

const filtrar_por_nombre = (nombre) => {
    return dataPersona.filter((persona) => persona.nombre.toLowerCase().includes(nombre.toLowerCase()));
};

for (let i = 1; i <= 10; i++) {
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

// Pedir al usuario que ingrese un nombre a buscar
let nombreAbuscar = prompt("Ingrese el nombre a buscar: ");
let nombreFiltrado = filtrar_por_nombre(nombreAbuscar);

console.table(nombreFiltrado);


//MOSTRAR EL PROMEDIO DE LAS EDADES. 

const calcularPromedioEdades = () => {
    if (dataPersona.length === 0) {
        return 0;
    }

    let sumaEdades = dataPersona.reduce((acc, persona) => acc + persona.edad, 0);
    return sumaEdades / dataPersona.length;
};

let promedioEdades = calcularPromedioEdades();
console.log("El promedio de edad es: ", promedioEdades);