const nome=document.getElementById('nome');
const nota=document.getElementById('nota');
const messenge=document.getElementById('mensagem');
const button_Validar=document.getElementById('button_Validar');

button_Validar.addEventListener('click',(evento)=>{
    evento.preventDefault();

    if(!nota.checkValidity()){
      //Varias de maneiras de apresentar as mensagens de erro:
      // alert(nota.validationMessage);
      // nota.reportValidity();
    }
})