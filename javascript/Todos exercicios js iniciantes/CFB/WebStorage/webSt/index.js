const texto = document.getElementById('texto');
const paragraph= document.getElementById('paragraph')
const button = document.getElementById('button');

button.addEventListener('click',()=>{

})

window.localStorage.setItem('numero',10); //metodo para definir o valor e a chave
window.localStorage.getItem('numero');//metodo para obter o valor e a chave

/*Exemplos de Local Storage: */
// window.localStorage.setItem('nome','Mario Paulo');
// window.localStorage.setItem('email','ariopaulobunga@gmail.ao');
// window.localStorage.setItem('numero','922366274');

// alert(localStorage.length);// Para obter o tamanho do local storage


/*Exemplos de Session Storage: */
window.sessionStorage.setItem('nome','Mario Paulo');
window.sessionStorage.setItem('email','ariopaulobunga@gmail.ao');
window.sessionStorage.setItem('numero','922366274');
