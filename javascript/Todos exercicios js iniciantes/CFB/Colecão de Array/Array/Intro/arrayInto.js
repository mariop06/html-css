let cursos=['Html','C#','C++','C'];
const texto=document.getElementById('iDiv');



cursos.map((el)=>{
    let p= document.createElement('p');
    p.innerHTML=el;
    texto.appendChild(p)

});