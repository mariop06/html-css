import { contatos } from "./bancoDados_Contato.js";

let Contato={
    getTodosContatos:function(){
        return contatos;
    },

    getContato: function(indice_Contato){
        return contatos[indice_Contato];
    },
    addContacto:function(novoContacto,destinoDOM){
        contatos.push(novoContacto)


        const div=document.createElement('div');
        div.setAttribute('class','contato');

        const paragraph_nome=document.createElement('p');
        paragraph_nome.innerHTML=novoContacto.nome;

        const paragraph_telefone=document.createElement('p');
        paragraph_telefone.innerHTML=novoContacto.telefone;

        const paragraph_email=document.createElement('p');
        paragraph_email.innerHTML=novoContacto.email;

        div.appendChild(paragraph_nome)
        div.appendChild(paragraph_telefone)
        div.appendChild(paragraph_email)

        destinoDOM.appendChild(div);
    }
}

export default Contato;