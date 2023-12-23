const url= document.getElementById('url')
const buttonUrl=document.getElementById('button_Url');

buttonUrl.addEventListener('click',()=>{
    // window.location.replace('www.google.com')
    // window.location.assign('www.google.com')

    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)

    window.location=url.value;
})