let respuesta = prompt("Dime tu nombre");
//crear un alert que diga Hola <respuesta>.
//donde <respuesta> es el contenido que te ha pasado el usuario
console.log(respuesta);

//comparadores:
// == es igual a
// != es diferente a
// > es mayor que
// < es menor que
// <= es menor o igual que
// >= es mayor o igual que

if (respuesta != null) {
    let mensaje = "Hola " + respuesta;
    alert(mensaje);    
}

