//Callbacks
// funciones que se envian como parámetros a otra función

let numeros = [23, 2, 34, 56, 3, 80, 8];

console.log(numeros.sort((ant, sig) => ant - sig));

//filter
let pares = numeros.filter((numero) => numero % 2 === 0);
let mayores50 = numeros.filter((item) => item > 50);

const peliculas2024 = [
  "Dune: Parte Dos",
  "Memorias de un caracol",
  "Anora",
  "La zona de interés",
  "Joker: Folie à Deux",
  "Gladiator II",
  "Nosferatu",
  "Furiosa: De la saga Mad Max",
  "El señor de los anillos: La guerra de los Rohirrim",
  "Pobres criaturas",
];

const buscarPelis = (termino) => {
  return peliculas2024.filter((titulo) =>
    titulo.toLowerCase().includes(termino.toLowerCase())
  );
};

//find
//devuelve el primer elemento que coincide con la condición
let alumnos = ["Jimena", "Romina", "Alfredo", "Gabriela", "Alfredo"];
let resultadoBusqueda = alumnos.find((alumno) => alumno === "Alfredo");

let buscarNumero = numeros.find((num) => num > 200);

//findIndex

const encontrarPorIndice = () => {
  let indice = alumnos.findIndex((alumno) => alumno === "Pablo");

  if (indice >= 0) {
    console.log("El registro existe");
  } else {
    console.log("El registro no existe");
  }
};

//forEach
alumnos.forEach((alumno, index) =>
  console.log(`${index + 1} - ${alumno.toUpperCase()}`)
);

//map
const alumnosMayus = alumnos.map((alumno) => alumno.toUpperCase());

/*
Tarea 1
Crea una función que reciba como dato ingresado del usuario tareas a realizar y los vaya almacenando en un array hasta que se cancele la operación o no se ingrese ninguna tarea más. Una vez cancelada debe devolver por consola la lista de tareas.

algoritmo
datos de entrada: tareas a realizar
procesos: preguntar si se ingresa una tarea y si es así guardar en un array hasta cancelar la operación.
salida: array con las tareas

Crea una función que sirva de buscador de tareas. Se debe ingresar un termino y devolver las tareas que contengan ese termino entre sus caracteres.

algoritmo
entrada: término de búsqueda
proceso: ingreso término, busco elementos del array que coincidan en parte con el término,mostrar el resultado
salida: array con el resultado de la búsqueda o no

*/
const tareas = [];

const toDoList = () => {
  let tarea = ""; //false

  do {
    tarea = prompt("Ingrese una tarea");
    //validar que se haya escrito algo
    if (tarea) {
      tareas.push(tarea);
    }
  } while (tarea); //mientras tarea sea distinto de vacio

  return tareas;
};

//Buscador de tareas
const buscarTareas = (termino = prompt("Ingrese el término a buscar")) => {
  const resultado = tareas.filter((tarea) =>
    tarea.toLowerCase().includes(termino.toLowerCase())
  );
  if (resultado.length > 0) {
    return resultado;
  } else {
    return "No hay elementos en la búsqueda";
  }
};

let resultadoDeBusqueda = buscarTareas();

/*
Tarea 2
Crea una función que reciba como dato una palabra y retorne la misma palabra pero al revés.

algoritmo
entrada: la palabra o frase
proceso: ingreso un dato de tipo string, 
hola mundo " " split("") ["h","o","l","a"," ","m","u","n","d","o"].reverse()
join("") "odnum "
salida: la palabra al revés
*/

const palabraAlReves = function () {
  let palabra = prompt("Ingrese palabra o frase");
  //   let palabraInvertida = palabra.split("").reverse().join("");
  return palabra.split("").reverse().join("");
};

/*
Tarea 3
Escribe una función anónima que reciba una palabra o frase como parámetro y retorne cuantas vocales contiene.

algoritmo
entrada: la frase o palabra
proceso: recibo la frase y recorro caracter por caracter, comparar el caracter con las vocales
salida: cantidad de vocales que hay en la frase

*/

const contadorDeVocales = function (
  frase = prompt("Ingrese la frase o palabra")
) {
  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  let arrayCaracteres = frase.toLowerCase().split("");
  const resultado = arrayCaracteres.filter((caracter) =>
    vocales.includes(caracter)
  );
  return resultado.length;
};
