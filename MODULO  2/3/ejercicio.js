
// REALIZAR UNA FUNCION QUE PERMITA SEGUN LA ACCION DADA POR EL USUARIO, 
//MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR, SUMAR, RESTAR, DIVIDIR, 
//DADO EL VALOR INGRESADO POR EL MISMO.

function calcular() {
    let numero = parseFloat(prompt('Introduce un numero del 0 al 99'));

    if (isNaN(numero)) {
        alert("El valor ingresado no es válido.");
        return
    }

    let action = prompt("Seleccione una acción (sumar o restar / tabla multiplicar o tabla dividir):").toLowerCase(); //Convierte la entrada a minúsculas para manejar entradas tanto en mayúsculas como en minúsculas;

    while (action !== 'sumar' && action !== 'restar' && action !== 'tabla multiplicar' && action !== 'tabla dividir') {
        alert("La acción ingresada no es válida. Por favor, seleccione 'sumar' o 'restar / tabla multiplicar o tabla dividir'.");
        action = prompt("Seleccione una acción (sumar o restar / tabla multiplicar o tabla dividir):").toLowerCase();
        
    }

    let tablas

    if (action === 'tabla multiplicar') {
        console.log(`Tabla de multiplicar del ${numero}:`);
        let resultados = '';
        for (let i = 1; i <= 10; i++) {
            const resultado = numero * i;
            resultados += `${numero} x ${i} = ${resultado}\n`;
        }
        alert(resultados);
        return;



    } else if (action === 'tabla dividir') {
        console.log(`Tabla de dividir del ${numero}:`);
        let resultados = '';
        for (let i = 1; i <= 10; i++) {
            const resultado = numero / i;
            resultados += `${numero} / ${i} = ${resultado}\n`;
        }
        alert(resultados);
        return;
    }

   


    let otroNumero = parseFloat(prompt("Introduce otro número del 0 al 99"));

    while (isNaN(otroNumero)) {
        alert("El segundo número ingresado no es válido.");
        otroNumero = parseFloat(prompt("Introduce otro número del 0 al 99"));
    }

    let resultado;

    if (action === 'sumar') {
        resultado = numero + otroNumero;
    } else if (action === 'restar') {
        resultado = numero - otroNumero;
    }

    alert(`El resultado es: ${resultado}`);
    return
}

calcular();





