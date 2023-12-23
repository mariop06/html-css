// const text_Area=document.getElementById('itxt_Area');

// text_Area.addEventListener('input',()=>{
//     let valor=text_Area.value;
//     let obter= new Array();
//    obter= valor.split();
// })


let texto='O mario é mario inteligente';
let substituto= new Array();
substituto=texto.split(' ')
let obter= new Array();
let palavra;
obter=texto.split(' ');

for(let i=0; i<obter.length; i++){
    for(let d=0; d<obter.length; d++){
        if(obter[d]==substituto[i]){
           palavra=obter[i];
        }
    }
}

console.log(palavra)