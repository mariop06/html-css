const num1=document.getElementById('num1');
const num2=document.getElementById('num2');
const result=document.getElementById('result');

const soma=document.getElementById('soma');
const sub=document.getElementById('sub');
const mult=document.getElementById('mult');
const div=document.getElementById('div');

let array=[(n1,n2)=>{
    return Number(n1)+Number(n2);
},(n1,n2)=>{
    return Number(n1)-Number(n2);
},(n1,n2)=>{
    return Number(n1)*Number(n2);
},(n1,n2)=>{
    return Number(n1)/Number(n2);
}
];

soma.addEventListener('click',()=>{
    result.value=array[0](num1.value,num2.value);
});
sub.addEventListener('click',()=>{
    result.value=array[1](num1.value,num2.value);
});
mult.addEventListener('click',()=>{
    result.value=array[2](num1.value,num2.value);
});
div.addEventListener('click',()=>{
    result.value=array[3](num1.value,num2.value);
});
