function Calcular(){
   var data= new Date();
   var ano= data.getFullYear();
   var formNasc = document.getElementById('inasc');
   var idade=ano-formNasc.value;
   var result= document.getElementById('res');

   if(formNasc.value.length == 0 || formNasc.value>ano){
        window.alert('Verifique os dados e tente novamente!');
   } else{
     var radSexo= document.getElementsByName('radioSexo');
     var genero='';
          if(radSexo[0].checked){
            genero='Homem';
            result.innerHTML=`Detetamos ${genero}, com ${idade} anos`;
         } 
         else if(radSexo[1].checked){
            genero='Mulher';
            result.innerHTML=`Detetamos ${genero} com ${idade} anos`;
         }
         else{
            window.alert('Selecione um gênero!');
         }
   }
}