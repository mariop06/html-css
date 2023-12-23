class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[ new Jogador('Mario'),new Jogador('Paulo'),new Jogador('Salvador')];


let eliminar = jogadores[0].id;


console.log(    
    jogadores.filter((elemento)=>{return elemento.id!=eliminar;})
    )