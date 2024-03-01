// //Book Class: Represents a Book

// class Book {
//     constructor(title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// //UI Class: Handle UI Tasks
// class UI {
//     static displayBooks() {
//         const StoredBooks = [
//             {
//                 title: 'Book One',
//                 author: 'Jane Doe',
//                 isbn: '45545'
//             },
//             {
//                 title: 'Book two',
//                 author: 'Jane Doe',
//                 isbn: '45547'
//             }
//         ];

//         const books = StoredBooks;
//         books.forEach((book) => UI.addBookToList(book));
//     }

    

//     static addBookToList(book) {
//         const list = document.querySelector('#book-list');
//         const row = document.createElement('tr');

//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
//         `;

//         list.appendChild(row);
//     }
// }

//Store Class: Handles Storage

//Event: Display Books
// document.addEventListener('DOMContentLoaded', UI.addBookToList);
//Event: Add a Book

//Event: Remove a Book
// let sum = 0;
// let n = prompt("enter the no");
// n = Number.parseInt(n)
// for(let i=0; i<n; i++){
// sum += (i+1)
// }
// console.log("sum of first n" +n + "natural no. is" + " " +sum)

// for(let i=0; i<=10; i++) {
//     console.log(i)
// }
// function printNumbers(){
// for(let i=0; i<10; i++) {
//     console.log(i+1)
// }
// }
// printNumbers()

// function printArray(arr){
//     for(var i=0; i<arr.length; i++){
//         console.log("i am from i" + "  " + arr[i])
//         for(var j=0; j<arr[0].length; j++){
//             console.log(arr[i][j])
// // console.log(j)        
//         }
//     }
// }
// var arr = [[1, 3, 5, 7, 8, 6], [4, 8, 7], [5, 6], [6, 8, 5]]
// printArray(arr)
// function EvenNumber(arr) {
//     for ( var i=0; i<arr.length; i+2){
//         if(arr[i]%2 == 0){
//             console.log(arr[i]);
//         }
//     }
// }
// var arr = [13,23,12,45,22,48,66,100]
// EvenNumber(arr)
// function printEven(arr) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
//         console.log(arr[i]); //print even number
//       }  
//     }
//   }
  // var arr = [[12, 343, 45] ,13,23,12,45,22,48,66,100]
  
  // printEven(arr) //12 22 48 66 100
// function deleteElement(arr, ele) {
//  for(var i=0; i<arr.length; i++){
//   console.log(arr);
//   if(arr[i] == ele){
//     arr.splice(i, 1);
//   }
//  }
//  return arr;

// }

// arr = deleteElement(arr, 45)
// var arr = [[12, 343, 45] ,13,23,12,45,22,48,66,100]
// function TimeOutFun(arr) {
//   for(var i=0; i<7; i++){
//     setTimeout(() => {
//       console.log(i)
//     }, 5000)
//   }
// }

// TimeOutFun()

// function numPower(num,pow) {
//   var res=1; //return 1 for pow=0
//   for(var i=0;i<pow;i++){
//      res=res*num;
//   }
//   return res;
// }
// console.log(numPower(4,0)); //64
// console.log(numPower(16,2)); //256

// function printPattern(range){
//   for(var i=1;i<=range;i++){
//     var str="";
//     // console.log("i am from i" + i)
//     for(var j=1; j<=i;j++){
//       // console.log("i m form j" + j)
//       str += j+" ";
//     }
// console.log(str)
//   }
// }
// printPattern(8)

// function sum() {
//   var sum = 0 ;
//   for(var i=1; i<=10; i++){
//     console.log("i m from i" + i);
//     console.log("i am from sum" +  sum)
//     console.log(sum +=i)
//   }
// }
// sum()

// function printpattern(range) {
// for (var i=1;i<=range;i++){
//   var str = " ";
//  console.log("i m from i" + i)
//   for(var j=1;j<=i;j++){
//    console.log("i m fro j " + j)
//     // str += j+"H "
//   str += j+" "
//   }
// console.log("i m fro str3" + str)
// }
// }



// // printpattern(4)

// // const car = ["BMW", "Volvo", "SAab", "Ford", "Marcides", "odi"]
// // function Arrayfun(car) {
// //   for(var i=0;i<car.length;i++){
// //     let text = "";
// //     text +=car[i]
// //     console.log(car[i])
// //   }
// // }
// // Arrayfun(car)

// let obj = {
//   Harry: 90,
//   shubham: 30,
//   anu: 45,
//   saloni:60,
//   shivani: 100
// }

// console.log(obj)

// for(let a in obj){
//   console.log(a)
//   console.log(obj[a])
// }

// for( let b of "HARRY"){
//   console.log(b)
// }
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i =0;
// while(i<n){
//   console.log("The number is " + i)
//   i++;
// }

// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
// }


// let n = prompt("enter the value of n");
// n = Number.parseInt(n);

// let i = 10 ;
// do{
//   console.log(i)
//   i++;
// }while(i<n);
//  let n = prompt("enter the value of n");
//  n = Number.parseInt(n);
// let i =1;
// do{
//   console.log(i)
//   i++
// }
// while(i<=n)

// program to display numbers from 1 to 5
// initialize the variable
// let i = 1, n = 10;

// // while loop from i = 1 to 5
// while (i <= n) {

//     console.log(i);
//     i += 2;
// }
// let fr = "SALONI"
// for(let data of fr) {
//   console.log(data)
// }

// for (let i=0; i<fr.length;i++ ){
//   console.log(fr[i])
// }

// let arr = "har\" ".trim(); 

// for(let i=0;i<arr.length; i++){
//   console.log(arr[i])}

//   var name = "HARIDAS"
//   console.log(name.startsWith("H"))
// console.log(name.endsWith("S"))  
// console.log( 
//   data = name.toLowerCase() )
//   console.log(data)

//   console.log( 
//     dataup = name.toUpperCase() )
//     console.log(data)
//     console.log(name)

    let marks = {
      harry: 98,
      rohan: 70,
      aakash: 46,
      hari: 98
    }
    // console.log(marks)
    // for(let i=0; i<Object.keys(marks).length;i++){
    //   console.log("The marks of" + Object.keys(marks)[i] + "are" + marks[Object.keys(marks)[i]])
    // }

    // for (let key in marks) {
    //   console.log("The marks of" + key + "are" + marks[key])
    // console.log(marks[key])
    // }

  // let cn = 4
  // let i
  // while(i != cn){
  //   i = prompt("Enter a number")
  // }

  // function expfun(a ,b){
  //   if(a>10 && b<20) {
  //     console.log("valid age")
  //   }
  //   else {
  //     console.log("age is not valid")
  //   }
  // }
  // expfun(10, 15)
// let class_Student = [91, 82, 73, 63, 54, 43]
// console.log(class_Student)
// for(let i=0; i<class_Student.length; i++){
//   console.log(class_Student[i])
// }

// for(let arr of class_Student){
//   console.log(arr)
// }

// function testNum(c){
//   let result;
//   if(c>0){
//     result = 'positive'
//     console.log("no is positive");

//   } else {
//     result = 'result is negative Possilble'
//     console.log('negative')
//   }
//   console.log(result)
// }

// testNum(-55)