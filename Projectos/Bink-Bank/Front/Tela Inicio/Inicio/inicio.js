const login=document.getElementById('login');
const register=document.getElementById('register');
const divLogin=document.getElementById('divLogin');
const divRegister=document.getElementById('divRegister');


window.addEventListener('load',()=>{
     // Ligacao com a Pagina de Login
    const linkLogin=document.createElement('a');
    linkLogin.setAttribute('href','../../Tela de Login/Login/login.html');
    linkLogin.style.width='100%';
    divLogin.appendChild(linkLogin);
    linkLogin.appendChild(login);
    
    // Ligacao com a Pagina de Cadastro
    const linkRegister=document.createElement('a');
    linkRegister.setAttribute('href','../../Tela de Cadastro/Cadastro/cadastro.html');
    linkRegister.style.width='100%';
    divRegister.appendChild(linkRegister);
    linkRegister.appendChild(register);
    
})

