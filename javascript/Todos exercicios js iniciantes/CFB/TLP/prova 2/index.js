const text_Area=document.getElementById('itxt_Area');
const letra_a=document.getElementById('letra_a');
const letra_e=document.getElementById('letra_e');
const letra_i=document.getElementById('letra_i');
const letra_o=document.getElementById('letra_o');
const letra_u=document.getElementById('letra_u');

const num=['ZERO','UM','DOIS', 'TRES', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE','DEZ']

letra_a.innerHTML='Zero';
letra_e.innerHTML='Zero';
letra_i.innerHTML='Zero';
letra_o.innerHTML='Zero';
letra_u.innerHTML='Zero';

let cont_a=0;
let cont_e=0;

text_Area.addEventListener('input',()=>{
    //for(var i=0; text_Area.length;i++){
        if(text_Area.value==='A' || text_Area.value==='a'){
            cont_a++;
            // text_Area.value+=cont_a
            letra_a.innerHTML=num[cont_a];
        } 
        if(text_Area.value=='E' || text_Area.value=='e'){
            cont_e++;
            // text_Area.value+=cont_e
            letra_e.innerHTML=num[cont_e];
        } 
    //}
   

})

