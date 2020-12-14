//capturo el párrafo del HTML mediante su atributo id.
let p = document.getElementById("parrafo1");

// el objeto window representa al navegador o la pestaña
// no hace falta ponerlo
window.alert("Esto es un alert....");

p.innerHTML = "Adiós";

alert("Esto es otro alert, sin usar window.");

p.className = "importante";

p.style.textDecoration = "underline";
p.style.color = "orange";

