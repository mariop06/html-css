const array=document.getElementById('iTxt_array');
const buttomVerificar = document.getElementById('buttomPesquisa');
const iTxt_resultado =document.getElementById('iTxt_resultado');

const elementos_array=[1,5,6,8,9];
let aux=[];

array.innerHTML='['+elementos_array+']';

buttomVerificar.addEventListener('click', ()=>{
    iTxt_resultado.value=elementos_array.reduce((anterior,atual,indice)=>{
        aux.push(anterior)
        return atual+anterior;
    });

    iTxt_resultado.innerHTML+='<br/>'+aux;
})