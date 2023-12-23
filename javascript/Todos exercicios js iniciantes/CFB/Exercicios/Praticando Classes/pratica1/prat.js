const palco=document.getElementById('palco');
const numeroObjecto=document.getElementById('num_objectos');
const txt_quantidade=document.getElementById('txt_quantidade');
const buttonAdd=document.getElementById('btn_add');
const buttonRemover=document.getElementById('btn_remover');

let larguraPalco=palco.offsetWidth; // offsetWidth essa propriedade serve para obter o tamanho 
let alturaPalco=palco.offsetHeight; // offsetHeigth essa propriedade serve para obter a altura 
let bola=new Array();
let numeroBolas=0;
let data= new Date();
let d=data.getMilliseconds();

class Bola{
    constructor(arrayBola,palco,d){
        this.tamanhoBola=  Math.round(Math.random()*15)+10;
        this.corBola_r=  Math.round(Math.random()*255);
        this.corBola_g=  Math.round(Math.random()*255);
        this.corBola_b=  Math.round(Math.random()*255);

        this.posicaoX= Number(Math.round(Math.random())*(larguraPalco-this.tamanho));
        this.posicaoY= Number(Math.round(Math.random())*(alturaPalco-this.tamanho));

        this.velocidadeX= Number( Math.round(Math.random()*2)+0.5);
        this.velocidadeY=  Number(Math.round(Math.random()*2)+0.5);

        this.direcaoX= Number( Math.round(Math.random()*10)>5?1:-1);
        this.direcaoY=  Number(Math.round(Math.random()*10)>5?1:-1);

        this.palco=palco;
        this.arrayBola=arrayBola;

        this.desenharBolas();
        this.id=(d+'_'+Math.round(Math.random()*100000000)).toString();
        this.controle=setInterval(this.controlar,10);
        this.eu= '';
        //document.getElementById(this.id);

        numeroBolas++;
        numeroObjecto.innerHTML=numeroBolas;
    }

    posicao_arrayBola=()=>{
        return this.arrayBola.indexOf(this);
    }
    removerBola=()=>{
        clearInterval(this.controle)
        bola=bola.filter((bola)=>{
            if(bola.id!=this.id)
                return bola;
        });

        this.eu.remove();
        numeroBolas--;
        numeroObjecto.innerHTML=numeroBolas;
    }
    desenharBolas=()=>{
        const div=document.createElement('div');
        div.setAttribute('id',this.id);
        div.setAttribute('class','bola');
        div.setAttribute('style',`left:${Number(this.posicaoX)}px; top: ${Number(this.posicaoY)}px; width: ${this.tamanhoBola}px; height: ${this.tamanhoBola}px; background-color: rgb(${this.corBola_r},${this.corBola_g},${this.corBola_b})`)

        this.palco.appendChild(div);
    }

    colisaoBordas=()=>{
        if(this.posicaoX+this.tamanhoBola >= larguraPalco){this.direcaoX=-1;}
        else if(this.posicaoX <= 0){this.direcaoX=1}

        if(this.posicaoY+this.tamanhoBola >= alturaPalco){this.direcaoY=-1}
        else if(this.posicaoY<=0){this.direcaoY=1}
            
    }
    controlar=()=>{
        this.colisaoBordas();
        this.posicaoX+=this.direcaoX*this.velocidadeX;
        this.posicaoY+=this.direcaoY*this.velocidadeY;

        this.eu.setAttribute('style',`left:${Number(this.posicaoX)}px; top: ${Number(this.posicaoY)}px; width: ${this.tamanhoBola}px; height: ${this.tamanhoBola}px; background-color: rgb(${this.corBola_r},${this.corBola_g},${this.corBola_b})`);

        if((this.posicaoX>larguraPalco) || (this.posicaoY>alturaPalco))
            this.removerBola();

    }
}


window.addEventListener('resize',()=>{
    larguraPalco=palco.offsetWidth;
    alturaPalco=palco.offsetHeight;

});

buttonAdd.addEventListener('click',()=>{
    const quantidade=txt_quantidade.value;

    for(let i=0; i<quantidade; i++){
        let obj = new Bola(bola,palco,d)
        bola.push(obj) ;
    }
})

buttonRemover.addEventListener('click',()=>{
   bola.map((b)=>{
    b.removerBola()
   })
})