let numeros= new Array();
let ordenado= new Array();
let bool=true;
var i=0;
let negativo=0;
let n1,n2,n3;

ordenado=numeros.sort(sortfunction);
function sortfunction(a,b){
    return a-b;
}


while(bool==true){
    numeros[i]=Number(prompt('Digite o numero: '));
    // numeros=[-3,-2,-3,-2,-3];
    ordenado=numeros.sort(sortfunction);
    
    if(numeros[i]<0){
        const numNegativo=numeros[i];
        
  
     if(ordenado[i]<0 && ordenado[i]==numNegativo){
        console.log('ord[i]'+ordenado[i]);
        n1=ordenado[i];
        console.log('N1: '+n1);
        negativo++;

        if(ordenado[i+1]==numNegativo){
            console.log("ord[i+1]: "+ordenado[i+1]);
            n2=ordenado[i+1];
            console.log('N2: '+n2);
            
            negativo++;
            
            if(ordenado[i+2]==numNegativo){
                n3=ordenado[i];
                console.log('N3: '+n3);
                negativo++;
                if(n1==n2 && n2==n3){
                    console.log('Satisfeito!');
                    bool=false;
                }
            }
        }
     } 
    }
i++;
}
