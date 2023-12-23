// let numeros=[-3,3,-6,-9,-12]; --> // Para Teste
let numeros= new Array();
let div= new Array();
let ordenado= new Array();
let key=0;

for(var i=0; i<3; i++){
    numeros[i]=Number(prompt('Digite o Numero: '));
    console.log(numeros[i]);
}
 
ordenado=numeros.sort(sortfunction);
//numeros.sort(sortfunction) --> //Serve para a ordenacao de vetor numerico
 function sortfunction(a,b){
    return a-b;
 }
  for(var i=0; i<numeros.length; i++){
    key=i;
  }
for(var i=0; i<numeros.length; i++){
    div[i]=ordenado[i]/ordenado[key];
}

 alert(`Vector-Ordenado: ${ordenado} \n Divisão Pelo Maior Número(${ordenado[key]}): ${div} `);
