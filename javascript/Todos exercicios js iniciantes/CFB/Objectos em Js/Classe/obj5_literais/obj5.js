const Pessoa={
    nome:'',
    idade:0,
    getNome:function(){
        return this.nome;
    },
    getIdade:function(){
        return this.idade;
    },

    setNome:function(nome){
        this.nome=nome;
    },
    setIdade:function(idade){
        this.idade=idade;
    }
}


const nome=document.getElementById('iNome');
const idade=document.getElementById('iIdade');
const button=document.getElementById('button');
const textArea=document.getElementById('res');

let pessoas = new Array();
const pessoa1=Pessoa;
    


    button.addEventListener('click',()=>{
        pessoa1['nome']=nome.value;
        pessoa1['idade']=idade.value;

        pessoas.push(pessoa1);
        nome.value=''
        idade.value=''
        textArea.value=''
        nome.focus();
        
        pessoas.map((element)=>{
            
            textArea.value+=`[Nome: ${element.getNome()}; Idade: ${element.getIdade()}]\n`;
        }); 
        
        
    })
   





//  console.log(pessoa1.getNome())
//  console.log(pessoa1.getIdade())
