
let entrada = document.getElementById("insertar");
let salida = document.getElementById("salida");
const vacio = document.getElementById("vacio");
const nada = document.getElementById("nada");
const pVacio = document.getElementById("pVacio");
const copia = document.getElementById("copiar");




function encriptar(){

    if(entrada.value!=""){

    salida.style.display = "flex";
    vacio.style.display= "none";
    nada.style.display= "none";
    pVacio.style.display= "none";
    copia.style.display= "flex";

    let diccionarioEncriptar = {};

diccionarioEncriptar["a"] = "ai";
diccionarioEncriptar["e"] = "enter";
diccionarioEncriptar["i"] = "imes";
diccionarioEncriptar["o"] = "ober";
diccionarioEncriptar["u"] = "ufat";

const texto =entrada.value;
let resultado ="";


for(let i = 0; i<texto.length;i++){

    const letra = texto.charAt(i);

    if(diccionarioEncriptar[letra]) {

     resultado=resultado+(diccionarioEncriptar[letra]);

    }else{

        resultado=resultado+texto.charAt(i);

    }
}

salida.value=resultado;

entrada.value="";
}
 }

function desencriptar(){
    if(entrada.value!=""){

    salida.style.display = "flex";
    vacio.style.display= "none";
    nada.style.display= "none";
    pVacio.style.display= "none";
    copia.style.display= "flex";

    let texto=entrada.value;
    let resultado = "";
    
    resultado = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    
    salida.value=resultado;
    entrada.value="";
    }

}

function copiar(){
    const mensaje = document.getElementById("copiado")
   salida.focus();
   document.execCommand('selectAll');
   document.execCommand('copy');
   
    mensaje.style.display = "flex";

   setTimeout(() =>  mensaje.style.display = "none", 1000);
   
}
