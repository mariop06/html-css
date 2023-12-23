function Tabuada(){
    let txt=document.getElementById('iText');
    let tab=document.getElementById('iTabuada');

    if(txt.value.length==0){
       alert('Digite um numero!');
    } else{
        let num=Number(txt.value);
        let contagem=1;

        while(contagem<=12){
            let itens = document.createElement('option');

            itens.text= `${num} x ${contagem} = ${num*contagem}`;

            tab.appendChild(itens);

            contagem++;
        }
    }

}