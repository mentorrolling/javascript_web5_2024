//Arrays o Arreglos
let alumnos = ["José", "Juan", "Alberto", "Rosa", "Floripondia"];

//acceder a un elemento
console.log(alumnos[0]);
console.log(`Bienvenida ${alumnos[4]}`);

//Saber la cantidad de elementos
console.log(`La cantidad de alumnos es de ${alumnos.length}`);

//Mostrar el último elemento
console.log(alumnos.length - 1);
console.log(alumnos[alumnos.length - 1]);
console.log(alumnos.at(-1));

//concatenar
let alumnosPresentes = ["Josefina", "Lucho", "Ana", "Miriam", "Pedro"];
let alumnosAusentes = ["Pablo", "Leo", "Penélope"];
let alumnosDestacados = ["Andrés", "Joaquín", "Elon", "Bill", "Mark"];

let comision = alumnosPresentes.concat(alumnosAusentes, alumnosDestacados, [
  "Pablo",
  "Silvina",
]);

//Iterar un array
for (let i = 0; i < comision.length; i++) {
  console.log(`Bienvenid@ ${comision[i]}`);
}

let numeros = [23, 56, 300, 67, 123, 45];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i] * 2);
  console.log(Math.sqrt(numeros[i]));
}

//agregar elementos a un array
comision.push("Mario"); //al final
comision.unshift("Margarita"); // al inicio

// let nombreIngresado = prompt("Ingrese el nombre del alumno/a");
// comision.push(nombreIngresado);

//Eliminar elementos de un array
comision.pop(); //último elemento
comision.shift(); // el primer elemento

//Eliminar de cualquier posición
comision.splice(4, 1); //primer dato la posición, segundo dato cuantos elementos quiero eliminar

//agregar desde una posición
comision.splice(9, 0, "Walter", "Silvana");

//Saber una posición de un elemento
console.log(comision.indexOf("Marky"));

//Saber si un elemento está en el array
console.log(comision.includes("Mark"));

//Ordenar un array de string
console.log(comision.sort()); //A-Z
console.log(comision.reverse()); //Z-A

//Copiar un array
// let comisionNueva = comision; //MAL
let comisionNueva = comision.slice(); //BIEN

// Enigma Universal
console.log(["🥚", "🐔"].sort());
