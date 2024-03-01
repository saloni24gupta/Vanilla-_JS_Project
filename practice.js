// q1 Write a program that determines whether a given number is positive or negative.
// a = prompt("Enter the number");
// a = Number.parseInt(a)
// let result;
// function positiveNegative(a){
// if(a>0){
//     result = 'positive'
//     console.log("given number is positive");
// } 
// else {
//     result = 'negative'
//     console.log("given number is negative")
// }

// }
// positiveNegative(a)
// console.log(result)

// q2 Write a program that checks if a number is even or odd.
function EvenOdd(num) {
  if(num%2 == 0){
     console.log("given number is even")
  } else {
    console.log("given number is odd")
  }
}
EvenOdd(1011)

// q3 Write a program to determine the greater of two numbers.
function TwoGreaterNum(a,b) {
    if(a>b && b<a) {
        console.log("a is greater")
    }
    else if(b>a && a<b){
        console.log("b is greater")
    }

}
TwoGreaterNum(157, 117)

// question 4 Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
function Transnumtletter(num) {
   
    let grade;
    if(num >= 90){
        console.log("grade A")
        grade = 'A';
    }
    else if(num >= 80) {
        console.log("gradeB")
        grade = 'B'
    }
    else if(num >= 70){
        console.log("grade C")
        grade = 'C'
    }
    else if(num >= 60) {
        console.log("grade D")
        grade = 'D'
    }
    else if(num >= 50) {
        console.log("grade F")
        grade = 'F'
    }
    else {
        grade = 'Fail'
    }
    console.log("grade is :" + grade)

   
}
// Transnumtletter(89) 

// qwestion 5 Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
function TicketPrice(age) {
    var Rupess;
    if(age < 12){
    Rupess = 5
    console.log(Rupess)
    }
    else if(age < 18) {
        Rupess = 10
    }
    else if (age < 60) {
        Rupess = 20
    }

    else if(age > 60) {
        Rupess = 15
    }
 
console.log(Rupess)
}

TicketPrice(5);

