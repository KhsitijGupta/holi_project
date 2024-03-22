let yp=document.getElementById("your_page");
let x=document.getElementById("name");
let change =document.getElementById("change");
let btn=document.getElementById("btn");
btn.onclick=function(){
    y=x.value;
    change.innerHTML=y;
    x.value="";
    yp.style.display="none";
}
