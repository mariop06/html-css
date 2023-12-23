let nome='Maweza Gomes Santos';
let nomeSplit=nome.split(' ');
let palavras=['das','dos','do','da','de']
let nomeAbreviado;
let peso=nomeSplit.length;

let filtro;
let pesoFiltro
filtro=nome.replace(/das|dos|do|da|de/gi,'')
filtro=filtro.split(' ')
pesoFiltro=filtro.length;

let priNome= filtro[0];
let ultNome=filtro[pesoFiltro-1];

let abreviacao='';
let abreviacao2='';
let index=0;

for(let i=0; i<pesoFiltro; i++){
    if(filtro[i]!=priNome && filtro[i]!=ultNome){

        abreviacao+=filtro[i]
        abreviacao2=abreviacao.substring(0,1)+'.';
        
        filtro[i]=abreviacao2;
    }
    
}

 nomeAbreviado=filtro.join(' ')

 console.log(nomeAbreviado)
 console.log(abreviacao2)
