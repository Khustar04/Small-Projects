/*
create a faulty calculator using javascript.

this faulty calculator does following:
1. It takes two numbers as input form the user 
2. It performs wrong operation as follwos:

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operation 10% of the times.

*/

let randvalue = Math.random()
 let a = prompt("enter the first number");
 let b = prompt("enter the oprations");
 let c = prompt("enter the second number");


 let operation = {
        
    "+": "-",
    "*": "+",
    "-": "/" ,
    "/": "**",

 }



if(randvalue > 0.1 ){
 console.log(`this is your result: ${a} ${b} ${c}`)
    alert(`this is your result: ${eval(`${a}${b}${c}`)}`)



}  else{

b = operation[b]
alert =(`this is your result: ${eval(`${a}${b}${c}`)}`)


}


// // const prompt = require("prompt-sync")();
// let firstNum = prompt("enter first number: ");
// let secondNum= prompt("enter second number: ");;
// let counter = Math.random();
// function wellCalculator(x,y) {
//     console.log("Addition: ",(+x)+(+y));
//     console.log("Substract: ",x-y);
//     console.log("Multiply: ",x*y);
//     console.log("Divide: ",x/y);
// }
// function faultyCalculator(x,y) {
//     console.log("Addition: ",x-y);
//     console.log("Multiply: ",(+x)+(+y));
//     console.log("Substract: ",x/y);
//     console.log("Divide: ",x**y);
// }
// console.log(firstNum);
// console.log(secondNum);
// if(counter>0.1){
//     wellCalculator(firstNum,secondNum);
   
// }else{
//     faultyCalculator(firstNum,secondNum);
// }











