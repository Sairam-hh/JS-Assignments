let num1=Number(prompt("enter your first number"));
let num2=Number(prompt("enter your second number"));
let operation=prompt("enter your operation(+,-,*,/)");

if(operation=="+"){
    console.log(num1+num2);
}
else if(operation=="-"){
    console.log(num1-num2);
    
}else if(operation=="*"){
    console.log(num1*num2);
    
}else if(operation=="/"){
    console.log(num1/num2);
    
}
else{
    console.log("Invalid operator");
    
}



