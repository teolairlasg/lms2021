//capturo el párrafo del HTML mediante su atributo id.
let p = document.getElementById("parrafo1");

// el objeto window representa al navegador o la pestaña
// no hace falta ponerlo
window.alert("Esto es un alert....");

p.innerHTML = "Adiós";

//alert("Esto es otro alert, sin usar window.");

p.className = "importante";

p.style.textDecoration = "underline";
p.style.color = "orange";

let e = document.getElementById("enlace");
e.style.color = "black";

let listaEnlaces = document.getElementsByTagName("a");

for (const enlace of listaEnlaces) {
    enlace.style.backgroundColor = "red";
}

let resultado = confirm("¿Quieres que te salude?");
console.log(resultado);

if (resultado == true) {
    p.innerHTML = "Hola usuario";
    //alert("Hola usuario")
} else {
    p.innerHTML = "pues no te saludo";
}

let respuesta = prompt("Dime tu nombre:", "Escríbelo aquí");
console.log(respuesta);


