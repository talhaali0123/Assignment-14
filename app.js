// Chapter 9-11 //

// 1. Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this: “Welcome to city of lights”

let city = prompt("Enter your city name:");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am.");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

let signalColor = prompt("Enter traffic signal color:");
if (signalColor.toLowerCase() === "red") {
  alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
  alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
  alert("Move now");
}

// 4. Write a program to take input remaining fuel in car (in itres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

let fuel = prompt("Enter remaining fuel in car (in litres):");
if (parseFloat(fuel) < 0.25) {
  alert("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would bedisplayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
// Output: Alert will be displayed because a is incremented before the comparison.

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// Output: Alert will not be displayed because b is incremented after the comparison.

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
} // No alert
if (c === 13) {
  alert("condition 2 is true");
} // Alert displayed
if (++c < 14) {
  alert("condition 3 is true");
} // No alert
if (c === 14) {
  alert("condition 4 is true");
} // Alert displayed

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
// Output: Alert displayed because the condition is true.

// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

if (true) {
    alert("True");
  }
  // Output: Alert displayed.
  
  if (false) {
    alert("False");
  }
  // Output: No alert displayed.
  

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

if ("car" < "cat") {
    alert("car is smaller than cat");
  }
  // Output: Alert displayed because "car" is lexicographically smaller than "cat".
  

// 6. Write a program to take input the marks obtained in threesubjects & total marks. Compute & show the resultingpercentage on your page. Take percentage & computegrade as per following table:

let marks1 = parseFloat(prompt("Enter marks for subject 1:"));
let marks2 = parseFloat(prompt("Enter marks for subject 2:"));
let marks3 = parseFloat(prompt("Enter marks for subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let obtainedMarks = marks1 + marks2 + marks3;
let percentage = (obtainedMarks / totalMarks) * 100;

let grade, remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

alert(`Total Marks: ${totalMarks}\nMarks Obtained: ${obtainedMarks}\nPercentage: ${percentage}%\nGrade: ${grade}\nRemarks: ${remarks}`);

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = 7; // for example
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
  alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

let number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
  alert("The number is divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

let num = parseInt(prompt("Enter a number:"));
if (num % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;
if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
}

alert(`The result is: ${result}`);
