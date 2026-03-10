 // section 1 -if/if else
//1.Create a variable num = 15. If  is greater than 10 print ' is big'.
 var num=15;
 if(num>10){
    console.log(" is big");
 }

 //2.2 Create a variable age = 20. Check if the person is eligible to vote.
var age=20;
if(age>=18){
    console.log("Eligible to vote"); 
}

//3.3 Create a variable temperature. If temperature > 30 print 'Hot' else print 'Cool'.
var temperature=prompt("Enter your temperature(in degrees)");
if(temperature>30){
    console.log("Hot");
    
}else {
    console.log("COol");
    
}

//4.4 Check if a  is positive or negative.
var num=prompt("Enter your ");
if(num>=0){
    console.log("Positive");    
}else {
    console.log("Negative");
    
}

//5.5 Check if a  is even or odd using if else.
var num=prompt("Enter Your ");
if(num%2==0){
    console.log("Even");
    
}else{
    console.log("Odd");
    
}



// section 2-else if
//1.1 Create a variable marks. 90+ Grade A, 70+ Grade B, 50+ Grade C, Below 50 Fail.
var marks=prompt("Enter your marks");
if(marks>=90){
    console.log("Grade A");
    
}else if(marks>=70){
    console.log("Grade B");
    
}else if(marks>=50){
    console.log("Grade C");
    
}else {
    console.log("Fail");0
    
}

//2.2 Create variable hour. Print Morning / Afternoon / Evening / Night message.
var hour = prompt("enter your time");

if (hour >= 5 && hour < 12) {
    console.log("Morning");
}
else if (hour >= 12 && hour < 17) {
    console.log("Afternoon");
}
else if (hour >= 17 && hour < 21) {
    console.log("Evening");
}
else {
    console.log("Night");
}

//3.3 Check if a  is 0, positive, or negative.
var num=prompt("Enter your ");
if(num==0){
    console.log("Zero");
    
}else if(num>0){
    console.log("Positive");
    
}else{
    console.log("Negative");
    
}

//4.4 Create variable score. If score ≥ 100 Winner, 50–99 Good, Below 50 Try again.
var score=prompt("enter your score");
if(score>=100){
    console.log("Winner");
    
}else if(score>=50 && score<=99){
    console.log("Good");
    
}else {
    console.log("Try Again");
    
}

//5.5 Create a program to check largest among 3 s.
  var a=20;
  var b=30;
  var c=40;
  if(a>b && a>c){
    console.log(`${a} is largest number`);
  }else if(b>a&&b>c){
    console.log(`${b} is largest number`);
    
  }else{
    console.log(`${c} is largest number`);
  }


  //section3 - switch statement
  //1. Create variable day = 1. Print day name using switch.
  var day=1;
  switch(day){
    case 1:console.log("Monday");break;
    case 2:console.log("tuesday");break;
    case 3:console.log("wednesday");break;
    case 4:console.log("thursday");break;
    case 5:console.log("friday");break;
    case 6:console.log("saturday");break;
    case 7:console.log("sunday");break;
  }

  //2.2 Create variable trafficLight. Red Stop, Yellow Ready, Green Go.
  var trafficlight="red";
  switch(trafficlight){
    case "red":console.log("stop"); break;
    case "yellow":console.log("Ready");
    case "Green":console.log("Go");
    
  }

  //3.3 Create variable month. Print season name using switch.
  var month=prompt("Enter your month");
  switch(month){
    case "january":console.log("winter");break;
    case "february":console.log("winter");break;
    case "march":console.log("summer");break;
    case "april":console.log("summer");break;
    case "may":console.log("summer");break;
    case "june":console.log("summer");break;
    case "july":console.log("rainy");break;
    case "august":console.log("rainy");break;
    case "september":console.log("rainy");break;
    case "october":console.log("rainy");break;
    case "november":console.log("winter");break;
    case "december":console.log("winter");break;
     
  }

//4.4 Create variable role. Admin / User / Guest message.
var role="admin";
switch(role){
    case "admin": console.log("admin");break;
    case "user": console.log("user");break;
    case "Guest message": console.log("Guest message");break;
    
}

//5.5 Create variable grade. Print performance message using switch.
let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent Performance");
        break;

    case "B":
        console.log("Good Performance");
        break;

    case "C":
        console.log("Average Performance");
        break;

    case "D":
        console.log("Needs Improvement");
        break;

    default:
        console.log("Invalid Grade");
}

//section 4 -for loop

//1.1 Print numbers 1 to 10.
 for(let i=1;i<=10;i++){
    console.log(i);
    
 }

 //2.2 Print numbers 10 to 1.
for(let i=10;i>=1;i--){
    console.log(i);
    
}

//3.3 Print even numbers from 1 to 20.
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
        
    }
}

//4.4 Print odd numbers from 1 to 20.
for(let i=1;i<=20;i++){
    if(i%2==1){
        console.log(i);
        
    }
}

//5.5 Print multiplication table of 5.
  for(let i=1;i<=10;i++){
    console.log(5*i);
    
  }

  //section 5-while loop
  //1.1 Print numbers 1 to 5 using while.
  var num=1;
  while(num<=5){
    console.log(num);
    num++;
    
  }

  //2.2 Print numbers 5 to 1 using while.
var num=5;
while(num>=1){
    console.log(num);
    num--;
    
}

//3.3 Print even numbers from 1 to 10 using while.
var num=1;
while(num<=10){
    if(num%2==0){
        console.log(num);
        
    }
    num++;
}

//4.4 Print sum of numbers from 1 to 10.
var num=1;
var sum=0;
while(num<=10){
    sum+=num;
    num++;
}
console.log(sum);

//5.5 Print square of numbers 1 to 5.
var num=1;
while(num<=5){
    console.log(num*num);
    num++;
    
}

// section 6-do while loop
//1.1 Print numbers 1 to 5 using do while.
var num=1;
do{
    console.log(num);
    num++;
    
}while(num<=5);

//2.2 Print numbers 5 to 1 using do while.
var num=5;
do{
    console.log(num);
    num--;
    
}while(num>=1);

//3. Print multiples of 3 up to 30.
var num=3;
var i=1;
do{
    console.log(num*i);
    i++;
    
    
}while(i<=10);

//4.Print numbers divisible by 4 from 1 to 20.
var num=1;
do{
    if(num%4==0){
        console.log(num);
        
    }
    num++;
    
}while(num<=20);

//5.5 Print numbers until value reaches 10.
var num=1;
do{
    console.log(num);
    num++;
    
}while(num<=10);

//section  7 for off
//1.1 Create string 'javascript' and print each character.
let str="javascrpt";
for(let i of str){
    console.log(i);
    
}

//2.2 Create array ['apple','banana','orange'] and print each fruit.
let arr=["apple","banana","orange"];
for(let i of arr){
    console.log(i);
    
}

//3.3 Count number of characters in string using for of.
let word="javascript";
let count=0;
for(let i of word){
    count+=1;
}
console.log(count);

//4.4 Print only vowels from a string.
let words="javascript";
for(let ch of words){
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
        console.log(ch);
        
}

//5.5 Print sum of numbers from an array [10,20,30].
var num=[10,20,30];
var sum=0;
for(let i of num){
    sum+=i;
    
}
console.log(sum);

//section 8-for in(object)
//1.1 Create object student with name, age, department. Print all values.
var student={
    name:"sairam",
    age:"21",
    department:"cse",
}
for(let i in student){
    console.log( student[i]);
    
}

//2.2 Print all keys of an object using for in.
var student={
    name:"sairam",
    age:"21",
    department:"cse",
}
for(let i in student){
    console.log(i);
    
}

//3.3 Print key and value together.

var student={
    name:"sairam",
    age:"21",
    department:"cse",
}
for(let i in student){
    console.log(i+": "+ student[i]);
    
}


// section 9 functions
//1 .Create function add(a,b) and return addition.
function add(a,b){
    return a+b;
}
let addition=add(3,4);
console.log(addition);

//2.2 Create function square(num) and return square of number.
function square(num){
    return num*num;
}
let squ=square(6);
console.log(squ);


    




