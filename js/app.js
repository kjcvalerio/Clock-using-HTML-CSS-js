

function mostrarHora(){
    agora = new Date();
    hr  = agora.getHours();
    min  = agora.getMinutes();
    seg  = agora.getSeconds();

    var ponteiroHora = hr * 30;
    var ponteiroMinuto = min * 6;
    var ponteiroSegundo = seg * 6;

    hora.style.transform = "rotate("+ ponteiroHora +"deg)"
    minuto.style.transform = "rotate("+ ponteiroMinuto +"deg)"
    segundo.style.transform = "rotate("+ ponteiroSegundo +"deg)"
}

var intervalo = setInterval(mostrarHora, 1000)