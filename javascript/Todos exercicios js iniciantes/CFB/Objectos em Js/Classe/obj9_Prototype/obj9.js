//Prototype: é usado para adicionar metodos ou propriedades em um objectos após ser instaciado

const Nave=function(energia){
    this.energia=energia;
    this.disparo=100;
}

const nave1= new Nave(70);

Nave.prototype.vida=3; //foi adicionado uma propriedade 'vida' na classe Nave

Nave.prototype.disparar=function(){ //foi adicionado um metodo 'disparar' na classe Nave
    if(this.disparo>0)
        return this.disparo--;
}

nave1.disparar()

console.log(nave1.energia);
console.log(nave1.disparo);
console.log(nave1.vida)