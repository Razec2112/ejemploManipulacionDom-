const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");


form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    console.log({event});//event es el parametro que nos envia automaticamente el addEventListener cuando ejecuta la funcion
    event.preventDefault();//se usa para prevenir que la pagina se recargue al pulsar el boton de submit
    const resultado = Number(input1.value) + Number(input2.value);
    result.innerText = "El resultado es: " + resultado;
}
