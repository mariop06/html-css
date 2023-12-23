//metodo map
// const cursos=['html','css','c#', 'javascript'];

// cursos.map((elemento,indice)=>{
//     console.log(`Cursos: ${elemento}- Posição:${indice}`);
// })
// let elemento=document.getElementsByTagName('div

const converter=(elemento)=>parseInt(elemento);
const dobrar=(elemento)=>{
                return elemento*2;
            }
let num = ['1','2','3','4','5'].map(dobrar);
console.log(num);