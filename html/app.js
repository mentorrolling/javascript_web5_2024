const textos = [
  "Esto es un ejemplo de página dinámica ⭐",
  "La ciberseguridad se ha vuelto crucial en la era del Internet de las Cosas (IoT).",
  "El lenguaje Python domina en ciencia de datos gracias a bibliotecas como Pandas y NumPy.",
  "Los contenedores Docker revolucionaron la implementación de aplicaciones en entornos cloud.",
];
// let parrafosArray = document.querySelectorAll("p");
// parrafosArray.forEach((parrafo, index) => {
//   parrafo.innerText = textos[index];
// });

const textosInformatica = [
  {
    titulo: "Machine Learning en la Práctica",
    texto:
      "Los algoritmos de machine learning permiten a las máquinas aprender patrones a partir de datos.",
    imagen: "https://placehold.co/600x400/000000/FFFFFF?text=Red+Neuronal+ML",
  },
  {
    titulo: "IoT y Seguridad Digital",
    texto:
      "La ciberseguridad se ha vuelto crucial en la era del Internet de las Cosas (IoT).",
    imagen: "https://picsum.photos/seed/iot-security/600/400",
  },
  {
    titulo: "Python en Ciencia de Datos",
    texto:
      "El lenguaje Python domina en ciencia de datos gracias a bibliotecas como Pandas y NumPy.",
    imagen:
      "https://placehold.co/600x400/003366/FFFFFF?text=Python+Data+Science",
  },
  {
    titulo: "Contenedores y Cloud Computing",
    texto:
      "Los contenedores Docker revolucionaron la implementación de aplicaciones en entornos cloud.",
    imagen: "https://picsum.photos/seed/docker-cloud/600/400",
  },
  {
    titulo: "Se desploma la cripto $Libra",
    texto: "Todos perdieron sus ahorros de toda la vida. Se quieren morir.",
    imagen:
      "https://th.bing.com/th/id/OIP.yfDO9mbHpAgYOddONFV0RQHaEo?rs=1&pid=ImgDetMain",
  },
];

let contenedorNoticias = document.getElementById("noticias");
textosInformatica.forEach((notas) => {
  let articulo = document.createElement("article");

  let contenido = `<header>
          <h4>${notas.titulo}</h4>
          <img src=${notas.imagen} alt=${notas.titulo}>
        </header>
        <section>
          <p>
            ${notas.texto}
          </p>
        </section>
        <footer>
          <span>Autor: RollingCode</span>
        </footer>`;

  articulo.innerHTML = contenido;

  contenedorNoticias.append(articulo);
});
