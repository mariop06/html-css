var data= new Date();
var hora=data.getHours();

console.log(`São exatamente ${hora} horas!`);
 if(hora>=5 && hora<12){
    console.log(`Bom dia!`);
 } 
 else if( hora >=12 && hora<18){
    console.log(`Boa Tarde!`);
 } 
 else if(hora>=0 && hora<5){
    console.log(`Boa madrugada`)
 } 
 else{
    console.log(`Boa noite!`);
 }


