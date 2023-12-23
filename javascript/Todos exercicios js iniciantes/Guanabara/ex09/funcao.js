// Método comparação
let num=parImpar(6);
function parImpar(n){
    if(n%2==0){return 'par'}
    else{return 'impar'}
}
console.log(`O resultado: ${num}`);
 
// Método soma
let res = soma(10,20)
function soma(n1=0,n2=0){
    return n1+n2;
}
console.log(`A soma é: ${res}`);

// Método dobro
let dobro = function(x){
    return x*2; 
}
console.log(`O dobro é: ${dobro(5)}`);

//Método Factorial de um número
let valor=factorial(5);
function factorial(n){
    let fact=1;
    for(let c=n; c>1; c--){
        fact*=c;
    }
    return fact;
}
console.log(`O factorial é: ${valor}`);

//função Recursiva (Recursividade)
function factorial2 (n){
    if(n==1){
        return 1;
    } else{
        return n * factorial2(n-1);
    }
}
let val=factorial2(5);
console.log(`O factorial com recursividade é: ${val}`);