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
Transnumtletter(89)

