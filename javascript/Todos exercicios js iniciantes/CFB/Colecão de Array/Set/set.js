const caixa= document.getElementById('caixa');

let nomes = new Set(['mario','paulo','bunga','salvador']);
let valor='m'

if(nomes.has(valor) !=true){
   nomes.add(valor)

    nomes.forEach((el)=>{
         caixa.innerHTML+=' '+el;
    });

 } else{
    caixa.innerHTML='O nome já existe!';
 }
