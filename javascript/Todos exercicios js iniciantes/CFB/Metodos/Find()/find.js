const array=document.getElementById('iTxt_array');
const iPesquisa=document.getElementById('iPesquisa') ;
const buttomPesquisa = document.getElementById('buttomPesquisa');
const iTxt_resultado =document.getElementById('iTxt_resultado');

const elementos_array=['Mario','Paulo','Bunga', 'Salvador'];
array.value=elementos_array;

    buttomPesquisa.addEventListener('click',()=>{
        const res= elementos_array.find((elemento, indice)=>{
            if(elemento.toUpperCase()==iPesquisa.value.toUpperCase()){
                iTxt_resultado.style.color='green';
                iTxt_resultado.value='Valor Encontrado: '+elemento
                return elemento;
            } else{
                iTxt_resultado.style.color='red';
                iTxt_resultado.value='Valor Não encontrado!';
            }
        })
        console.log(res)
    })