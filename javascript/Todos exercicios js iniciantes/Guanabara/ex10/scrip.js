function mostrar(){
    var msg = window.document.getElementById('msg');
    var foto = window.document.getElementById('img');
    var data = new Date();
    var hora=data.getHours();
    hora=1;
    msg.innerHTML=`Agora são ${hora} horas`;

   

    if(hora>=6 && hora<12)
    {
        //Bom dia
        foto.src='imagem/manha.jpg';
        document.body.style.background='#e2cd9f';
    } 

    else if(hora>=12 && hora<18)
    {
        //Boa tarde
        foto.src='imagem/tarde.jpg';
        document.body.style.background='#b9846f';
    } else
    {
        //Boa Noite
        foto.src='imagem/noite.jpg';
        document.body.style.background='#515154';
    }

    }



