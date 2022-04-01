const prompt = require('prompt-sync')();

// const num1 = prompt("Enter First Number : ");
// const num2 = prompt("Enter Second Number : ");
// let largest;
// if (num1 > num2){ 
//     largest = num1;
// }else{
//     largest = num2;
// } 
// console.log("The largest number is " + largest);

const num1 = prompt("Enter First Number : ");
const num2 = prompt("Enter Second Number : ");
const num3 = prompt("Enter third number: ");
// let largest;

// if(num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }

const largest = Math.max(num1, num2, num3);

console.log("The largest number is " + largest);