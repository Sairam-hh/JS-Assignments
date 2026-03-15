
//Task 1 – Digital Clock (Real-Time Time Display)
//Create a program that shows the current time every second.
//Use Date() to get current time.
let date1=new Date();
console.log(date1.toLocaleTimeString());

// Print hours : minutes : seconds.
console.log(`hours: ${date1.getHours()} minutes: ${date1.getMinutes()} seconds: ${date1.getSeconds()}`);

//Update the time every 1 second using setInterval().

let as1=setInterval(function(){
    let date2=new Date();
    console.log(date2.toLocaleTimeString());
    
})
// setTimeout(()=>{
//     clearInterval(as1)
// },1000);





//Task 2 – Age Calculator
//Create a program that calculates user age.

// Take birth year input from user.

let birthdayYear=prompt("enter your year");


// Use Date() to get current year.
let currentYear=new Date().getFullYear();
console.log(currentYear);


// Calculate the age.

let age=currentYear-birthdayYear;
console.log(`Your age is ${age}`);





//Task 3 – Website Loading Simulation
//Simulate a website loading message.

// Immediately print "Website Loading...".
console.log("website Loading...");

// After 3 seconds, print "Website Loaded Successfully" using setTimeout().
setTimeout(()=>{
    console.log("website Loaded Successfully");

},3000);




//Task 4 – Automatic Notification System
//Create a program that sends a reminder every 5 seconds.

// Print "Take a short break" every 5 seconds.
let as2=setInterval(()=>{
    console.log("Take a short break");
    
},5000);
// Stop the reminder after 20 seconds.
setTimeout(()=>{
    clearInterval(as2);
},20000);






//Task 5 – Online Order Status System
//Simulate a food order process.

// Print "Order Placed".
console.log("Order Placed");

// After 2 seconds → "Order Preparing".
setTimeout(()=>{
    console.log("Order Preparing");
    
},2000);
// After 5 seconds → "Out for Delivery".
setTimeout(()=>{
    console.log("out for Delivery");
    
},5000);
// After 8 seconds → "Order Delivered".
setTimeout(()=>{
    console.log("Order Delivered");
    
},8000);






//Task 6 – API Data Viewer
let url="https://jsonplaceholder.typicode.com/todos/";
// Fetch the API.
fetch(url).then((data)=>{

    // Convert response to JSON.
   return (data.json()); 
})
.then((jsData)=>{
    jsData.filter((c,i,t)=>{

        // Print all todo titles in console.
      console.log(c.title);
  
    })

})





//Task 7 – Completed Task Filter
//Print only tasks where completed=true;
let url1="https://jsonplaceholder.typicode.com/todos/";
fetch(url1).then((data)=>{
   return (data.json()); 
}).then((jsData)=>{
    let completedTasks=jsData.filter((c,i,t)=>{
        return c.completed===true;
    });
    completedTasks.forEach((c,i,t)=>{
        console.log(c.title);
        
    });
});







//Task 8 – API Error Handling
// Create a program that:
// Fetch API data.
// If success → print "Data received".
// If error → print "Server Error".
// Always print "Process Completed" using .finally().
let url2="https://jsonplaceholder.typicode.com/todos/";
fetch(url2).then((data)=>{
    return data.json();
    

}).then((jsData)=>{
    console.log("Data received");
    
}).catch((message)=>{
    console.log("Server Error");

}).finally(()=>{
    console.log("Process Completed");
    
})




//Task 9 – Meeting Countdown Timer
// Create a countdown timer.
// Start from 10 seconds.
// Decrease every second.
// When it reaches 0, print "Meeting Started".
let time=10;
let timer=setInterval(()=>{
    time--;
if(time<0){
    clearInterval(timer)
    console.log("Meeting statred");
    
}
},1000);





//Task 10 – Login Session Timeout
// Simulate user session expiration.
// Print "User Logged In".
console.log("User Logged In");

// After 10 seconds, print "Session Expired. Please Login Again".
setTimeout(()=>{
    console.log("Session Expired.Please Login  Again");
    
},10000);