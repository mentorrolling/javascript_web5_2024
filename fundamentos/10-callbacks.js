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
