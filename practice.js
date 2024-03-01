// q1 Write a program that determines whether a given number is positive or negative.
a = prompt("Enter the number");
a = Number.parseInt(a)
let result;
function positiveNegative(a){
if(a>0){
    result = 'positive'
    console.log("given number is positive");
} 
else {
    result = 'negative'
    console.log("given number is negative")
}

}
positiveNegative(a)
console.log(result)

// q2 Write a program that checks if a number is even or odd.
