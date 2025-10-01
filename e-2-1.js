let pilotos = ["Carlini","Perez", "Hamilton", "Alonso", "Russel", "Sainz"];

console.log([...pilotos].sort());

function pilotosAlfabeticos(lista){
    return lista.sort();
}

function mostrarPuesto(lista, puesto){
    return lista[puesto -1]
}

function agregarPilotos(lista, nuevoPilotos){
    lista.push(nuevoPilotos);
    return lista;
}

function moverPiloto(lista, nombre, nuevoIndice){
    let indice = lista.indexOf(nombre);
    if(indice !== -1){
        let [piloto] = lista.splice(indice, 1);
        lista.splice(nuevoIndice, 0,piloto);
    }
    return lista;
}

function eliminarPiloto(lista, nombre){
    let indice = lista.indexOf(nombre);
    if (indice !== -1){
        lista.splice(indice, 1);
    }
    return lista;
}

function obtenerPodio(lista){
    return lista.slice(0,3);
}

console.log(`
    Orden alfabetico ${pilotosAlfabeticos(pilotos)}\n

    3er puesto: ${mostrarPuesto(pilotos, 3)}\n

    5to puesto: ${mostrarPuesto(pilotos, 5)}\n

    Se agregaron 3 pilotos nuevos: ${agregarPilotos(pilotos, "Pierre Gasly", "Valtteri Bottas", "Lance Stroll")}\n

    Lista actualizada: ${pilotos}`);

moverPiloto(pilotos, "Hamilton",0);

console.log(`Hamilton al 1º puesto: ${pilotos}`);

moverPiloto(pilotos, "Russel", 5);

console.log( `Russel al 6º puesto: ${pilotos}`);

eliminarPiloto(pilotos, "Sainz");

console.log(`Sainz tuvo que abandonar la carrera por desperfectos tecnicos: ${pilotos}`);

moverPiloto(pilotos, "Alonso", 1);

console.log("Alonso al 2º puesto:", pilotos);

moverPiloto(pilotos, "Perez", pilotos.length - 1);

console.log("Pérez último:", pilotos);

let podio = obtenerPodio(pilotos);

console.log("La carrera terminó!");

console.log(`1er puesto: ${podio[0]}`);
console.log(`2do puesto: ${podio[1]}`);
console.log(`3er puesto: ${podio[2]}`);

