const quadrado1=document.getElementById('quadrado1')
const quadrado2=document.getElementById('quadrado2')

const posicaoX=document.getElementById('posicaoX')
const posicaoY=document.getElementById('posicaoY')

const largura=document.getElementById('largura')
const altura=document.getElementById('altura')


const Info=(el)=>{
    let DomRect=el.getBoundingClientRect();

    posicaoX.innerHTML=`posicaoX: ${DomRect.x}`;
    posicaoY.innerHTML=`posicaoX: ${DomRect.y}`;
    largura.innerHTML=`posicaoX: ${DomRect.width}`;
    altura.innerHTML=`posicaoX: ${DomRect.height}`;    
}

quadrado1.addEventListener('click',(evento)=>{
    Info(evento.target)
})

quadrado2.addEventListener('click',(evento)=>{
    Info(evento.target)
})