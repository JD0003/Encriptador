function encriptador(){
    var entrar = document.getElementById("entrada").value;

    var cifrado = entrar.replace(/e/igm,"enter");
    var cifrado = cifrado.replace(/o/igm,"ober");
    var cifrado = cifrado.replace(/i/igm,"imes");
    var cifrado = cifrado.replace(/a/igm,"ai");
    var cifrado = cifrado.replace(/u/igm,"ufat");

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    document.getElementById("mostrar").innerHTML = cifrado;
    document.getElementById("imgp").style.display = "none";

}

function desencriptador(){

    var entrar = document.getElementById("entrada").value;

    var desifrar = entrar.replace(/enter/igm,"e");
    var desifrar = desifrar.replace(/ober/igm,"o");
    var desifrar = desifrar.replace(/imes/igm,"i");
    var desifrar = desifrar.replace(/ai/igm,"a");
    var desifrar = desifrar.replace(/ufat/igm,"u");

    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    document.getElementById("mostrar").innerHTML = desifrar;
    document.getElementById("imgp").style.display = "none";
}

function copiar(){
    var tomartexto = document.querySelector("#mostrar");
    tomartexto.select();
    document.execCommand("copy");
}