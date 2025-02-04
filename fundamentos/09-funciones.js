//Funciones o métodos
//Código encapsulado que podemos ejecutar cuando sea necesario.

// alert("Hola mundo!");
// prompt("Ingrese sus sueños y hágalos realidad");
// let validación = confirm("Soy feo?");

//Funciones declarativas
//Se declaran con la palabra reservada 'function' y un nombre
// saludarPersona();
// palabraAlReves();

function saludarPersona() {
  //acciones
  //procesos
  let nombre = prompt("Ingrese su nombre");
  console.log(`Bienvenid@ ${nombre} al curso de javascript`);
}

// saludarPersona()

//Funciones anónimas o de expresión
//Se declaran como variables constantes y se le asigna una función sin nombre

const palabraAlReves = function () {
  let palabra = prompt("Ingrese la palabra");
  let invertida = palabra.split("").reverse().join("");

  console.log(invertida);
};

//Parámetros son datos que recibe una función entre los paréntesis y que se usan en los procesos. Al momento de ejecutarla le envío argumentos a la función en representación de los parámetros.

function suma(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

suma(23, 45);

//Ejercicio 2
function capitalizarNombre(nombre, apellido) {
  console.log(capitalizarPalabra(nombre) + " " + capitalizarPalabra(apellido));

  // let nombreCapitalizado = nombre.at(0).toUpperCase() + nombre.substr(1);
  // //pablo
  // //P
  // //ablo
  // //Pablo

  // let apellidoCapitalizado = apellido.at(0).toUpperCase() + apellido.substr(1);

  // console.log(nombreCapitalizado + " " + apellidoCapitalizado);
}

// capitalizarNombre("alfredo", "gonzalez");

let nombres = "pablo daniel eusebio".split(" "); //3 nombres Pablo Daniel Eusebio

function capitalizarPalabra(palabra) {
  let palabraCapitalizada = palabra.at(0).toUpperCase() + palabra.substr(1);

  return palabraCapitalizada;
}

for (let i = 0; i < nombres.length; i++) {
  capitalizarPalabra(nombres[i]);
}

let cosa = "queso";
capitalizarPalabra(cosa);

//Parámetros por defecto
const sumaDefault = function (num1 = 5, num2 = 0) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

function saludarPersonaDefault(nombre = "Invitado") {
  //acciones
  //procesos

  console.log(`Bienvenid@ ${nombre} al curso de javascript`);
}

//Diferencia entre funciones anónimas y declarativas
//Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
//Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

//return
//detener la ejecución de una función
// Devolver un valor o resultado

//datos de entrada
//15% de descuento

const calcularDescuento = function (precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return montoConDescuento;
};

console.log(`El importe a abonar es de $${calcularDescuento(4500)}`);

//Scope o Ambito

//scope global
let productos = ["Ipad Pro", "Iphone 15", "MacBook Air"];

const getProduct = function (indice = 0) {
  console.log(`Producto seleccionado: ${productos[indice]}`);
};

const getProducts = function () {
  document.write("<h3>Lista de productos</h3>");
  document.write("<ul>");

  for (let i = 0; i < productos.length; i++) {
    document.write(`<li>${productos[i]}</li>`);
  }
  document.write("</ul>");
};

//scope Global
let usuarios = ["Pablo", "Josefina", "Anastasia"];

const getUsers = function () {
  //scope local
  let usuarios = ["Bill Gates", "Steve Jobs", "Elon Musk"];

  console.log("Usuarios tecnológicos");
  console.log("---------------------");
  for (let i = 0; i < usuarios.length; i++) {
    console.log(i + 1 + "-" + usuarios[i]);
  }
};

//arrow function o funciones de flecha

//sintaxis
/*
    const nombreDeVariable = ()=> valor
    
    */

const calcularDescuentoArrow = (precio, descuento = 15) => {
  let descuentoCalculado = 100 - descuento;
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return montoConDescuento;
};

const getProductArrow = (indice = 0) => productos[indice];
