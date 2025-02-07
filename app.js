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

//array de objetos
let peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Drama/Crimen",
    duracion: 175,
    calificacion: 9.2,
  },
  {
    id: 2,
    titulo: "El Caballero de la Noche",
    director: "Christopher Nolan",
    anio: 2008,
    genero: "Acción/Crimen",
    duracion: 152,
    calificacion: 9.0,
  },
  {
    id: 3,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anio: 1994,
    genero: "Drama/Crimen",
    duracion: 154,
    calificacion: 8.9,
  },
  {
    id: 4,
    titulo: "La Lista de Schindler",
    director: "Steven Spielberg",
    anio: 1993,
    genero: "Drama/Historia",
    duracion: 195,
    calificacion: 8.9,
  },
];
