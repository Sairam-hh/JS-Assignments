// Task 1 -variable + output
let name="Sairam";
let age=21;
let city="vishakapatnam";

console.log("My name is "+ name+".");
console.log("I am "+age+" years old.");
console.log("I am from "+city+".");



// Task 2- Alert + confirm + prompt
let userName = prompt("Enter your name:");
alert("welcome "+userName+"!");
let mychoice=confirm("Do you want to learn javascript?");
if(mychoice){
    alert("Great Choice!");
}
else{
    alert("NO Problem!");
}



// Task 3 -Data Type checker
let str="Hello World";
let num=100;
let bool=true;
let undef;
let nul=null;
console.log("value: "+str+"| type: "+typeof str);
console.log("value: "+num+"| type: "+typeof num);
console.log("value: "+bool+"| type: "+typeof bool);
console.log("value: "+undef+"| type: "+typeof undef);
console.log("value: "+nul+"| type: "+typeof nul);



// Task 4 -Array Practice
let myArray=["red","green","blue","yellow","orange","pink"];
console.log("First Color is: "+myArray[0]);
console.log("Last Color is: "+myArray[myArray.length-1]);
console.log("Total number of colors: "+myArray.length);

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);



// Task 5 Array Dynamic Access 
let subjects=["Math","Science","History","Geography","English"];
let index=prompt("choose an index between 0 and 4:");
console.log("selected subject: "+subjects[index]);



// Task 6 - Object Practice
let student={
    name:"Sairam",
    age:21,
    course:"Computer Science",
    skills:["JavaScript","Python","Java"]
}
console.log("Student Name: "+student.name);
console.log("Second Skill: "+student.skills[1]);
console.log("Course: "+student.course);



// Task 7 Mixed Concept Task
let product={
    name:"Laptop",
    price:45000.00,
    category:"Electronics",
    inStock:true,
}
console.log("Product Name: "+product.name);
console.log("Price: "+product.price);
if(product.inStock){
    console.log("Available: Yes");
}
else{
    console.log("Out of Stock");
}


// Task 8  Fruit Object Advanced
let fruits={
    tropical:["Mango","Pineapple"],
    berries:["Strawberry","Blueberry"],
    citrus:["Orange","Lemon"],
}
console.log(fruits.berries[1]);
console.log(fruits.tropical[0]);
console.log(fruits.citrus[1]);
console.log(Object.keys(fruits).length);