 //Metodo Para pegar um detterminado botao que foi clicado e remover a sua div!
    //novoElemento.addEventListener('click',(evento)=>{
    //     console.log(evento.target)
    //     caixa1.removeChild(evento.target);
    // }) 

    
// Todas as Declarações:
const caixa1 =document.getElementById('caixa1');
const cursos=['HTML','CSS','JAVASCRIPT','C#','C','C++'];

const buttomSelecionado=document.getElementById('selecionado');
const buttomRemover=document.getElementById('remover');
const buttomAdicionarCursoAntes=document.getElementById('adicionaAntes');
const buttomAdicionarCursoDepois=document.getElementById('adicionaDepois');
const txt_NovoCurso=document.getElementById('txt_NovoCurso');

let indice=0;

// Métodos do Programa:

//Metodo para criar Elementos no HTML (DOM). E adicionar Atributos nos Elementos: &&Metodo Para criar Novo Curso:
const criarNovoCurso=(cursos)=>{
    const novoElemento=document.createElement('div');
        novoElemento.setAttribute('id','c'+(Number(indice)+1));
        indice++;
        novoElemento.setAttribute('class','curso');
        novoElemento.innerHTML=cursos;

        const comando= document.createElement('div');
            comando.setAttribute('id','comando');

        const radioButtom= document.createElement('input');
            radioButtom.setAttribute('type','radio')
            radioButtom.setAttribute('id','radButtom');
        
        comando.appendChild(radioButtom);
        novoElemento.appendChild(comando);

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
        const obterRadio=[...document.querySelectorAll('input[type=radio]')];

        let radioSelecionados=obterRadio.filter((valor)=>{
            return valor.checked;
        });
        return radioSelecionados[0];
    }

  
    buttomSelecionado.addEventListener('click',()=>{
    const elementoSelecionado=cursoSelecionado();
        try{
            const cursoSelect=elementoSelecionado.parentNode.previousSibling.textContent;
        } catch(ex){
                console.log('Selecione o curso!');
        }
    })

    //Metodo para Remover o Elemento:
    buttomRemover.addEventListener('click',(evento)=>{
        const elementoSelecionado=cursoSelecionado();

        if(elementoSelecionado!=undefined){
            const cursoSelect=elementoSelecionado.parentNode.parentNode;
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
                const cursoSelect=elementoSelecionado.parentNode.parentNode;
                const novoCurso=criarNovoCurso(txt_NovoCurso.value);
                caixa1.insertBefore(novoCurso,cursoSelect);
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
                const cursoSelect=elementoSelecionado.parentNode.parentNode;
                const novoCurso=criarNovoCurso(txt_NovoCurso.value);
                caixa1.insertBefore(novoCurso,cursoSelect.nextSibling);
            } else{
                alert('Digite o nome do curso!')
            }
        } catch(ex){
                console.log('Selecione o curso!');
        }
    })