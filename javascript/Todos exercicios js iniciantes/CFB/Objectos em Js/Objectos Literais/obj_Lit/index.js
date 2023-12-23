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
computador ['monitor']='22polegadas'; 
computador.processador='Core I'
console.log(computador) // essas são as outras duas maneiras de adicionar propriedades em Objectos;



let arrayComputadores=[
    {
        cpu: 'i9',
        ram: '16gb',
        hd: '1Tb', 
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '512GB',        
    },
    {
        cpu: 'i5',
        ram: '4gb',
        hd: '256GB',
        ola: {
        cpu: 'i5',
        ram: '4gb',
        hd: '256GB',
        }
    }
]

arrayComputadores.map((elemento)=>{
    console.log(elemento);
    const div= document.createElement('div');
    div.setAttribute('class','objectos');
    div.innerHTML='CPU..: '+elemento.cpu+'<br>'+'RAM.: '+elemento.ram+'<br>'+'HD....: '+elemento.hd+'<br>';

    objecto.appendChild(div)
})










// objecto.innerHTML=computador.cpu+'---'+computador.hd+'---'+computador.ram
// objecto.innerHTML= JSON.stringify(computador);
