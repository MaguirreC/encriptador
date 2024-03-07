const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


function bntEncriptar(){
    const textoEncriptado= encriptar(textArea.value)
    mensaje.textContent= textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage= "none" 
}



function encriptar(stringEncriptada){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada= stringEncriptada.toLowerCase()

    for(let i=0;i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada= stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada



}


function bntDesencriptar(){
    const textoEncriptado= desencriptar(textArea.value)
    mensaje.textContent= textoEncriptado
    textArea.value= "";
    
}


function desencriptar(stringDesencriptado){
    let matrizCodigo= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado=stringDesencriptado.toLowerCase()

    for(let i=0;i< matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado
}

function copiarTexto(){

    const textoCopiar= document.getElementById("outputMensaje").value;

    const temInput= document.createElement("textarea");
    temInput.value= textoCopiar;

    document.body.appendChild(temInput);

    temInput.select();
    document.execCommand("copy");

    document.body.removeChild(temInput);
    
}