//Bucles

//while (mientras)
let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

/*
sumar números del 1 al 100
*/
let suma = 0;

// while (num <= 100) {
//   suma = suma + num;
//   console.log(suma);
//   num++;
// }

/*
Genera números aleatorios entre 1 y 20, sumándolos hasta que el total supere 100. Imprime la lista de números generados.
*/

let total = 0;

// while (total <= 100) {
//   let numeroRandom = Math.ceil(Math.random() * 20);
//   console.log("Número Random: " + numeroRandom);
//   console.log("Total: " + total);
//   total = numeroRandom + total;
// }

/*
Escribe un programa que pida una contraseña al usuario repetidamente hasta que acierte.
*/

let password = "1234";
let userPassword = "";

// while (userPassword !== password) {
//   userPassword = prompt("Introduce la contraseña");
// }
// console.log("Contraseña correcta!!");

//do while
// do {
//   userPassword = prompt("Introduce la contraseña");
//   //acciones
// } while (userPassword !== password);
// console.log("Contraseña correcta!!");

//Ejemplo: Generar un número aleatorio y verificar si cumple una condición.
let numAleatorio = null;

// do {
//   numAleatorio = Math.ceil(Math.random() * 10);
//   console.log("Número generado: " + numAleatorio);
// } while (numAleatorio !== 7);

// console.log("Se generó el 7!!");

//For

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//tabla 2
let tabla = null;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tabla} x ${i} = ${tabla * i}`);
// }

// do {
//   tabla = Number(prompt("Ingrese la tabla a calcular"));
//   console.log(tabla);
//   if (isNaN(tabla)) {
//     console.error("Solo se pueden ingresar números mayores que cero :(");
//   } else if (tabla > 0) {
//     for (let i = 1; i <= 10; i++) {
//       console.log(`${tabla} x ${i} = ${tabla * i}`);
//     }
//   } else {
//     console.warn("Amigo! escribí un numerito más grande que el cero :)");
//   }
// } while (tabla > 0);

//trivia
/*
Adivinar la capital de un pais (Francia) Paris
tenemos 3 intentos
si acertamos se detiene el programa y mostramos un mensaje de GANADOR
Si terminan los 3 intentos y no respondemos bien PERDEMOS

*/

const respuestaCorrecta = "París";
let intentos = 3;
let respuestaUsuario = "";

do {
  respuestaUsuario = prompt("¿Cuál es la capital de Francia?");
  intentos--;
} while (intentos > 0);
