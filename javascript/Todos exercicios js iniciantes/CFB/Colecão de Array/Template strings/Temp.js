const caixa= document.getElementById('caixa');

let array=('mario ,paulo ,bunga ,salvador').split(',')
let ol='<ul>'
let li='<li>'

array.map((el)=>{
   caixa.innerHTML= ol+=`${li} ${el}`;
});

