//section 1 - Basic Arithmetic(1-10)

// 1.print addition,subtraction, multiplication, division of 25 and 4
let num1 = 25;
let num2 = 4;
console.log("Addition: " + (num1 + num2)); // output is 29
console.log("Subtraction: " + (num1 - num2));// output is 21
console.log("Multiplication: " + (num1 * num2));// output is 100
console.log("Division: " + (num1 / num2));// output is 6.25

// 2.print 100 % 30
console.log("Remainder: " + (100 % 30)); // output is 10

// 3.print 7**2
console.log("Exponentiation: " + (7 ** 2)); // output is 49

// 4.print 2**5
console.log("Exponentiation: " + (2 ** 5)); // output is 32

// 5.store 50 in a variable and divided by 5
let num3=50;
console.log("Division: " + (num3 / 5)); // output is 10

// 6.find remainder of 45 divided by 6
let num4=45;
console.log("Remainder: " + (num4 % 6)); // output is 3

// 7. multiply 0.5*8
console.log("Multiplication: " + (0.5 * 8)); // output is 4

// 8.Substarct 200 from 75
console.log("Subtraction: " + (75 - 200)); // output is -125

// 9.add three numbers (10,20,30)
console.log("Addition: " + (10 + 20 + 30)); // output is 60

// 10.find 9 % 2
console.log("Remainder: " + (9 % 2)); // output is 1


// SECTION 2 - increment /decrement(11-25)

// (11Q)
var a=5;
console.log(a++); // output is 5
console.log(a); // output is 6

// (12Q)
var a=5;
console.log(++a);// output is 6
console.log(a); // output is 6


// (13Q)
var a=10;
var b=a++;
console.log(a,b); // output is 11,10 

// (14Q)
var a=10;
var b=++a;
console.log(a,b); // output is 11,11

// (15Q)
var a=1;
var b=a++ + a++;
console.log(a,b); // output is 3,3

// (16Q)
var a=1;
var b=++a + ++a;
console.log(a,b); // output is 3,5

// (17Q)
var a=3;
a=a++;
console.log(a); // output is 3

// (18Q)
var a=3;
a=++a;
console.log(a); // output is 4

// (19Q)
var x=5;
var y=--x;
console.log(x,y); // output is 4,4

// (20Q)
var x=5;
var y=x--;
console.log(x,y); // output is 4,5

// (21Q)
var a=2;
var b=a++ + ++a + a++;
console.log(a,b); // output is 5,10

// (22Q)
var a=4;
var b=--a + a-- + --a;
console.log(a,b); // output is 1,7

// (23Q)
var a=1;
var b=++a + a++ + ++a;
console.log(a,b); // output is 4,8

// (24Q)
var a=5;
var b=a++ + a++ + a++;
console.log(a,b); // output is 8,18

// (25Q)
var a=10;
a+=a++;
console.log(a); // output is 20


//section 3 -Assignment operators(26-35)
// (26Q)
var a=10;
a+=5;
console.log("Addition Assignment : " + a); // output is 15

// (27Q)
var a=20;
a-=8;
console.log("Subtraction Assignment : " + a); // output is 12

// (28Q)
var a=7;
a*=3;
console.log("Multiplication Assignment : " + a); // output is 21

// (29Q)
var a=40;
a/=5;
console.log("Division Assignment : " + a); // output is 8

// (30Q)
var a=25;
a%=4;
console.log("Remainder Assignment : " + a); // output is 1

// (31Q)
var a=5;
a+=3;
a*=2;
console.log(a)// output is 16

// (32Q)
var a=10;
a-=2;
a/=4;
console.log(a) // output is 2

// (33Q)
var a=8;
a%=3;
console.log(a) // output is 2

// (34Q)
var a=6;
a+=a;
console.log(a); // output is 12

// (35Q)
var a=2;
a*=a +=3;
console.log(a); // output is 10


// section 4 - Comparison operators(36-45)
// (36Q)
console.log(5=="5"); // output is true

// (37Q)
console.log(5==="5"); // output is false

// (38Q)
console.log(0==false); // output is true

// (39Q)
console.log(0===false); // output is false

// (40Q)
console.log(null==undefined); // output is true

// (41Q)
console.log(null===undefined); // output is false

// (42Q)
console.log("10">5); // output is true

// (43Q)
console.log("2">"10"); // output is true

// (44Q)
console.log(true==1);// output is true

// (45Q)
console.log(true===1); // output is false



// section 5 - Logical operators(46-55)
// (46Q)
console.log(true && false); // output is false

// (47Q)
console.log(true || false); // output is true

// (48Q)
console.log(false || false) // output is false

// (49Q)
console.log(!true) // output is false

// (50Q)
console.log(!(5>2)); // output is false

//(51Q)
console.log(5>3 && 10>5);// output is true

//(52Q)
console.log(5>3 && 10<5); //output is false

//(53Q)
console.log(5<3 || 10<5); //output is false

//(54Q)
console.log(5<3 || 10>5); //output is true

//(55Q)
console.log((5>2 && 3>1)||(10<2)); //output is true



// section 6 -ternary(56-60)
//(56Q)
let age=prompt("Enter the age");
console.log(age>=18 ? "Adult":"Minor");

//(57Q)
var marks=prompt("Enter your marks");
console.log(marks>=50? "Pass":"Fail");

//(58Q)
let number=prompt("Enter your Number");
console.log(number%2==0? "Even":"Odd");

//(59Q)
 var marks=prompt("Enter your marks");
 let grades= marks>=92? "Grade A":
             marks>=80? "Grade B":
             marks>=60? "Grade C":
             "Fail";
console.log(grades);

//(60Q)
let num=prompt("Enter Your Number");
console.log(num>=0? "Positive":"Negative");


// section 7 -string & concatenation(61-65)
//(61Q)
console.log("Hello"+"World");//output is HelloWorld

//(62Q)
let hello="Hello";
let world="World";
console.log(hello+" "+world); //output is Hello World

//(63Q)
console.log(`${hello} ${world}`); //output is Hello World

//(64Q)
console.log("10"+5); // output is 105

//(65Q)
console.log(5+"10"); //output is 510



// section 8-Implicit Type Conversion(66-70)
//(66Q)
console.log("5"+2); //output is 52

//(67Q)
console.log("5"-2); //output is 3

//(68Q)
console.log("5"*2); //output is 10

//(69Q)
console.log(true+1); //output is 2

//(70Q)
console.log(false+"1"); //output is false1


// section 9-explicit type conversion(71-75)
//(71Q)
console.log(Number("123")); //output is 123

//(72Q)
console.log(Number("abc")); //output is NAN

//(73Q)
console.log(Number(true)); //output is 1

//(74Q)
console.log(Boolean("")); //output is false

//(75Q)
console.log(Boolean("hello")); //output is true

//Final rapid Fire Round

  //1.Explain difference between == and ===?
// == is loose equality. It compares values after type conversion.
// === is strict equality. It compares both value and data type without type conversion

 //2.Difference between  a++ and ++a
// .a++ → Post Increment. First returns the value, then increases it.
// .++a → Pre Increment. First increases the value, then returns it.
 
//3.List of all falsy values in java Script?
// Falsy values are values that converts to false in Boolean context.
// Falsy values are:
// false
// null
// undefined
// 0
// ""(empty-string)
//NAN

//4.why "5"-2 works but "5"+2 behaves differently?
//."5-2" In Javascript converts "5" into Number ->result 3.
//."5"+2 operator performs string concatenation ->result 52.

//5.why null==undefined is true?
// In loose equality (==) javascript treats null and undefined as equal values.
//Ex: null==undefined // true
//     null===undefined //false

 

