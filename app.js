// // //array de objetos
// let peliculas = [
//   {
//     id: 1,
//     titulo: "El Padrino",
//     director: "Francis Ford Coppola",
//     anio: 1972,
//     genero: "Drama/Crimen",
//     duracion: 175,
//     calificacion: 9.2,
//   },
//   {
//     id: 2,
//     titulo: "El Caballero de la Noche",
//     director: "Christopher Nolan",
//     anio: 2008,
//     genero: "Acción/Crimen",
//     duracion: 152,
//     calificacion: 9.0,
//   },
//   {
//     id: 3,
//     titulo: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     anio: 1994,
//     genero: "Drama/Crimen",
//     duracion: 154,
//     calificacion: 8.9,
//   },
//   {
//     id: 4,
//     titulo: "La Lista de Schindler",
//     director: "Steven Spielberg",
//     anio: 1993,
//     genero: "Drama/Historia",
//     duracion: 195,
//     calificacion: 8.9,
//   },
// ];

let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];

const almacenarPelis = () => {
  localStorage.setItem("peliculas", JSON.stringify(peliculas));
};

//algoritmo
/*
entrada: objeto pelicula
proceso: agregar el objeto al arreglo
salida: arreglo actualizado

*/
const agregarPeli = (
  titulo = "",
  director = "",
  anio = 0,
  genero = "",
  duracion = 0,
  calificacion = 0
) => {
  const id = peliculas.length + 1;
  const pelicula = {
    id: id,
    titulo: titulo,
    director: director,
    anio: anio,
    genero: genero,
    duracion: duracion,
    calificacion: calificacion,
  };

  peliculas.push(pelicula);
  almacenarPelis();
  return peliculas;
};

//spread operator
//  const datos = {
//     titulo: "El Señor de los Anillos: La Comunidad del Anillo",
//     director: "Peter Jackson",
//     anio: 2001,
//     genero: "Fantasía/Aventura",
//     duracion: 178,
//     calificacion: 8.8,
//   };

// const agregarPeli = (datos) => {
//   const id = peliculas.length + 1;
//   const pelicula = {
//     id,
//     ...datos,
//   };

//   peliculas.push(pelicula);
//   return peliculas;
// };

// agregarPeli(
//   "El Señor de los Anillos: La Comunidad del Anillo",
//   "Peter Jackson",
//   2001,
//   "Fantasía/Aventura",
//   178,
//   8.8
// );

//leer los datos
/*
entrada: arreglo de peliculas
proceso: recorrer el arreglo y mostrar cada película
salida: lista de películas en consola
*/

const mostrarPelis = () => {
  // peliculas = JSON.parse(localStorage.getItem("peliculas"));

  console.log("Lista de Películas");
  console.log("===================");

  for (let i = 0; i < peliculas.length; i++) {
    console.log(`Título: ${peliculas[i].titulo}`);
    console.log(`Año: ${peliculas[i].anio}`);
    console.log(`Calificación: ${peliculas[i].calificacion}`);
    console.log("------------------------------");
  }
  console.log("Total de películas: " + peliculas.length);

  // peliculas.forEach((item) => {
  //   console.log(`Título: ${item.titulo}`);
  //   console.log(`Año: ${item.anio}`);
  //   console.log(`Calificación: ${item.calificacion}`);
  //   console.log("------------------------------");
  // });
  // console.log("Total de películas: " + peliculas.length);
};

//Borrar un elemento del array
/*
entrada: id de la película
proceso: Identificar la peli por su id, preguntar si queremos borrarla y borrar si aceptamos.
Salida: lista de películas actualizada
*/
const borrarPeli = (id) => {
  // return peliculas.find((item) => item.id === id);
  let indice = peliculas.findIndex((item) => item.id === id);
  if (indice >= 0) {
    let validacion = confirm(
      `Está seguro que quiere eliminar la película ${peliculas[indice].titulo}`
    );

    if (validacion) {
      peliculas.splice(indice, 1);
      almacenarPelis();
      return peliculas;
    }
  } else {
    return "No se encontró la película";
  }
};

const buscarPeli = (termino) => {
  //'El'
  return peliculas.filter((peli) =>
    peli.titulo.toLowerCase().includes(termino.toLowerCase())
  );
};

//Buscador flexible
const buscarFlexPelis = (prop = "titulo", termino = "") => {
  const props = ["titulo", "genero", "director"];

  let validar = props.includes(prop);
  if (validar) {
    return peliculas.filter((peli) =>
      peli[prop].toLowerCase().includes(termino.toLowerCase())
    );
  } else {
    return "No se encontraron datos :( ";
  }
};

//Buscar por rango
const buscarPorRango = (propiedad, min, max) => {
  const props = ["anio", "duracion", "calificacion"];

  let validar = props.includes(propiedad);

  if (validar) {
    return peliculas.filter(
      (peli) => peli[propiedad] >= min && peli[propiedad] <= max
    );
  } else {
    return "No se encontraron datos :( ";
  }
};

//Ordenar por calificación

//Modificar Pelis
/*
Algoritmo:
entrada: id, datos a modificar
proceso: busco peli con su id, reemplazo los datos originales con los nuevos
salida: array actualizado con la película modificada

datos-> {titulo:'',director:''}
*/

const modificarPeli = (id, datos) => {
  let pelicula = peliculas.find((peli) => peli.id === id);
  //datos debe ser un objeto con propiedades de peliculas. ejemplo {titulo:'batman',director:'pablito'}
  if (pelicula) {
    Object.assign(pelicula, datos);
    // console.log(pelicula);
    // console.log(peliculas);
  } else {
    console.warn("No se encontró la película");
  }
};

//Función para usar botón
const mostrarMensaje = () => {
  alert("Hiciste click!");
};

//Tabla de películas
const cargarTabla = () => {
  let cuerpoTabla = document.getElementById("cuerpo-tabla");
  peliculas.forEach((peli) => {
    let fila = document.createElement("tr");
    let celdas = `<th scope="row">${peli.id}</th>
                <td>${peli.titulo}</td>
                <td>${peli.genero}</td>
                <td>${peli.calificacion}</td>`;

    fila.innerHTML = celdas;
    cuerpoTabla.append(fila);
  });
};

document
  .getElementById("formPelicula")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let titulo = document.getElementById("titulo").value;
    let director = document.getElementById("director").value;
    let anio = document.getElementById("anio").value;
    let genero = document.getElementById("genero").value;
    let duracion = document.getElementById("duracion").value;
    let calificacion = document.getElementById("calificacion").value;

    let validar = peliculas.find((peli) => peli.titulo === titulo);

    if (validar) {
      alert("La peli ya existe");
    } else {
      agregarPeli(titulo, director, anio, genero, duracion, calificacion);

      alert("La peli se guardó");
    }
    document.getElementById("formPelicula").reset();
    document.getElementById("titulo").focus();
  });

document.getElementById("searchTitle").addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
  let texto = document.getElementById("buscar-title").value;
  // console.log(buscarFlexPelis("titulo", texto));

  let resultadoDeBusqueda = buscarFlexPelis("titulo", texto);
  if (resultadoDeBusqueda.length > 0) {
    document.getElementById("resultado").innerText =
      JSON.stringify(resultadoDeBusqueda);
  } else {
    document.getElementById("resultado").innerText =
      "No se encontraron resultados";
  }
});
