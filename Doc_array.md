# Arrays

Los arrays (o arreglos) son estructuras que nos permiten almacenar múltiples valores en una sola variable. Aquí te dejo la explicación de cada método utilizado:

---

### 1. **Acceder a un elemento**

```javascript
console.log(alumnos[0]); // Accede al primer elemento del array ("José")
console.log(`Bienvenida ${alumnos[4]}`); // Accede al quinto elemento ("Floripondia")
```

- Los arrays tienen índices que comienzan desde `0`.
- Usamos `array[posición]` para acceder a un elemento en una posición específica.

---

### 2. **Saber la cantidad de elementos**

```javascript
console.log(`La cantidad de alumnos es de ${alumnos.length}`);
```

- `length` es una propiedad que nos dice cuántos elementos tiene un array.
- En este caso, `alumnos.length` devuelve `5`.

---

### 3. **Mostrar el último elemento**

```javascript
console.log(alumnos.length - 1); // Devuelve la posición del último elemento (4)
console.log(alumnos[alumnos.length - 1]); // Accede al último elemento ("Floripondia")
console.log(alumnos.at(-1)); // Otra forma de acceder al último elemento
```

- `alumnos.length - 1` nos da la posición del último elemento.
- `at(-1)` es un método moderno para acceder al último elemento directamente.

---

### 4. **Concatenar arrays**

```javascript
let comision = alumnosPresentes.concat(alumnosAusentes, alumnosDestacados, [
  "Pablo",
  "Silvina",
]);
```

- `concat()` une dos o más arrays en uno nuevo.
- En este caso, `comision` tendrá todos los elementos de `alumnosPresentes`, `alumnosAusentes`, `alumnosDestacados`, y los elementos adicionales `"Pablo"` y `"Silvina"`.

---

### 5. **Iterar un array**

```javascript
for (let i = 0; i < comision.length; i++) {
  console.log(`Bienvenid@ ${comision[i]}`);
}
```

- Un bucle `for` recorre cada elemento del array.
- `comision[i]` accede al elemento en la posición `i`.

---

### 6. **Agregar elementos a un array**

```javascript
comision.push("Mario"); // Agrega "Mario" al final del array
comision.unshift("Margarita"); // Agrega "Margarita" al inicio del array
```

- `push()` agrega un elemento al final del array.
- `unshift()` agrega un elemento al inicio del array.

---

### 7. **Eliminar elementos de un array**

```javascript
comision.pop(); // Elimina el último elemento del array
comision.shift(); // Elimina el primer elemento del array
```

- `pop()` elimina el último elemento.
- `shift()` elimina el primer elemento.

---

### 8. **Eliminar o agregar elementos en cualquier posición**

```javascript
comision.splice(4, 1); // Elimina 1 elemento en la posición 4
comision.splice(9, 0, "Walter", "Silvana"); // Agrega "Walter" y "Silvana" en la posición 9
```

- `splice()` puede eliminar o agregar elementos en una posición específica.
- El primer argumento es la posición, el segundo es cuántos elementos eliminar, y los siguientes son los elementos a agregar.

---

### 9. **Saber la posición de un elemento**

```javascript
console.log(comision.indexOf("Marky"));
```

- `indexOf()` devuelve la posición de un elemento en el array.
- Si el elemento no existe, devuelve `-1`.

---

### 10. **Saber si un elemento está en el array**

```javascript
console.log(comision.includes("Mark"));
```

- `includes()` devuelve `true` si el elemento está en el array, y `false` si no está.

---

### 11. **Ordenar un array**

```javascript
console.log(comision.sort()); // Ordena el array de A-Z
console.log(comision.reverse()); // Ordena el array de Z-A
```

- `sort()` ordena los elementos alfabéticamente (A-Z).
- `reverse()` invierte el orden del array.

---

### 12. **Copiar un array**

```javascript
let comisionNueva = comision.slice(); // Crea una copia del array
```

- `slice()` crea una copia del array.
- Si usamos `let comisionNueva = comision`, ambas variables apuntarán al mismo array (no es una copia).

---

### Resumen de métodos:

- **Acceder a elementos:** `array[posición]`, `array.at(-1)`.
- **Longitud del array:** `array.length`.
- **Concatenar:** `concat()`.
- **Iterar:** Bucle `for`.
- **Agregar elementos:** `push()`, `unshift()`, `splice()`.
- **Eliminar elementos:** `pop()`, `shift()`, `splice()`.
- **Buscar elementos:** `indexOf()`, `includes()`.
- **Ordenar:** `sort()`, `reverse()`.
- **Copiar:** `slice()`.

## Métodos Filter, find, findIndex, forEach y map

Estos métodos son muy útiles para trabajar con arrays y realizar operaciones sobre sus elementos. Aquí tienes una explicación clara y ejemplos prácticos:

---

### 1. **`filter()`**

El método `filter()` crea un nuevo array con todos los elementos que cumplan una condición específica.

#### Ejemplo:

```javascript
let numeros = [10, 20, 30, 40, 50];

// Filtrar números mayores que 25
let mayoresQue25 = numeros.filter(function (numero) {
  return numero > 25;
});

console.log(mayoresQue25); // Resultado: [30, 40, 50]
```

#### Explicación:

- `filter()` recorre cada elemento del array.
- Si la condición (`numero > 25`) es `true`, el elemento se incluye en el nuevo array.
- Si es `false`, el elemento se omite.

---

### 2. **`find()`**

El método `find()` devuelve el **primer elemento** que cumpla una condición específica. Si no encuentra ningún elemento, devuelve `undefined`.

#### Ejemplo:

```javascript
let nombres = ["Ana", "Juan", "Carlos", "María"];

// Encontrar el primer nombre que empiece con "M"
let nombreConM = nombres.find(function (nombre) {
  return nombre.startsWith("M");
});

console.log(nombreConM); // Resultado: "María"
```

#### Explicación:

- `find()` recorre el array hasta encontrar el primer elemento que cumpla la condición.
- En este caso, `startsWith("M")` verifica si el nombre comienza con la letra "M".

---

### 3. **`forEach()`**

El método `forEach()` ejecuta una función para **cada elemento** del array. No devuelve un nuevo array, solo realiza una acción con cada elemento.

#### Ejemplo:

```javascript
let frutas = ["Manzana", "Banana", "Naranja"];

// Mostrar cada fruta en la consola
frutas.forEach(function (fruta) {
  console.log(`Me gusta comer ${fruta}`);
});
```

#### Resultado en consola:

```
Me gusta comer Manzana
Me gusta comer Banana
Me gusta comer Naranja
```

#### Explicación:

- `forEach()` recorre cada elemento del array y ejecuta la función proporcionada.
- Es útil cuando solo necesitas realizar una acción con cada elemento, sin crear un nuevo array.

---

### 4. **`map()`**

El método `map()` crea un **nuevo array** aplicando una función a cada elemento del array original. Es útil para transformar los elementos de un array.

#### Ejemplo:

```javascript
let numeros = [1, 2, 3, 4, 5];

// Crear un nuevo array con el doble de cada número
let dobles = numeros.map(function (numero) {
  return numero * 2;
});

console.log(dobles); // Resultado: [2, 4, 6, 8, 10]
```

#### Explicación:

- `map()` recorre cada elemento del array y aplica la función proporcionada.
- El resultado de la función se agrega al nuevo array.
- En este caso, multiplicamos cada número por 2.

---

### Resumen de métodos:

1. **`filter()`**: Crea un nuevo array con los elementos que cumplen una condición.

   - Ejemplo: Filtrar números mayores que 25.
   - Uso: Cuando necesitas un subconjunto del array.

2. **`find()`**: Devuelve el primer elemento que cumple una condición.

   - Ejemplo: Encontrar el primer nombre que empiece con "M".
   - Uso: Cuando necesitas buscar un elemento específico.

3. **`forEach()`**: Ejecuta una función para cada elemento del array.

   - Ejemplo: Mostrar cada fruta en la consola.
   - Uso: Cuando necesitas realizar una acción con cada elemento.

4. **`map()`**: Crea un nuevo array transformando cada elemento.
   - Ejemplo: Crear un array con el doble de cada número.
   - Uso: Cuando necesitas transformar los elementos de un array.

---

### Ejemplo combinado:

```javascript
let personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 30 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "María", edad: 20 },
];

// Filtrar personas mayores de 18 años
let mayoresDeEdad = personas.filter(function (persona) {
  return persona.edad > 18;
});

// Obtener los nombres de las personas mayores de edad
let nombresMayoresDeEdad = mayoresDeEdad.map(function (persona) {
  return persona.nombre;
});

// Mostrar los nombres en la consola
nombresMayoresDeEdad.forEach(function (nombre) {
  console.log(nombre);
});
```

#### Resultado en consola:

```
Ana
Juan
María
```

---

### Conclusión:

- **`filter()`**: Para filtrar elementos.
- **`find()`**: Para buscar un elemento específico.
- **`forEach()`**: Para realizar acciones con cada elemento.
- **`map()`**: Para transformar elementos.

Estos métodos son fundamentales en JavaScript y te permiten trabajar con arrays de manera eficiente.

## FindIndex

El método `findIndex` en JavaScript se utiliza para encontrar el índice del **primer elemento** de un array que cumple con una condición especificada por una función de prueba. Si ningún elemento cumple la condición, retorna `-1`.

### Ejemplo:

#### Encontrar el índice del primer número mayor que 10:

```javascript
const numeros = [5, 8, 12, 3, 20];
const indice = numeros.findIndex((num) => num > 10);

console.log(indice); // Resultado: 2 (el 12 está en la posición 2)
```

---

### Diferencias clave:

- **`findIndex` vs `find`**:  
  `find` retorna **el elemento** encontrado, mientras que `findIndex` retorna **su índice**.

---

### Caso de error (cuando no se encuentra):

```javascript
const indiceNoEncontrado = [1, 2, 3].findIndex((num) => num > 5);
console.log(indiceNoEncontrado); // Resultado: -1
```

---

### ¿Cuándo usarlo?

- Cuando necesitas la **posición** de un elemento que cumple una condición compleja (no solo un valor específico).
- Para verificar si un elemento existe en el array bajo ciertos criterios (retorna `-1` si no existe).
