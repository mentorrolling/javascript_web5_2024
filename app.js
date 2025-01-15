/*
Dado un array de números crear un programa que pida al usuario ingresar un número y verificar si existe en el arreglo. Si es así dar un mensaje como el siguiente "Adivinaste el número"
*/

let numeros = [7, 9, 11, 15, 78, 30, 49, 24700, 300];

let numeroUsuario = Number(prompt("Ingrese un número"));

if (numeros.includes(numeroUsuario)) {
  console.log("Adivinaste el número 😉");
} else {
  console.log("No adivinaste el número Loser!");
}

//Ejercicio
//----------
// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar o deja el campo vacio se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona' usando splice.
