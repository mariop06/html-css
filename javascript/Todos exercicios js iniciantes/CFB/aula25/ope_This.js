// Primeiro Exemplo
// function aluno(nome,nota){
//     this.nome=nome;
//     this.nota=Number(nota);

//     console.log(nome);
//     console.log(nota)
// }
// aluno('Mário',18);

//Segundo exemplo
function aluno(nome,nota){
    this.nome=nome;
    this.nota=Number(nota);
    this.dados_anonima=function(){
        setTimeout(function(){

            console.log(this.nome);
            console.log(this.nota)
        },2000)
    }

    //Utilizando com arrow function, porque com uma 'funcao anonima simples' mostra o resultado no terminal como 'undefined'
    this.dados_arrow=function(){
        setTimeout(()=>{
            
            console.log(this.nome);
            console.log(this.nota)
        },2000)
    }
}
const aluno1= new aluno('Mário',18);

aluno1.dados_anonima();
aluno1.dados_arrow();
