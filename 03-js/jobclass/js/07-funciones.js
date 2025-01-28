
//investigacion para mostrar en la consola
(function() {
    var oldLog = console.log;
    console.log = function(...args) {
        oldLog.apply(console, args);
        var consoleOutput = document.getElementById('consoleOutput');
        var newMessage = document.createElement('div');
        newMessage.textContent = args.join(' ');
        consoleOutput.appendChild(newMessage);
    };
})();

/// declarativa

function maxBetween3Names(name1, name2, name3) {
    let maxLength = Math.max(name1.length, name2.length, name3.length);
    if (name1.length === maxLength) {
        return name1;
    } else if (name2.length === maxLength) {
        return name2;
    } else {
        return name3;
    }
}

function findMax() {
    let name1 = prompt("Ingrese el primer nombre:");
    let name2 = prompt("Ingrese el segundo nombre:");
    let name3 = prompt("Ingrese el tercer nombre:");

    if (name1 && name2 && name3) {
        let maxName = maxBetween3Names(name1, name2, name3);
        document.getElementById("max").innerText = "El nombre con más letras es: " + maxName;
    } else {
        alert("Por favor, ingrese nombres válidos.");
    }
}


// expresiva

const maxBetween3Numbers1 = function(n1, n2, n3) {
    return Math.max(n1, n2, n3);
};

const findMax1 = function() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let maxNumber = maxBetween3Numbers1(num1, num2, num3);
        document.getElementById("max1").innerText = "El número más grande es: " + maxNumber;
    } else {
        alert("Por favor, ingrese números válidos.");
    }
};


///flecha

const maxBetween3Numbers2 = (n1, n2, n3) => Math.max(n1, n2, n3);

const findMax2 = () => {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let maxNumber = maxBetween3Numbers2(num1, num2, num3);
        document.getElementById("max2").innerText = "El número más grande es: " + maxNumber;
    } else {
        alert("Por favor, ingrese números válidos.");
    }
};



///
function maxInArray(arr) {
    return Math.max(...arr);
}

let arr = [1, 6, 25, 90];
let maxNumber = maxInArray(arr);
console.log("Hazlo tú mismo 4");

console.log("El número más grande es: " + maxNumber);

let arr1 = function() {
    let arr = [100, 6, 25, 9];
    let maxNumber = maxInArray(arr);
    console.log("Hazlo tú mismo 5");
    console.log("El número más grande es: " + maxNumber);
}
arr1();

////

function maxInArray2(arr) {
    return Math.max(...arr);
}

const arr2 = () => {
    let arr = [1000, 6, 25, 9];
    let maxNumber = maxInArray(arr);
    console.log("Hazlo tú mismo 6");
    console.log("El número más grande es: " + maxNumber);
};

arr2();

///

function numeroExisteEnArreglo(arreglo, numero) {
    return arreglo.includes(numero);
}

let arreglo = [1, 6, 2, 9];
let numero = 6;
let existe = numeroExisteEnArreglo(arreglo, numero);
console.log("Hazlo tú mismo 7");
console.log("Declarativa: El número " + numero + (existe ? " existe" : " no existe") + " en el arreglo.");

///

const numeroExisteEnArregloExp = function(arreglo, numero) {
    return arreglo.includes(numero);
};

let arregloExp = [1, 6, 2, 9];
let numeroExp = 6;
let existeExp = numeroExisteEnArregloExp(arregloExp, numeroExp);
console.log("Hazlo tú mismo 8");
console.log("Expresiva: El número " + numeroExp + (existeExp ? " existe" : " no existe") + " en el arreglo.");
//

const numeroExisteEnArregloFlecha = (arreglo, numero) => arreglo.includes(numero);

let arregloFlecha = [1, 6, 2, 9];
let numeroFlecha = 6;
let existeFlecha = numeroExisteEnArregloFlecha(arregloFlecha, numeroFlecha);
console.log("Hazlo tú mismo 9");
console.log("Flecha: El número " + numeroFlecha + (existeFlecha ? " existe" : " no existe") + " en el arreglo.");

//

function minBetween3Numbers(n1, n2, n3) {
    let minNumber = Math.min(n1, n2, n3);
    if (n1 === minNumber) {
        return n1;
    } else if (n2 === minNumber) {
        return n2;
    } else {
        return n3;
    }
}

function findMin() {
    let n1 = parseFloat(prompt("Ingrese el primer número:"));
    let n2 = parseFloat(prompt("Ingrese el segundo número:"));
    let n3 = parseFloat(prompt("Ingrese el tercer número:"));

    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        let minNumber = minBetween3Numbers(n1, n2, n3);
        document.getElementById("min").innerText = "El número menor es: " + minNumber;
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}