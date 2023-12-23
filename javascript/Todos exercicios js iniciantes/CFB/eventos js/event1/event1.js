// function msg(){
//     alert('você clicou!');
// }



/* Primeiro exemplo
const c1=document.getElementById('c');
//Primeiro Exemplo
// c1.addEventListener('click',msg()); // usando o evento Listener com uma funcão normal

//Segundo Exemplo
// c1.addEventListener('click',()=>{alert('você clicou!');}); //usando o evento Listener com uma funcão anonima do tipo Arrow Function

//Terceiro Exemplo
// c1.addEventListener('click',(capturar)=>{
//     console.log(capturar.target  );
// }); //esse  exemplo serve para capturar o elemento que foi clicado, com a propriedade '.target'

//Quarto exemplo
c1.addEventListener('click',(capturar)=>{
    const elemento=capturar.target;

    elemento.classList.add('destaque');
}); //esse  exemplo serve para capturar o elemento que foi clicado, com a propriedade '.target' e adicionar funcionalidade após o click com a class 'destaque' que foi criada Style
*/

/* Segundo exemplo */

const cursos=[...document.querySelectorAll('.curso')]

cursos.map((elemento)=>{
    elemento.addEventListener('click',(capturar)=>{
        const elemento=capturar.target;
        elemento.classList.add('destaque');

    })

})



