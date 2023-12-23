const valor= prompt('Digite o seu nome: ');
console.log(valor)
const page=document.getElementById('h1');
let data= new Date();


if(data.getHours()>5 && data.getHours()<12){
    var saud='Bom Dia';
    page.innerHTML=`${saud} ${valor}`;
} else if(data.getHours()>=12 && data.getHours()<18){
    var saud='Boa Tarde';
    page.innerHTML=`${saud} ${valor}`;
} else{
    var saud='Boa Noite';
    page.innerHTML=`${saud} ${valor}`;
}
 