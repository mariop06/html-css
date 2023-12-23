class Npc{
    //Os metodos e propriedades static não pertence as instancias da classe, mas sim pertence a propria classe.

    static alerta=true; // propriedade statica (static)
    constructor(energia){
        this.energia=energia;
    }

    info=function(){
        console.log(`Energia: ${this.energia}`);
        console.log(`Estado de Alerta: ${Npc.alerta?"sim":'nao'}`)
        console.log('--------------------------------')
    }

    static alerta=function(){
        console.log(`Estado de Alerta de todos: ${Npc.alerta?"Em Alerta(sim)":'Sem Alerta(nao)'}`)
        console.log('--------------------------------')
    }
}

const npc1= new Npc(10)
const npc2= new Npc(50)
const npc3= new Npc(100)

Npc.alerta();
npc1.info();
npc2.info();