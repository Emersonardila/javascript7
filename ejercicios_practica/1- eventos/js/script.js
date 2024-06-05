"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log

*/

const boton = document.querySelector("button");

boton.onclick= () => {
    console.log("Respuesta evento click");
    boton.classList.add = ("clicked");
}

boton.onmouseover= () => {
    console.log("Respuesta evento mouseover");
    boton.classList.add = ("clicked");
}

boton.onmouseout= () => {
    console.log("Respuesta evento mouseout");
    boton.classList.add = ("clicked");
}


/* 2 - Enunciado

Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.

*/
const select = document.querySelector('select');
const body = document.querySelector('body');
function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
select.onchange = () => {
    select.value === 'efectivo' ? update('green','white'):('red','white');
    select.value === 'transferencia' ? update('yellow','blue') :('red','white');
    select.value === 'tarjeta' ? update('blue','black') :('red','white');
    
}


/* 3 - Enunciado

Cree un evento que capture cuando haya finalizado de ingresas
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.

*/
const input=document.querySelector("input");
const parrafo=document.getElementById("parrafo");
function datos(e){
    parrafo.textContent=alert(e.target.value);
}
input.addEventListener("change",datos);


    


