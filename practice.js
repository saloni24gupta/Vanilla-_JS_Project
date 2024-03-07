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
// function EvenOdd(num) {
//   if(num%2 == 0){
//      console.log("given number is even")
//   } else {
//     console.log("given number is odd")
//   }
// }
// EvenOdd(1011)

// // q3 Write a program to determine the greater of two numbers.
// function TwoGreaterNum(a,b) {
//     if(a>b && b<a) {
//         console.log("a is greater")
//     }
//     else if(b>a && a<b){
//         console.log("b is greater")
//     }

// }
// TwoGreaterNum(157, 117)

// // question 4 Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
// function Transnumtletter(num) {
   
//     let grade;
//     if(num >= 90){
//         console.log("grade A")
//         grade = 'A';
//     }
//     else if(num >= 80) {
//         console.log("gradeB")
//         grade = 'B'
//     }
//     else if(num >= 70){
//         console.log("grade C")
//         grade = 'C'
//     }
//     else if(num >= 60) {
//         console.log("grade D")
//         grade = 'D'
//     }
//     else if(num >= 50) {
//         console.log("grade F")
//         grade = 'F'
//     }
//     else {
//         grade = 'Fail'
//     }
//     console.log("grade is :" + grade)

   
// }
// // Transnumtletter(89) 

// // qwestion 5 Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
// function TicketPrice(age) {
//     var Rupess;
//     if(age < 12){
//     Rupess = 5
//     console.log(Rupess)
//     }
//     else if(age < 18) {
//         Rupess = 10
//     }
//     else if (age < 60) {
//         Rupess = 20
//     }

//     else if(age > 60) {
//         Rupess = 15
//     }
 
// console.log(Rupess)
// }

// TicketPrice(5);
// Write a program that determines if a year is a leap year.
// function leapYear(year) {
//    let result;
//     if(year%4 == 0 && (year % 100 !== 0 || year % 400 === 0)){
// result = 'Year is leap year'
//     } else {
//   result = 'Year is not leap year'
//     }
//     console.log(result)
// }
// leapYear(2024)

//question 7 Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

// function discount() {
//   let price;
//   if(price >= 100){
//     discount = 20;
//   }
//   else if(price >= 50){
//     discount = 10;
//   }
//   else {
//     discount = 0;
//   }
//   console.log(discount)
// }
// discount(5)
// console.log(document.body.firstChild)
// let a = document.body.firstChild;
// console.log(a.firstChild)

// let t = document.body.firstElementChild.firstElementChild
// console.log(t.rows)

// let id1 = document.getElementById("box1")
// console.log(id1.matches(".box"))

// let a= first.getAttribute("class")
// console.log(a)
// let b = first.hasAttribute("class")
// console.log(b)
// // check krta hai attitrue hai to true ni hai to  false
// let c = first.hasAttribute("style")
// console.log(c)

// let x = document.getElementById('first')
// let y = document.getElementsByTagName('span')
// console.log(y[0].innerHTML)
// console.dir(y[0].innerHTML)
// console.log(x)
// console.log(document.getElementsByTagName('span')[0])

// console.log(first.dataset)
// let a = document.getElementsByTagName()

// let a = document.getElementsByTagName('div')[0]
// a.innerHTML  = a.innerHTML + '<h3>HELLO WORLD</h3>'
// // a.innerHTML =    a.innerHTML + '<h1>HELLO WORLD</h1>'

// let div = document.createElement('div')
// div.innerHTML = '<h1>HELLO WORLD CLASS I SME</h1>'
// console.log(div)
// div.setAttribute("Class", "mj5 my-4 mx-3 flex" )
// div.setAttribute("style", "border: 2px solid red")
// a.appendChild(div)

var div = document.getElementById("mydiv")
function creatediv() {
    for(let i = 0; i<10; i++){
        var container = document.createElement('div');
        var textNdode = 'I AM FROM DIV THIS IS MY FIRST HERE'
        container.append(textNdode)
        div.append(container)
        console.log(div)
        container.setAttribute('class', 'mydiv')
      }
}
var button = document.getElementById("button")
// creatediv()





