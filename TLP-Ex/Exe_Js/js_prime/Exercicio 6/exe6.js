const min=document.getElementById('iText1');
const max= document.getElementById('iText2');
const calcular= document.getElementById('iCalcular');
const select=document.getElementById('iSelect');
const item = document.createElement('option');
const paragraph=document.getElementById('parag')
const lab = document.getElementById('label')

const label=document.getElementById('label2');
label.innerText+=` Os números multiplos de 2 e 3 são: `;

calcular.addEventListener('click',()=>{
        if(max.value.length==0 || min.value.length==0)
        {
            alert('Digite os numeros');
            console.log(max.value);
            console.log(min.value);
         } 
        else{
            const maxN=Number(max.value);
            const minN=Number(min.value);
            console.log(minN);
            console.log(maxN);

            var numero= new Array();
            var i=minN+1;
            var soma=0;
            
            while(i<maxN){
                numero[i]=i;
                
                lab.innerText=`Os números entre ${minN} e ${maxN} são: `
                paragraph.innerHTML+=numero[i]+'/';

                if(numero[i]%2==0 && numero[i]%3==0){
                    soma++;
                }
                if(numero[i]%1==0 && numero[i]>i%i==0){

                }
                i++;
            }            
            label.innerText+=' '+soma;
        }
})




