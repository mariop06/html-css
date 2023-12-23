import Contato from './modExport/contatos.js';

const listaContato=document.getElementById('listaContato');
const button_Gravar=document.getElementById('button_Gravar');

const tel=document.getElementById('telefone')
const email=document.getElementById('email')


button_Gravar.addEventListener('click',()=>{
    const contacto={
        nome:document.getElementById('nome').value,
        telefone:tel.value,
        email:email.value
    }
    Contato.addContacto(contacto,listaContato);
    console.log(Contato.getTodosContatos())
})

