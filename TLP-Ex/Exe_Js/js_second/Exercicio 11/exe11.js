let texto=prompt('Digite o texto');
// let texto='Digite o texto';
let conversao=texto.split('');
let junto= new Array();
var i=0;

for(i=0;i<conversao.length;i++){
    if(i%2!=0){
        junto[i]=conversao[i].toUpperCase();
        // console.log(junto[i]);
    } else{
        junto[i]=conversao[i].toLowerCase();
        // console.log(junto[i]);
    }
}
    confirm(junto.join(''));
console.log()

