const objecto=document.getElementById('objectos');

let  computador={
    cpu: 'i9',
    ram: '16gb',
    hd: '1Tb',

    info: function(){
        console.log(` CPU: ${this.cpu}`);
        console.log(` RAM: ${this.ram}`);
        console.log(` HD: ${this.hd}`);
    }
}
//Usado para excluir uma propriedade de um objecto
delete(computador.hd)

// essas são as outras duas maneiras de adicionar propriedades em Objectos;
computador ['monitor']='22polegadas'; 
computador.processador='Core I'
console.log(computador) 

// Clonagem de objecto com o metodo assign
const computador1=Object.assign({},computador)
computador1.info();


// Uma maneira para poder instanciar objectos literais, ou seja, clonar ou utilizar um objecto como base para criar outro
const computador2= Object.create(computador)
computador2['cpu']='i12';
computador2['ram']='8Gb';
computador2['hd']='64Gb';
computador2.info()




//Esse exemplo serve para criar um objecto, que vai conter outros objectos. Foram concatenados com o metodo assign
const obj1={obj1:'1'};
const obj2={obj2:'2'};
const obj3={obj3:'3'};
const obj4=Object.assign({obj1,obj2,obj3});
console.log(obj4)



