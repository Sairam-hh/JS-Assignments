
let date=new Date();
let time=date.toLocaleTimeString();
console.log(time);
let date1=document.querySelector("h1");
setInterval(()=>{
    date1.textContent=time;

},1000);
