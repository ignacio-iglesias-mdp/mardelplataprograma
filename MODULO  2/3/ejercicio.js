
// REALIZAR UNA FUNCION QUE PERMITA SEGUN LA ACCION DADA POR EL USUARIO, 
//MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR, SUMAR, RESTAR, DIVIDIR, 
//DADO EL VALOR INGRESADO POR EL MISMO.

/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular() {
    rl.question('Introduce un numero del 0 al 99: ', function(numero) {
        numero = parseFloat(numero);
        
        while (isNaN(numero) || numero <= 0 || numero >= 99){
            console.log("El valor ingresado no es válido.");
            rl.close();
            return;
        }

        rl.question("Seleccione una acción (sumar o restar / tabla multiplicar o tabla dividir): ", function(action) {
            action = action.toLowerCase();

            while (action !== 'sumar' && action !== 'restar' && action !== 'tabla multiplicar' && action !== 'tabla dividir') {
                console.log("La acción ingresada no es válida. Por favor, seleccione 'sumar' o 'restar / tabla multiplicar o tabla dividir'.");
                rl.question("Seleccione una acción (sumar o restar / tabla multiplicar o tabla dividir): ", function(action) {
                    action = action.toLowerCase();
                });
            }

            if (action === 'tabla multiplicar') {
                console.log(`Tabla de multiplicar del ${numero}:`);
                let resultados = '';
                for (let i = 1; i <= 10; i++) {
                    const resultado = numero * i;
                    resultados += `${numero} x ${i} = ${resultado}\n`;
                }
                console.log(resultados);
                rl.close();
                return;
            } else if (action === 'tabla dividir') {
                console.log(`Tabla de dividir del ${numero}:`);
                let resultados = '';
                for (let i = 1; i <= 10; i++) {
                    const resultado = numero / i;
                    resultados += `${numero} / ${i} = ${resultado}\n`;
                }
                console.log(resultados);
                rl.close();
                return;
            }

            rl.question("Introduce otro número del 0 al 99: ", function(otroNumero) {
                otroNumero = parseFloat(otroNumero);

                while (isNaN(otroNumero)) {
                    console.log("El segundo número ingresado no es válido.");
                    rl.question("Introduce otro número del 0 al 99: ", function(otroNumero) {
                        otroNumero = parseFloat(otroNumero);
                    });
                }

                let resultado;

                if (action === 'sumar') {
                    resultado = numero + otroNumero;
                } else if (action === 'restar') {
                    resultado = numero - otroNumero;
                }

                console.log(`El resultado es: ${resultado}`);
                rl.close();
            });
        });
    });
} */

function calcular() {
    let numero = parseFloat(prompt('Introduce un numero del 0 al 99')); 
    
    while (isNaN(numero) || numero <= 0 || numero >= 99){
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

console.log (calcular())







