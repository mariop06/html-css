const array=document.getElementById('iTxt_array');
const buttomVerificar = document.getElementById('buttomPesquisa');
const iTxt_resultado =document.getElementById('iTxt_resultado');

const elementos_array=[18];
    array.value=elementos_array;

    buttomVerificar.addEventListener('click',(elemento)=>{
        const retorno=elementos_array.every((elemento,indice)=>{
            if(elemento<18){
                iTxt_resultado.value=`Array Não Conforme: na posisão '${indice}'`;
            } else{
                iTxt_resultado.value='Tudo Em conformidade!';
            }
            return elemento>=18;
        })
      
    })
