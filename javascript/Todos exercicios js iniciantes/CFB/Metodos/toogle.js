 //Metodo Para pegar um detterminado botao que foi clicado e remover a sua div!
    //novoElemento.addEventListener('click',(evento)=>{
    //     console.log(evento.target)
    //     caixa1.removeChild(evento.target);
    // }) 

    

    
// Todas as Declarações:
const caixa1 =document.getElementById('caixa1');
const cursos=['HTML','CSS','JAVASCRIPT','C#','C','C++'];

const buttomSelecionado=document.getElementById('btn_selecionado');
const buttomRemover=document.getElementById('remover');
const buttomAdicionarCursoAntes=document.getElementById('adicionaAntes');
const buttomAdicionarCursoDepois=document.getElementById('adicionaDepois');
const txt_NovoCurso=document.getElementById('txt_NovoCurso');

let indice=0;

// Métodos do Programa:



//Metodo para tirar selecão num Elemento:
const tiraSelecao=()=>{
    const cursoSelecionado=[...document.querySelectorAll('.selecionado')];
        cursoSelecionado.map((evento)=>{
            evento.classList.remove();
        })
}

//Metodo para criar Elementos no HTML (DOM). E adicionar Atributos nos Elementos: &&Metodo Para criar Novo Curso:
const criarNovoCurso=(cursos)=>{
    const novoElemento=document.createElement('div');
        novoElemento.setAttribute('id','c'+(Number(indice)+1));
        indice++;
        novoElemento.setAttribute('class','curso');
        novoElemento.innerHTML=cursos;

        //Metodo para Selecionar um Elemento:
        novoElemento.addEventListener('click', (evento)=>{
            const clicar=evento.classList.toggle('selecionado');
        })

        return novoElemento;
}

//
    cursos.map((el,indice)=>{
        const novoElemento=criarNovoCurso(el);
        caixa1.appendChild(novoElemento);
        indice++;
    });

    //Metodo para Selecionar o Elemento:
    const cursoSelecionado=()=>{
        const cursoSelecionado=[...document.querySelectorAll('.selecionado')];
      
        return cursoSelecionado[0];
    }

  
    buttomSelecionado.addEventListener('click',()=>{
    const elementoSelecionado=cursoSelecionado().innerHTML;
        try{
            alert('Curso Selecionado: '+elementoSelecionado)
        } catch(ex){
                console.log('Selecione o curso!');
        }
    })

    //Metodo para Remover Selecao do Elemento:
    buttomRemover.addEventListener('click',(evento)=>{
        const elementoSelecionado=cursoSelecionado();

        if(elementoSelecionado!=undefined){
            const cursoSelect=elementoSelecionado.remove();
            cursoSelect.remove();
        } else{
            console.log('Selecione o curso!');
        }
    })

    //Metodo para insirir um novo curso
    buttomAdicionarCursoAntes.addEventListener('click',(evento)=>{
        const elementoSelecionado=cursoSelecionado();
        try{
            if(txt_NovoCurso.value==""){
               
                const novoCurso=criarNovoCurso(txt_NovoCurso.value);
                caixa1.insertBefore(novoCurso,elementoSelecionado);
            } else{
                alert('Digite o nome do curso!')
            }
        } catch(ex){
                console.log('Selecione o curso!');
        }
    })
    

    //Metodo para insirir um novo Elemento curso Depois de um curso
    buttomAdicionarCursoDepois.addEventListener('click',(evento)=>{
        const elementoSelecionado=cursoSelecionado();
        try{
            if(txt_NovoCurso.value==""){
                
                const novoCurso=criarNovoCurso(txt_NovoCurso.value);
                caixa1.insertBefore(novoCurso,elementoSelecionado.nextSibling);
            } else{
                alert('Digite o nome do curso!')
            }
        } catch(ex){
                console.log('Selecione o curso!');
        }
    })