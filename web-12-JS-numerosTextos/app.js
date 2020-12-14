let textoNum = prompt("¿Cuántos años tienes?", "Escribe un número entero");
//esto convierte un texto (que represente un número) a un número
let num = parseInt(textoNum);
console.log(num);
console.log(textoNum);
// jubilacion.
// devuelve un mensaje que me dice si debería o 
// no estar jubilado de acuerdo a mi edad
// vamos a poner 65 años como la edad de jubilación


// En caso de que el número sea menor que 65
// el programa tiene que devolver cuántos
// años me quedan de trabajar
let edadJubilacion = 65;
let mensaje = "";
if( num >= edadJubilacion){
    mensaje = `Deberías estar jubilado`;
}else{
    mensaje = `Todavía te quedan ${edadJubilacion - num} año(s) para jubilarte`;
}

alert(mensaje);