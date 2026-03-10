// Functions (1–6)
//1 .Create a function greetUser(localvariable) that prints 'Welcome to Stackly, {localvariable}'.
function greetUser(localvariable){
  console.log(`welcome to stackly,${localvariable}`);
  
}
greetUser("Sairam");

//2.2 Create a function calculateSalary(basic, bonus) and return the total salary.
function calculateSalary(basic,bonus){
  return basic+bonus;
}
let totalSalary=calculateSalary(20000,5000);
console.log(totalSalary);


//3.3 Create a function checkEvenOdd(num) that returns 'Even' or 'Odd'.
let checkEvenOdd=function(a){
  if(a%2==0){
    return "Even";
  }
  else{
    return "Odd";
  }
}
let check=checkEvenOdd(4);
console.log(check);

//4.4 Create a function findMax(a,b,c) that returns the largest number.
let findMax=(a,b,c)=>{
  if(a>b && a>c){
    return "a is largest number";
  }else if(b>a && b>c){
    return "b is largest number";
  }
  else{
    return "c is largest number";
  }
}
let answer=findMax(10,20,30);
console.log(answer);

//5.5 Create a function calculateGST(price) that returns price + 18% GST.
function calculateGST(price){
  return price+(18*price)/100
}
let calculategst=calculateGST(1000);
console.log(calculategst);

//6.6 Create a function login(userlocalvariable,password) that checks if userlocalvariable = 'admin' and password ='1234'
function login(userlocalvariable,password){
  if(userlocalvariable=="admin"&& password=="1234"){
    console.log("Login Successfully! welcome,admin");
    
  }else{
    console.log("Login Failed! Invalid userlocalvariable and password");
  }
}
login("admin","1234");



//Default Parameters (7–9)
//7.1 Create a function createEmployee(localvariable, role='Trainee') and print employee details.
function createEmployee(localvariable,role='Trainee'){
  console.log(`localvariable: ${localvariable} `);
  console.log(`role: ${role}`);
}
createEmployee("Sairam");

//8.2 Create a function calculateDiscount(price, discount=10).
function calculateDiscount(price,discount=10){
 let discountprice= (price*discount)/100;
  let finalprice=price-discountprice;
  return finalprice;
}
console.log(calculateDiscount(100));

//9.3 Create a function orderFood(item, quantity=1).
function orderFood(item,quantity=1){
  console.log(`item: ${item}`);
  console.log(`quantity: ${quantity}`);
  
}
orderFood("pizza");



//scope(10-12)
//10.Create a variable company = 'Stackly' outside a function and access it inside a function.
var company="stackly";
function Company(localvariable){
console.log(`company localvariable: ${company}`);

}
Company();

//11. Create a block using if(true) and test var, let, const scope behavior.
//using var variable
if(true){
  var one1="global scope";
  let two2="block scope";
  const three3="block scope"
}
console.log(one1); // it gives output as global output.
console.log(two2); // it gives error like two2 is not defined because let variable didn't accept outside the scope.
console.log(three3);// it is also same gives error like three3 is not defined because const variable didn't accept outside the scope

//12. Create a function where a variable inside the function cannot be accessed outside.
function myFunction(){
  let localvariable="i am inside the function";
  console.log(localvariable);
}
myFunction(); //output i am inside the function.
//console.log(localvariable);// it gives error when we access outside the function.

//Hoisting (13–15)
//13.Print a variable before declaring using var and observe output.
console.log(friendName); // it gives undefined  means before hoisting it accept varible but nots its value because using var variable which is gloabal scoped.
var friendName="Rajkumar";

//14.Try printing let variable before declaration and check error.
console.log(loverName);
let loverName="bhagyasree"; // it gives error like cannot access loverName before initialization because let varibale is block scope

//15.Create a function call before function declaration and observe behavior.
console.log(call());  //it gives undefined  means call before function it accept varible but nots its value because using var variable which is gloabal scoped.
function call(){
  var village="korama"
} 


//Function Types (16–18)
//16.Write a named function that prints 'Named Function Example'.
function namedFunction(){
  console.log("Named Function Example"); 
}
namedFunction();

//17.Write an anonymous function stored in a variable to multiply two numbers.
const anonymousFunction =function(a,b){
  let Answer=a*b;
  return Answer;
}
console.log(anonymousFunction(5,4));

//18.Write an arrow function that returns square of a number.
const arrowFunction=(a)=>{
  return a*a;
}
console.log(arrowFunction(5));


//Callback & Higher Order Functions (19–22)
//19. Create a function processData(callback) and call the callback.
function processData(callback){
  console.log("first ordered function called");
  callback();

}
function mycallback(){
  console.log("callback function called");
  
}
processData(mycallback);


//20.Create a function calculate(a,b,operation) where operation is callback for add/sub.
function calculate(a,b,operation){
  return operation(a,b);
}
function add(x,y){
  return x+y;
}
function sub(x,y){
  return x-y;
}
console.log(calculate(10,20,add));
console.log(calculate(10,20,sub));

//21.Create a callback function that prints 'Task Completed' after a calculation.
function  calculate1(a,b,callback){
  console.log(a+b);
  callback(); 

}
function taskCompleted(){
  console.log("Task completed");
  
}
calculate1(5,4,taskCompleted);

//22. Create a function that accepts a callback and prints user data.

function getUserData(callback){
  let user={
    name:"sairam",
    age:21,
    email:"sairambanti41@gmail.com"
  }
  callback(user);
}
function displayUser(user){
  console.log("name:",user.name);
  console.log("email:",user.email);
}
getUserData(displayUser)


//Currying (23–24)
//23.Create a curried function add(a)(b)(c) that returns sum.
function add(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
console.log(add(10)(20)(30));

//24.Create a curried function multiply(a)(b)(c).
function multiply(a){
  return function(b){
    return function(c){
      return a*b*c;
    }
  }
}
console.log(multiply(10)(10)(10));

//IIFE (25–26)
//25.Write an IIFE that prints 'Website Loaded'
(function(){
  console.log("website loading");

})()

//26.Create an IIFE that calculates discount price of a product.
(function (price1,discount1){
  let finalPrice=price1-(price1*discount1)/100;
  console.log(finalPrice);
})(1000,20)



//Generator Functions (27–28)
//27. Create a generator that yields 3 random discount coupons.

function*gen(){
  yield "SAVE 10";
  yield "SAVE 50";
  yield "SAVE 100";
}
let genVal=gen();
for(let a of genVal){
  console.log(a)
}


//28. Create a generator that yields 3 motivational messages for developers.
function*gen1(){
  yield "Debug your doubts, not just your code."
  yield "Google is not cheating. It's a developer's superpower."
  yield "Every expert was once a beginner who didn't quit."
}
let genVa2=gen1();
for(let a of genVa2){
  console.log(a)
}

//Spread Operator (29–31)
//29. Merge two arrays [1,2,3] and [4,5,6] using spread.
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let finalArray=[...arr1, ...arr2];
console.log(finalArray);

//30. Clone an array [10,20,30] using spread operator.
let original=[1,2,3];
let cloned=[...original]
console.log("original array:",original);
console.log("cloned array:",cloned);


//31. Merge two objects: {name:'John'} and {role:'Developer'}.
let obj1={
  name:"john"
}
let obj2={
  role:"developer"
}
let mergedObject={...obj1,...obj2}
console.log(mergedObject);



//Rest Operator (32–34)
//32. Create a function sumAll(...numbers) that returns total sum.
function sumAll(...numbers){
  let total=0;
  for(let i of numbers){
    total+=i;
    
  }
  return total;
}
console.log(sumAll(1,2,3));

//33. Create a function that prints first argument and rest arguments separately.
function printNumbers(first,...rest){
  console.log(first);
  console.log(rest);  
}
printNumbers(10,20,304,40);
//34. Create a function that accepts multiple product prices and returns total bill
function multipleProduct(...args){
  let Total=0;
  for(let i of args){
    Total+=i;
  }
  return Total;
}
console.log("total bill: ",multipleProduct(100,200,300));


//Destructuring (35–38)
//35. Destructure array [10,20,30,40] into variables.
let array=[10,20,30,40];
let [a1,a2,a3,a4]=array;
console.log(a1);
console.log(a4);

//36. Destructure object {name:'Naveen', role:'Developer', salary:40000}.
let object={
  name:"Naveen",
  role:"Developer",
  salary:40000
}
let {name,role,salary}=object;
console.log(name);

//37. Extract first and last element from array using destructuring.
let array2=[1,2,3,4,5];
let [first,...rest]=array2;
console.log(first);

console.log(rest);

//38. Destructure nested array [1,2,[3,4]].
let array3=[1,2,[3,4]];
let [a,b,[c,d]]=array3;
console.log(a);
console.log(d);


//Array Manipulation (39–40)
//39. Create an array [1,2,3,4,5] and perform push, pop, shift, unshift.
let array4=[1,2,3,4,5];
console.log("Orginal array:",array4);
array4.push(6,7,8);
console.log("after push:",array4);
array4.pop();
console.log("after pop: ",array4);
array4.shift();
console.log("after shift: ",array4);
array4.unshift(1);
console.log("after unshift: ",array4);





//40. Use splice() to replace 40,50 with 4,5 in [1,2,3,40,50,6]
let array5=[1,2,3,40,50,6];
array5.splice(3,2,4,5);
console.log("after splice: ",array5);















 
















