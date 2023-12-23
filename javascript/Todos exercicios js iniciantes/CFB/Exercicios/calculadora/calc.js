const teclasNumericas=[...document.querySelectorAll('.num')];
const teclasOperacoes=[...document.querySelectorAll('.op')];

const resultado= document.getElementById('igual');
const reset=document.getElementById('reset')
const display=document.getElementById('display')

const copy=document.getElementById('copy');

let sinal=false
let ponto=false
let igual=false;

display.innerHTML='';

teclasNumericas.map((el)=>{
    el.addEventListener('click',(elemento)=>{
        if(igual==true){
            if(sinal==false){
                sinal==true;
                
                igual=false;
                display.innerHTML='';
            }
        }
        if(elemento.target.innerHTML=='.'){
            if(ponto==false){
                if(display.innerHTML==''){

                } else{
                    ponto=true
                    display.innerHTML+=elemento.target.innerText;
                }
            } 
        } 
        else{
            sinal=false;
            display.innerHTML+=elemento.target.innerText;
        }
    })
})

teclasOperacoes.map((el)=>{
    el.addEventListener('click',(elemento)=>{
        if(sinal==false){
            sinal=true;
            if(display.innerHTML=='0'){
                display.innerHTML=''
            }
        display.innerHTML+=elemento.target.innerText;
        }
        
    })
})

reset.addEventListener('click',()=>{
    display.innerHTML='';
    sinal=false;
    ponto=false;
}) 

resultado.addEventListener('click',()=>{
    igual=true
    if(display.innerHTML==''){

    } else{
        if(igual==true){
            const result=eval(display.innerHTML)
            display.innerHTML=result;
        }
    }
}) 

copy.addEventListener('click',()=>{
    if(display.innerHTML==''){
        alert(`Impossivel efectuar copia para area de transferência!`);
    } else{
        navigator.clipboard.writeText(display.innerHTML)
        alert(`Elemento Copiado para area de transferência: ${display.innerHTML}`)
    }
  
})