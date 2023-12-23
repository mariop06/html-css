const olhos= [...document.getElementsByClassName('olho')];

let posX=0;
let posY=0;
window.addEventListener('mousemove',(evento)=>{
    posX=evento.clientX;
    posY=evento.clientY;

    const rotacao=Math.atan2(posY,posX)*180/Math.PI;

    olhos.forEach((olho)=>{
    olho.style.transform='rotate('+rotacao+'deg)';
    })
})
