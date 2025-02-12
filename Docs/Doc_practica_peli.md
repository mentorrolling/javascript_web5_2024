**Documentación para Estudiantes: Gestión de Películas con JavaScript y LocalStorage**

Este código es un ejemplo práctico de cómo gestionar un listado de películas utilizando JavaScript y LocalStorage para persistir los datos. A continuación, se detallan los componentes clave:

---

### **1. Estructura de Datos**

- Cada película es un objeto con las siguientes propiedades:
  - `id`: Identificador único (numérico).
  - `titulo`, `director`, `genero`: Campos de texto.
  - `anio`, `duracion`, `calificacion`: Campos numéricos.
- Los datos se almacenan en un array (`peliculas`) y se persisten en **LocalStorage**.

---

### **2. Funciones Principales**

#### **`almacenarPelis()`**

- **Propósito**: Guarda el array `peliculas` en LocalStorage.
- **Uso**: Se ejecuta automáticamente al agregar o borrar películas.

#### **`agregarPeli(titulo, director, anio, genero, duracion, calificacion)`**

- **Propósito**: Añade una nueva película al array.
- **Detalles**:
  - Genera un `id` basado en la longitud del array (`peliculas.length + 1`).
  - Crea un objeto con los parámetros recibidos y lo agrega al array.
  - Actualiza LocalStorage.
- **Ejemplo de uso**:
  ```javascript
  agregarPeli("Matrix", "Lana Wachowski", 1999, "Ciencia Ficción", 136, 8.7);
  ```

#### **`mostrarPelis()`**

- **Propósito**: Muestra en consola el listado de películas almacenadas.
- **Formato de salida**:
  ```
  Lista de Películas
  ===================
  Título: El Padrino
  Año: 1972
  Calificación: 9.2
  ------------------------------
  Total de películas: 4
  ```

#### **`borrarPeli(id)`**

- **Propósito**: Elimina una película por su `id`.
- **Flujo**:
  1. Busca el índice de la película con el `id` proporcionado.
  2. Muestra un cuadro de confirmación al usuario.
  3. Si se confirma, elimina la película y actualiza LocalStorage.

#### **`buscarPeli(termino)`**

- **Propósito**: Busca películas cuyo título coincida con el término ingresado (insensible a mayúsculas/minúsculas).
- **Retorna**: Un array filtrado con los resultados.
- **Ejemplo**:
  ```javascript
  const resultados = buscarPeli("anillo");
  ```

---

### **3. Consideraciones Importantes**

- **Inicialización**: Si LocalStorage está vacío, `peliculas` se inicializa como `null`. Para evitar errores, se recomienda agregar:
  ```javascript
  let peliculas = JSON.parse(localStorage.getItem("peliculas")) || [];
  ```
- **Generación de IDs**: Usar `peliculas.length + 1` puede generar IDs duplicados si se eliminan películas. Una solución sería usar un contador único.
- **Validaciones**: No hay manejo de errores para parámetros inválidos (ej: `anio` como texto). Se sugiere añadir verificaciones.

---

### **4. Mejoras Propuestas**

1. **Usar Spread Operator** (simplificar `agregarPeli`):
   ```javascript
   const agregarPeli = (datos) => {
     const id = peliculas.length + 1;
     peliculas.push({ id, ...datos });
     almacenarPelis();
   };
   ```
2. **Manejar IDs de forma única**: Implementar un sistema de IDs autoincrementales que no dependan de la longitud del array.

---

### **5. Aprendizajes Clave**

- **LocalStorage**: Permite almacenar datos en el navegador de forma persistente.
- **CRUD**: Crear, Leer, Actualizar y Eliminar (en este caso, no hay función de actualización explícita).
- **Métodos de Arrays**: Uso de `push`, `splice`, `findIndex`, `filter`, y `forEach`.
