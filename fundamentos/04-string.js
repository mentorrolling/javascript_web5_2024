let nombre = "alfonso";
let lastName = "GONZALEZ";
let frase = "      Bienvenidos a la clase    ";

//Concatenar
console.log(nombre + " " + lastName);
//template string
console.log(`Mi nombre es ${nombre} y mi apellido es ${lastName}`); //backtick

//Obtener cantidad de caracteres
console.log(nombre.length);
console.log(frase.length);

//Convertir a mayusculas
console.log(nombre.toUpperCase());
//Convertir a minusculas
console.log(lastName.toLowerCase());

//Quitar espacios en blanco
console.log(frase);
console.log(frase.trim());

// let texto = prompt("Ingrese un texto");
// console.log(texto.trim());

//Obtener un caracter en especifico
console.log(lastName.length);
console.log(lastName.at(lastName.length - 1));
console.log(lastName.at(-1));

console.log(nombre.substring(3, 6));

//Buscar
console.log(frase.includes("Bien"));

//Si quiero quitar todos los espacios en blanco
let fraseSinEspaciosLaterales = frase.trim();

let fraseArray = fraseSinEspaciosLaterales.split(" ");
let fraseSinEspacios = fraseArray.join(" ");

// Tarea 1
// ------------
// 1 - ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la última letra del apellido

// let apellido = prompt("Ingrese su apellido");
// apellido = apellido.trim();
// console.log(
//   `La cantidad de caracteres que tiene el apellido es ${apellido.length}`
// );
// console.log(`La última letra del apellido es ${apellido.at(-1)}`);

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
// 1 - Pasarla a mayuscula
// 2 - Capitalizar la palabra (Marmota)
let palabra = "felipe";
console.log(`La palabra en mayúscula es ${palabra.toUpperCase()}`);

let primeraLetra = palabra.at(0).toUpperCase(); //M

let restoPalabra = palabra.substring(1);

let palabraCapitalizada = primeraLetra + restoPalabra;
console.log(palabraCapitalizada); //Marmota

// console.log(palabra.at(0).toUpperCase() + palabra.substring(1));
