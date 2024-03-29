const prompt =require('prompt-sync')({sigint:true});

const tablaMultp = (valor)=>{
    let i=1;
    while(i<=10){
        console.log(`${valor} X ${i} = ${i*valor}`);
        i++;
    }
}
const tablaSumar =(valor)=>{
    for(let i =1; i<=10;i++){
        console.log(`${i} + ${valor} = ${valor+i}`);
    }
}
const tablaRestar = (x)=>{
    let i = x;
     
    while(i <= (10+x)){
        console.log(`${i} - ${x} = ${i-x}`);
        i++;
    }
}
const tablaDiv = (y) =>{
    for(let i =1; i<=10;i++){
         console.log(`${i*y} / ${y} = ${i}`)
    }
}

let numero = prompt("INGRESE UN VALOR: ");
let operetation = prompt("1-SUMAR 2.-RESTAR 3-MULTIPLICAR 4.-DIVIDIR :");

switch(operetation){
    case "1":
        tablaSumar(parseInt(numero));
    break;
    case "2":
        tablaRestar(parseInt(numero));
    break;
    case "3":
        tablaMultp(numero);
    break;
    case "4":
        tablaDiv(numero);
    break;
    default:
        console.log("NO EXISTE ESA ACCION...") 
    break;
}



/**DECLARACION DE ARRAY - VECTORES - ARREGLOS */
// Array
const elementos = new Array("a", 1, 2, "b", true);
/**TODOS LOS ARRAY SIEMPRE EMPIEZA EN LA POSICION 0,
 * PARA LEER UN ELEMENTO DEL ARRAY SE HACE EL LLAMADO A LA 
 * POSICION [NUM-POSITION]
 */
const palabras = ["a", 1, 2, "b", true];
let letras = []; // inicializamos un array vacio


console.log(letras);

/** CANTIDAD DE ELEMENTOS nombreArray.length */
console.log(elementos.length)

//añadir o eliminar elementos
//push  inserta elementos al final
//pop elimina al final
//unshift inserta   elementos al principio
//shift elimina al principio
letras.push("a");
letras.push("b");
letras.push(1);
console.log(letras);
letras.unshift(1);
letras.unshift("ejemplo");
console.log(letras);
letras.pop();
console.log(letras);

/**FUNCIONES DE ARRAY */
/**convertir un array a string */
let arrString = letras.join("-");
console.log(arrString);
let convArray = arrString.split("ejemplo");
console.log(convArray);
/**CONCATENAR ARRAY */
//concat concatenar array
let nuevoElemnto = letras.concat(palabras);
console.log(nuevoElemnto);

for (let i = 0; i < nuevoElemnto.length; i++) {
    console.log(nuevoElemnto[i]);
}
/**recorrer array
 * foreach
 */
nuevoElemnto.forEach((elemt, index) => {
    console.log(`${index} = ${elemt}`);
});
/**VERIFICAR SI UN ELEMENTO EXISTE O NO 
 * includes() // false - true
*/
console.log(nuevoElemnto.includes("a"));
/** indexOf() lastIndexOf() Buscar el elemento en la primera coincidencia
 * y devuelve la posicion del elemento -1
 */
console.log(nuevoElemnto.indexOf("a"));
console.log(nuevoElemnto.lastIndexOf("a"));
//find busca un o varios elementos

let filters = nuevoElemnto.find((elemt) => {
    return elemt == "a";
}); 
console.log(filters);

 filters = nuevoElemnto.filter((elemt) => {
    return elemt == "a";
}); 
console.log(filters);