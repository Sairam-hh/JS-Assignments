var name = "My name is Kowsalya";
let age = "I am 25 years old";
let city = "I am from Coimbatore";

console.log("name");
console.log("age");
console.log("city");

let username = prompt("Ask your name")
alert("Welcome" + username)
var learnjs = confirm("Do you want to learn javascript")
if (learnjs) {
    alert("Great Choice!");
} else {
    alert("No Problem!");
}


let myString = "Hello";
let myNumber = 100;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log("Value:", myString, "| Type:", typeof myString);
console.log("Value:", myNumber, "| Type:", typeof myNumber);
console.log("Value:", myBoolean, "| Type:", typeof myBoolean);
console.log("Value:", myUndefined, "| Type:", typeof myUndefined);
console.log("Value:", myNull, "| Type:", typeof myNull);

let colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
console.log("First Color:", colors[0]);
console.log("Last Color:", colors[colors.length - 1]);
console.log("Total Colors:", colors.length);
for (let i = 0; i < colors.length; i++) {
    console.log("Color at index", i, ":", colors[i]);
}

let subjects = ["Maths", "Science", "English", "History", "Computer"];
let index = prompt("Enter a number between 0 and 4:");
index = Number(index);
if (index >= 0 && index < subjects.length)
    alert("Selected Subject: " + subjects[index]);

else {
    alert("Invalid index! Please enter number between 0 and 4.");
}


var student = {
    name: "Ajith",
    Age: 28,
    Course: "Java",
    skills: ["HTML", "CSS", "JS"],
}
console.log("student name:", student.name);
console.log("second skill:", student.skills[1]);
console.log("Course name:", student.Course);



let product = {
    Name: "Laptop",
    Price: 45000,
    Category: 2020,
    inStock: "yes",
}
console.log("Product Name:", product.Name);
console.log("Price:", product.Price);
console.log("Available:", product.inStock);

let choise = confirm("inStock");
if (choise) {
    alert("Is there")
}
else {
    alert("Out Of Stock")
}

let Fruit = {

    tropical: ["Mango", "Pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["Orange", "lemon"]
}
console.log(Fruit.berries[1]);
console.log(Fruit.tropical[0]);
console.log(Fruit.citrus[1]);
console.log(Fruit);