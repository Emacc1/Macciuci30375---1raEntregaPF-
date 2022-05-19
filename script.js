const propiedades = [];

class propiedad {
    constructor(tipo, zona, direccion, habitaciones, precio) {
        this.tipo  = tipo.toUpperCase();
        this.zona  = zona.toUpperCase();
        this.direccion  = direccion.toUpperCase();
        this.habitaciones  = parseFloat(habitaciones);
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
}

propiedades.push(new propiedad (`departamento`, `Belgrano`, `La Pampa 2026`,`19`,`65000`));
propiedades.push(new propiedad (`PH`, `Belgrano`, `La Pampa 2900`,`2`,`45000`));
propiedades.push(new propiedad (`departamento`, `Palermo`, `Scalabrini Ortiz 1800`,`4`,`85000`));
propiedades.push(new propiedad (`casa`, `Retiro`, `Paraguay 435`,`3`,`55000`));

const listaBelgrano = propiedades.filter((propiedad)=>propiedad.zona=`Belgrano`);
const listaPalermo = propiedades.filter((propiedad)=>propiedad.zona=`Palermo`);
const listaRetiro = propiedades.filter((propiedad)=>propiedad.zona=`Retiro`);

// let vuelveAPreguntar = true;


//     vender(){

//         this.vendido = true;
//     }
// }


let mensajeBusqueda1 = `Desea buscar una propiedad o publicar un aviso? \n 1- buscar \n 2-publicar \n 0-Cancelar`;
let mensajeBusqueda2 = `Que desea visualizar? \n 1-Valor promedio por zona \n 2-Propiedades disponibles \n 0-Volver atras`;
let mensajeBusqueda3 = `En que zona desea buscar el precio promedio?\n 1-Todas las zonas\n 2-Belgrano\n 3-Palermo \n 4-Retiro \n 0-Volver atras`;
let mensajeBusqueda4 = `En que zona desea buscar?\n 1-Todas las zonas\n 2-Belgrano\n 3-Palermo \n 4-Retiro \n 0-Volver atras`;


console.log(propiedades);



// function buscarOPublicar(art1) {
//     if (art1 == 1){
//         buscarPropiedad(prompt(mensajeBusqueda2));
//     } else if (art1 == 2) {
//         prompt de funcion para ingresar propiedad
//     } else if (art1 == 0) {
//         alert('gracias vuelva prontos');
//     } else {
//         alert("Valor invalido");
//     }
// }


buscarPropiedad(prompt(mensajeBusqueda2));

function buscarPropiedad(art3) {
    if (art3 == 1) {
        buscarPrecioPromedio(prompt(mensajeBusqueda3));
    } else if (art3 == 2) {
        buscarZona(prompt(mensajeBusqueda4));
    } else if (art1 == 0) {
        alert('gracias vuelva prontos');
    } else {
        alert("Valor invalido");
    }
}


function buscarZona(art2) {
    if (art2 == 1){
        alert(propiedades);
    } else if (art2 == 2) {
        alert(listaBelgrano)
    } else if (art2 == 3) {
        alert(listaPalermo)
    } else if (art2 == 4) {
        alert(listaRetiro)
    } else if (art2 == 0) {
        buscarOPublicar(prompt(mensajeBusqueda1));
    } else {
        alert("Valor invalido");
    }
}



function buscarPrecioPromedio(art4) {
    if (art4 == 1) {
        
    }
}