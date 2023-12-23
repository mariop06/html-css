const buttoLeft=document.getElementById('buttoLeft');
const buttoRight=document.getElementById('buttoRight');
const buttoStop=document.getElementById('buttoStop');
const object=document.getElementById('object');


const inicializacao=()=>{
    object.style='position:relative; left:0px; width: 100px';
    tamanhoMax=window.innerWidth-parseInt(object.style.width )
}
window.addEventListener('load',inicializacao)

let tamanhoMax=null;
let animacao=null

window.addEventListener('resize',()=>{
    tamanhoMax=window.innerWidth-parseInt(object.style.width )
})

const mover=(direcao)=>{
    if(direcao>0){
        if(parseInt(object.style.left)<=tamanhoMax){
            object.style.left=parseInt(object.style.left)+ (10*direcao)+'px';
            animacao=setTimeout(mover,20,direcao)

        } else{
            clearTimeout(animacao);
        }
    }
    if(direcao<0){
        if(parseInt(object.style.left)>=0){
            object.style.left=parseInt(object.style.left)+ (10*direcao)+'px';
            animacao=setTimeout(mover,20,direcao)
        } else{
            clearTimeout(animacao);
        }
    }
    
}

buttoLeft.addEventListener('click',()=>{
    clearTimeout(animacao);
    mover(-1)
})

buttoRight.addEventListener('click',()=>{
    clearTimeout(animacao);
    mover(1)
})

buttoStop.addEventListener('click',()=>{
    clearTimeout(animacao);
})


//Esse exemplo é de uma maneira mais automatica com o Metodo setTimeout(), com implementacao de recursividade:
// let animacao=null
// const mover=(direcao)=>{
//     object.style.left=parseInt(object.style.left)+ (10*direcao)+'px';
//     animacao=setTimeout(mover,20,direcao)
// }

// buttoLeft.addEventListener('click',()=>{
//     clearTimeout(animacao);
//     mover(-1)
// })

// buttoRight.addEventListener('click',()=>{
//     clearTimeout(animacao);
//     mover(1)
// })

// buttoStop.addEventListener('click',()=>{
//     clearTimeout(animacao);
// })



//Esse exemplo é de uma maneira mais automatica com o Metodo setInterval():
// const mover=(direcao)=>{
//     object.style.left=parseInt(object.style.left)+ (10*direcao)+'px';
// }

// let animacao=null
// buttoLeft.addEventListener('click',()=>{
//     clearInterval(animacao);
//     animacao=setInterval(mover,20,-1);
// })

// buttoRight.addEventListener('click',()=>{
//     clearInterval(animacao);
//     animacao=setInterval(mover,20,1);
// })

// buttoStop.addEventListener('click',()=>{
//     clearInterval(animacao);
// })

//Esse exemplo move de uma maneira manual:

// buttoLeft.addEventListener('click',()=>{
//     object.style.left=parseInt(object.style.left)-10+'px';
// })

// buttoRight.addEventListener('click',()=>{
//     let avancar= parseInt(object.style.left);
//     avancar+=10;
//     object.style=`position:relative; left:${avancar}px;`

// })
