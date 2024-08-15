let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log (numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

   
    if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
 } else {
    //El usuario no acertó.
    if (numeroUsuario > numeroSecreto) {
        asignarTextoElemento("p","El numero secreto es menor");
    } else {
        asignarTextoElemento("p","El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
 }
    return;
  
}

function limpiarCaja() {
document.querySelector("#valorUsuario").value ="";  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se asignaron todos los numero posibles");
    } else {
         //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","juego del número secreto!");
    asignarTextoElemento("p",`indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos=1;
}

function reiniciarJuego() {
   //limpiar caja
   limpiarCaja();
   //Indicar mensaje de intervalo de numeros
   //Generar el numero aleatorio
   //inicializar el numero de intentos
   condicionesIniciales();
   //Deshabilitar el boton de nuevo juego
  document.querySelector ("#reiniciar").setAttribute("disabled",true)

}

condicionesIniciales();