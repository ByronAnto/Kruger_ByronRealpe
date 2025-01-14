var nombre = "Byron Realpe";
let edad = 25;
const fechaNacimiento = "1996-03-06";
let numero1 = 100;
let numero2 = 20;
const resultado = numero1 + numero2;
let resultado2 = numero1 - numero2;
numero1=300;

const Persona={
    nombre: "Byron",
    edad: 25,
    sexo: "Masculino",
    casado: false
}
console.log("El resultado de la suma es:", resultado);
console.log("El resultado de la resta es:", resultado2);
console.log(Persona);
console.log(typeof(edad));
let informacon = "Mi nombre es: "+Persona.nombre+" mi edad es: "+Persona.edad+" mi fecha de nacimiento es: "+fechaNacimiento;
console.log(informacon);
console.log(`Mi nombre es: ${nombre} mi edad es: ${edad} mi fecha de nacimiento es: ${fechaNacimiento}`);

console.log("Mi nombre es:", nombre, "mi edad es:", edad, "mi fecha de nacimiento es:", fechaNacimiento);

document.getElementById("mensaje").innerHTML = "este es un parrafo";



