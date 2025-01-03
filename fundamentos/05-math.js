//Number
//Math
let decimal = 34.5111111111111111111;

//Redondeo
console.log(Math.floor(decimal)); //abajo
console.log(Math.ceil(decimal)); //arriba
console.log(Math.round(decimal)); //< 5 -> floor , >=5 ->ceil

//máximo de una lista
console.log(Math.max(34, 67, -1, 1000, 500000));

//mínimo de una lista
console.log(Math.min(34, 67, -1, 1000, 500000));

//Convertir string a number
let numeroString = "67.8734";

let numeroEntero = parseInt(numeroString);
let numeroDecimal = parseFloat(numeroString);
let numeroNormal = Number(numeroString);

//Dos decimales
console.log(Math.round(numeroNormal * 100) / 100);
let flotante = Number(numeroNormal.toFixed(2));

//Elevar un número a una potencia
let numerito = Number(prompt("Ingrese el número"));
let exponente = Number(prompt("Ingrese el exponente"));

console.log(
  `El número ${numerito} elevado al ${exponente} es igual a ${Math.pow(
    numerito,
    exponente
  )}`
);

//Raiz cuadrada
let resultadoRaiz = Math.sqrt(numeroNormal);
console.log(Math.round(resultadoRaiz * 100) / 100);

//Número aleatorio entre 1 y 10
console.log(Math.ceil(Math.random() * 10));
