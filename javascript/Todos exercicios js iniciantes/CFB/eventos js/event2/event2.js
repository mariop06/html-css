const caixa1= document.querySelector('#caixa1');
const caixa2=document.querySelector('#caixa2');
const btn=document.querySelector('#btn_Copiar');
const cursos=[...document.querySelectorAll('.curso')];

cursos.map((elemento)=>{
    elemento.addEventListener('click',(capturar)=>{
        const caption=capturar.target;
        caption.classList.toggle('selecionado')
        console.log(caption);
    })
})


// btn.addEventListener('click',()=>{
//     const curso_Selecionado=[...document.querySelectorAll('.selecionado')];
//     console.log(curso_Selecionado);
  
//     curso_Selecionado.map((elemento)=>{
//         caixa2.appendChild(elemento);
//     });
// })

btn.addEventListener('click',()=>{
    const curso_Selecionado=[...document.querySelectorAll('.selecionado')];
    const curso_naoSelecionando=[...document.querySelectorAll('.curso:not(.selecionado)')];
    console.log(curso_Selecionado);
  
    curso_Selecionado.map((elemento)=>{
        caixa2.appendChild(elemento);
        
    });

    curso_naoSelecionando.map((elemento)=>{
        caixa1.appendChild(elemento);
    })
})