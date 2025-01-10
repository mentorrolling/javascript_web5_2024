let edad = 17;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("NO ES MAYOR DE EDAD, Vaya a la casa");
}

let nota = 10;

if (nota >= 7) {
  console.log("Sobresaliente");
} else if (nota >= 9) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

let dia = prompt("Ingrese su dia de la semana favorito:");

switch (dia) {
  case "lunes":
    console.log("Su dia favorito es el LUNES");
    break;
  case "martes":
    console.log("Su dia favorito es el MARTES");
    break;
  case "miercoles":
    console.log("Su dia favorito es el MIERCOLES");
    break;
  default:
    console.log("LO QUE ESCRIBIO NO ES UN DIA DE LA SEMANA PERMITIDO");
}

// Enunciado:
// Escribe un programa que solicite al usuario un número y determine si es positivo, negativo o cero.

let numero = prompt("Ingrese un numero: ");

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log("El numero es PAR");
  } else {
    console.log("El numero es IMPAR");
  }
} else {
  console.log("Debe ingresar un numero");
}

/*
En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta, asi:
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento *
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.
*/

let montoVenta = Number(prompt("Ingrese el monto de venta: "));
let descuento = 0;
let precioFinalConDescuento = 0;

if (montoVenta < 500) {
  console.log("NO HAY DESCUENTO");
} else if (montoVenta >= 500 && montoVenta <= 1000) {
  console.log("TIENE UN DESCUENTO DEL 5%");
  descuento = montoVenta * 0.05;
  precioFinalConDescuento = montoVenta - descuento;
  console.log("El IMPORTE A PAGAR ES DE: " + precioFinalConDescuento);
} else if (montoVenta > 1000 && montoVenta <= 7000) {
  console.log("TIENE UN DESCUENTO DEL 11%");
  descuento = montoVenta * 0.11;
  precioFinalConDescuento = montoVenta - descuento;
  console.log("El IMPORTE A PAGAR ES DE: " + precioFinalConDescuento);
} else if (montoVenta > 7000 && montoVenta <= 15000) {
  console.log("TIENE UN DESCUENTO DEL 18%");
  descuento = montoVenta * 0.18;
  precioFinalConDescuento = montoVenta - descuento;
  console.log("El IMPORTE A PAGAR ES DE: " + precioFinalConDescuento);
} else {
  console.log("TIENE UN DESCUENTO DEL 25%");
  descuento = montoVenta * 0.25;
  precioFinalConDescuento = montoVenta - descuento;
  console.log("El IMPORTE A PAGAR ES DE: " + precioFinalConDescuento);
}
