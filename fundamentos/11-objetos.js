let auto = {
  //clave : valor
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  color: "Rojo",
  encender: function () {
    console.log("El auto está encendido");
  },
  apagar: function () {
    console.log("El auto está apagado");
  },
};

//acceder a propiedades
console.log(auto.color);
console.log(auto["color"]);
auto.apagar();

//modificar propiedades
auto.puertas = 3;
auto.disponible = true;
auto.color = "azul";

//Borrar una propiedad
delete auto.modelo;

//como recorro un objeto
//for in
for (const key in auto) {
  if (key !== "encender" && key !== "apagar") {
    console.log(`${key}:${auto[key]}`);
  }
}
