//1.Employee Salary Analysis System
let employees = [
 {name:"Ravi", salary:25000},
 {name:"Meena", salary:60000},
 {name:"Arun", salary:45000},
 {name:"Priya", salary:80000},
 {name:"John", salary:30000}
]

// Get employees whose salary is greater than 40000.
let employeesSalary=employees.filter((c,i,t)=>{
    return c.salary>40000;

})
console.log(employeesSalary);

// Find the first employee whose salary is above 70000.
let firstEmployye=employees.find((c,i,t)=>{
    return c.salary>70000;

})
console.log(firstEmployye);

// Calculate the total salary of all employees.
let overAllSalary=employees.reduce((acc,c,i,t)=>{
    return acc+c.salary;

},0)
console.log(overAllSalary);

// Check if any employee salary is below 20000.
let checkBelow=employees.some((c,i,t)=>{
    return c.salary<20000;

})
console.log(checkBelow);

// Check if all employees salary are above 20000.
let checkAbove=employees.every((c,i,t)=>{
    return c.salary>20000;

})
console.log(checkAbove);



//2. E-commerce Product Search
let products = ["laptop","mobile","tablet","smartwatch","mobile"]
// Check if "tablet" exists in the product list.
console.log(products.includes("tablet"));

// Find the first index of "mobile".
console.log(products.indexOf("mobile"));

// Find the last index of "mobile".
console.log(products.lastIndexOf("mobile"));

// Check if "camera" exists.
console.log(products.includes("camera"));





// 3.Website Username Formatter
let username = "   naveenkumar   "
// Remove extra spaces.
console.log(username.trim());

// Convert the username to uppercase.
console.log(username.toUpperCase());

// Convert the username to lowercase.
console.log(username.toLowerCase());

// Extract only first 6 characters of the username.
console.log(username.slice(3,9));


//4.Game Platform Data Processing
let games = ["cricket","football","hockey","tennis"]
//Print all games using forEach().
games.forEach((c,i,t)=>{
   console.log(("allGames: ",c));
})

//print all games using map.
let array=["Game : cricket","Game : football","Game : hockey","Game : tennis"]
let allGames=array.map((c,i,t)=>{
    return (c);
})
console.log("map: ",allGames);



//5.Student Marks Analyzer
let marks = [45,90,23,67,88,12]
// Sort marks ascending order.
let acOrder=marks.sort((a,b)=>{
return a-b;
})
console.log(acOrder);

// Sort marks descending order.
let desOrder=marks.sort((a,b)=>{
    return b-a;

})
console.log(desOrder);

// Reverse the marks array.
console.log(marks.reverse());



//6.Salary Report Generator
let salaries = [10000,20000,30000,40000]
// Find total salary paid by company.
let totalSalaries=salaries.reduce((acc,c,i,t)=>{
    return acc+c;
},0);
console.log(totalSalaries);

// Find average salary.
let averageSalary=salaries.reduce((acc,c,i,t)=>{
return acc+c/salaries.length;

},0)
console.log(averageSalary);


//7.URL Processor
let url = "www-stackly-com"
//Convert the string into array using split().
console.log(url.split("-"));


//8️. Job Role Modifier
let role = "python developer"
// Replace python → javascript
console.log(role.replace("python","javascript"));

// Check if role starts with "python"
console.log(role.startsWith("python"));


// Check if role ends with "developer"
console.log(role.endsWith("developer"));



//9.Nested Array Data Cleanup
let data = [1,2,[3,4,[5,6]]]
//Flatten the array to:[1,2,3,4,5,6]
console.log(data.flat(Infinity));


//10.Sports Data Slice
let sports = ["cricket","football","tennis","hockey","golf"]
// Extract football and tennis
console.log(sports.slice(1,3));

// Extract first 3 sports
console.log(sports.slice(0,3));








