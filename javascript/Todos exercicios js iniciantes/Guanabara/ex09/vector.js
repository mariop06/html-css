let num= [8,7,9];
const nomes=['mario','paulo','bunga']
num.sort();
console.log(`Os valores do meu vector são: ${num}`);
console.log(`O Vector tem ${num.length} posições`);
console.log(`Odernando o vector: ${num}`);

console.log("  Utilizando um loop: \n");

// loop - for
for(let i=0; i<num.length; i++){
    console.log(`Posição ${i} do vector, tem o valor ${num[i]} `);
}
    console.log("\n");
// loop - for in
for(let i in num){
    console.log(`Posição ${i} do vector, tem o valor ${num[i]} `);
}

// Pesquisando valores no vector -  num.indexOf()

console.log("\n");
console.log(`A pesquisa foi: ${nomes.indexOf('mario')}`);