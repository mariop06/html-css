class Carro{
    constructor(Param_Nome,Param_Tipo){
        this.nome=Param_Nome;
        if(Param_Tipo==1){
            this.tipo='Canyeni';
            this.velocidade=300;
        } else if(Param_Tipo==2){
            this.tipo='Sonata'
            this.velocidade=120;
        } else{
            this.tipo='K7';
            this.velocidade=100;
        }
    }


    setNome(nome){
        return this.nome=nome;
    }
    setTipo(tipo){
        return this.tipo=tipo;
    }
    setVelocidade(vel){
        return this.velocidade=vel;
    }
    imprimir(){
        console.log(`\n 
        Marca............: ${carro1.nome}
        Modelo...........: ${carro1.tipo}
        Velocidade Maxima: ${carro1.velocidade}
        
        `);
    }
}


let carro1=new Carro('Porshe',1) ;
let carro2= new Carro(' Hyundai',2);
let carro3= new Carro(' Kia',3);

    carro1.setNome('Jetour')
   carro1.imprimir();

