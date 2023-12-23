const caixa= document.getElementById('caixa');

let mapa= new Map(); 
let chave=4

mapa.set('Mario',1)
mapa.set('Paulo',2)
mapa.set(3,'Bunga')
mapa.set(4,'Salvador')


if(mapa.has(chave)){
    caixa.innerHTML='Existe na Coleção, O seu valor é: '+mapa.get(chave);
} else{
    caixa.innerHTML='Não Existe na Coleção';
}

//  Todos os Métodos Pertencentes ao Map
// mapa.clear()
// mapa.delete()
// mapa.entries();
// mapa.keys()
// mapa.size;
// mapa.values();

