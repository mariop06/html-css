const resultado=document.getElementById('resultado');
const text=document.getElementById('iText');
const verif=document.getElementById('iVerificar');

verif.addEventListener('click',(elemento)=>{
    if(text.value.length==0){
        alert('Digite um Numero!');
    } else if(text.value<1 || text.value>10){
        alert('Digite um numero no intervalo de 1 á 10');
    } else{
        let rand= Math.floor(Math.random()*10);
        if(rand != text.value){
            resultado.innerHTML=`Você perdeu! O número Sorteado foi "${rand}" e Você digitou ${text.value}`;
        } else{
            resultado.innerHTML=`Você Ganhou! O número Sorteado foi "${rand}"`;
        }
        
    }
})
