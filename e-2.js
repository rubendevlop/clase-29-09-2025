/*
El array muestra el orden en que se arrancó la carrera y los puestos de cada piloto. Para cada acción se deben usar propiedades o métodos de los arrays vistos en clase.
Antes de la carrera se muestra la tabla en orden alfabético con los pilotos. No se debe modificar el array original.
Mostrar que pilotos vienen en el 3er y 5to puesto.
se sumaron tres pilotos más al final "Pierre Gasly","Valtteri Bottas","Lance Stroll"
"Lewis Hamilton" avanzó al primer puesto
Russel pasó al 6to puesto
"Carlos Sainz" tuvo desperfectos con el vehículo y salió de la carrera.
Alonso avanzó rápidamente al 2do puesto dejando fuera de la carrera al piloto que estaba en ese puesto.
Pérez se retrasó en Boxes y quedó en último lugar.
La carrera terminó y se muestra un mensaje con la lista de los pilotos que quedaron en el podio (los 3 primeros puestos)

*/

// Orden de largada (array original)

const pilotos = ["Carlini","Perez", "Hamilton", "Alonso", "Russel", "Sainz"];
console.log([...pilotos].sort());

// Mostrar orden alfabético SIN modificar el original
const pilotosAlfabetico = [...pilotos].sort();
console.log("Orden alfabético:", pilotosAlfabetico);

// Mostrar 3er y 5to puesto del array original
console.log("3er puesto:", pilotos[2]);
console.log("5to puesto:", pilotos[4]);

// Se suman tres pilotos al final
pilotos.push("Pierre Gasly", "Valtteri Bottas", "Lance Stroll");

// Mostrar el nuevo array
console.log("Lista actualizada:", pilotos);

// 1) Quitar a Hamilton de su puesto original
let indiceHamilton = pilotos.indexOf("Hamilton");
pilotos.splice(indiceHamilton, 1);

// 2) Ponerlo en el primer puesto
pilotos.unshift("Hamilton");

// Mostrar el resultado
console.log("Nuevo orden de carrera:", pilotos);

//  mover a Russel al 6to puesto ----
let indiceRussel = pilotos.indexOf("Russel");

// Si lo encontramos, lo sacamos de su lugar
if (indiceRussel !== -1) {
  let [russel] = pilotos.splice(indiceRussel, 1); // lo quitamos
  pilotos.splice(5, 0, russel); // lo insertamos en el índice 5 (6º puesto)
}

console.log("Russel en el 6to puesto:", pilotos);


// Eliminar a "Sainz"
let indiceSainz = pilotos.indexOf("Sainz");
if (indiceSainz !== -1) {
  pilotos.splice(indiceSainz, 1);
}

console.log("Sainz abandonó la carrera:", pilotos);

let eliminado = pilotos.splice(1, 1)[0];

// 2) Buscar a Alonso y moverlo al 2º puesto
let indiceAlonso = pilotos.indexOf("Alonso");
if (indiceAlonso !== -1) {
  let [alonso] = pilotos.splice(indiceAlonso, 1); // quitar Alonso de su lugar
  pilotos.splice(1, 0, alonso); // insertarlo en el índice 1 (2º puesto)
}

console.log("Piloto eliminado:", eliminado);
console.log("Nuevo orden de carrera:", pilotos);

let indicePerez = pilotos.indexOf("Perez");

// 2) Si está en la lista, quitarlo y mandarlo al final
if (indicePerez !== -1) {
  let [perez] = pilotos.splice(indicePerez, 1); // lo saco
  pilotos.push(perez); // lo mando al último lugar
}

console.log("Pérez quedó último:", pilotos);

let podio = pilotos.slice(0, 3);

// Mostrar mensaje final
console.log("🏆 La carrera terminó!");
console.log(`🥇 1er puesto: ${podio[0]}`);
console.log(`🥈 2do puesto: ${podio[1]}`);
console.log(`🥉 3er puesto: ${podio[2]}`);