let contraseña = prompt("Ingresa la contraseña correcta");

function tieneMayuscula(contrasena) {
    let caracteres = contrasena.split("");
    let hayMayuscula = false;

    for (let i = 0; i < caracteres.length; i++) {
        if (caracteres[i] === caracteres[i].toUpperCase() && isNaN(caracteres[i])) {
            hayMayuscula = true;
        }
    }

    return hayMayuscula;
}

function tieneNumero(contrasena) {
    let caracteres = contrasena.split("");
    let hayNumero = false;

    for (let i = 0; i < caracteres.length; i++) {
        if (!isNaN(caracteres[i])) {
            hayNumero = true;
        }
    }

    return hayNumero;
}


let errores = [];
let esLarga= contraseña.length >= 6;
let mayus = tieneMayuscula(contraseña);
let numero = tieneNumero(contraseña);
if (!esLarga){
    errores.push("Debe tener al menos 6 caracteres");
}
if(!mayus){
    errores.push("Debe contener al menos una mayuscula");
}
if(!numero){
    errores.push("Debe contener al menos un numero");
} 

if(errores.length === 0){
    alert("Contraseña valida");
} else{
    alert(`Contraseña invalida: \n
        ${errores.join("\n")}`);
}