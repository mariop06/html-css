class Carro{
    constructor(tipo, estagioTurbo){
        this.turbo= new Turbo(estagioTurbo)

        if(tipo==1){
            this.nome='normal'
            this.velocidade=100
        }
        else if(tipo==2){
            this.velocidade=120;
            this.nome='luxo'

        }
        else if(tipo==3){
            this.velocidade=150;
            this.nome='esportivo'
        }
        this.velocidade+=this.turbo.potencia
    }

    info(){
        console.log(`
            Nome: ${this.nome}
            Velocidade: ${this.velocidade}
            Turbo: ${this.turbo.potencia}
        
        `)
    }
}

class Turbo{
    constructor(estagio){
        if(estagio==1){
            this.potencia=50;
        } else if(estagio==2){
            this.potencia=75;
        }else if(estagio==3){
            this.potencia=100;
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.velocidade=300+this.turbo.potencia;
        this.nome='Carro Especial';
    }

    info(){
        console.log(`
        Nome: ${this.nome}
        Velocidade: ${this.velocidade}
        Turbo: ${this.turbo.potencia}
    
    `)
    console.log('------------------')
    }
}


const carro1= new Carro(1,2);
carro1.info()

const carroEspecial= new CarroEspecial(3)
carroEspecial.info()