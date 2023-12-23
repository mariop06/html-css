const idades=[15,16,40,23,12,50,60];


// Uma funcão para pegar idades maior de 18 anos, Com o 'Método filter()'

const maiorIdade=idades.filter((valor)=>{
    if(valor>=18){
        return valor;
    }
});

// Uma funcão para pegar idades menor de 18 anos, Com o 'Método filter()'
const menorIdade=idades.filter((valor)=>{
    if(valor<18)
        return valor;
});

console.log(maiorIdade);
console.log(menorIdade);