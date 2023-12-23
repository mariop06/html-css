const militar=document.getElementById('Militar')
const normal=document.getElementById('normal')
const municao=document.getElementById('iMunicao')
const blindagem=document.getElementById('iBlindagem')
const carros=document.getElementById('carros')
const button=document.getElementById('button')
const nomeCarro=document.getElementById('iNome');
const portasCarro=document.getElementById('iPorta')

let arrayCarros= new Array();

const removerCarro=(evento)=>{
   arrayCarros= arrayCarros.filter((el=>{
        return evento!=el.nome;
    }))
}


nomeCarro.focus();

blindagem.addEventListener('click',()=>{
    blindagem.value=''

})

municao.addEventListener('click',()=>{
    municao.value=''
})

militar.addEventListener('click', ()=>{
    municao.removeAttribute('disabled');
    blindagem.removeAttribute('disabled');

    blindagem.value=0
    municao.value=0
    portasCarro.value=''
    nomeCarro.value=''
    nomeCarro.focus();
})

normal.addEventListener('click', ()=>{
    municao.setAttribute('disabled','disabled');
    blindagem.setAttribute('disabled','disabled');

    blindagem.value=''
    municao.value=''
    portasCarro.value=''
    nomeCarro.value=''
    nomeCarro.focus();
})

const Exibir_Carros=()=>{
    carros.innerHTML=''


    arrayCarros.map((element)=>{
        const div=document.createElement('div')
        div.setAttribute('data-nome',element.nome)


        const btn_remove=document.createElement('button')
        btn_remove.setAttribute('id','remove')
        btn_remove.innerHTML='remover'

        btn_remove.addEventListener('click',(el)=>{
            const removido=el.target.parentNode.dataset.nome;
           removerCarro(removido);
           Exibir_Carros();

        })

        div.setAttribute('class','carro')
        div.innerHTML+=element.nome+'<br/>';

        div.appendChild(btn_remove)
        carros.appendChild(div)

    })
  
}

button.addEventListener('click',()=>{
    if(normal.checked==true){
        const card= new Carro(nomeCarro.value,portasCarro.value)
        arrayCarros.push(card);
    } else{
        const card= new Militar(nomeCarro.value,portasCarro.value,blindagem.value,municao.value)
        arrayCarros.push(card);
    }
    Exibir_Carros();
})


class Carro{ // classe pai
    constructor(nome,portas){
        this.nome=nome;
        this.portas=portas;
        this.ligado=false;
        this.velocidade=0;
        this.cor=undefined;
        }

        setCo(cor){
            this.cor=cor;
        }
}

class Militar extends Carro{ // 'extends'-> é uma palavra reservada que referencia a heranca. Isso quer dizer que a classe Lamborghini vai herdar todas as propriedades basicas da classe Carro;

    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
    }

}