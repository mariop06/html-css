class Pessoa{
    constructor(Param_Nome,Param_idade){
        this.nome=Param_Nome;
        this.idade=Param_idade;
    }


    setNome(nome){
        return this.nome=nome;
    }
    setIdade(idade){
        return this.idade=idade;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    imprimir(){
        console.log(`\n 
        Nome.......: ${this.nome}
        Idade......: ${this.idade}
        
        `);
    }
}

const nome=document.getElementById('iNome');
const idade=document.getElementById('iIdade');
const button=document.getElementById('button');
const textArea=document.getElementById('res');

let pessoas = new Array();

button.addEventListener('click',(el=>{
    
    let pessoa=new Pessoa(nome.value,idade.value);
    pessoas.push(pessoa);
    console.log(pessoas);

    nome.value='';
    idade.value='';
    textArea.value='';
    nome.focus();

    
    pessoas.map((pess)=>{
      textArea.value+=`[Nome: ${pess.getNome()}; Idade: ${pess.getIdade()}]\n`;
    });
   
}))




