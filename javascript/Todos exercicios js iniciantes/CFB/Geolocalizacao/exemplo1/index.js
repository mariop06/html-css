const long=document.getElementById('long');
const lati=document.getElementById('lati');


if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao,erroLocalizacao);
}else{
    console.log('Geolocalizacao Negada')
}

function mostrarLocalizacao(posicao){
    long.innerHTML=posicao.coords.longitude;
    lati.innerHTML=posicao.coords.longitude;

    console.log(posicao)
}

function erroLocalizacao(){
    console.log('Erro ao obter a localizacao');
}


