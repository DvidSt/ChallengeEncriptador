
let entrada = document.getElementById("insertar");
let salida = document.getElementById("salida");






function encriptar(){

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

function desencriptar(){

    let texto=entrada.value;
    let resultado = "";
    
    resultado = texto.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    
    salida.value=resultado;
    entrada.value="";


}

function copiar(){
   salida.focus();
   document.execCommand('selectAll');
   document.execCommand('copy');
   alert("Copiado al portapapeles")
   
}