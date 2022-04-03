// can re-declare and re-assign values
// global scope 
var variable1 = 'Hello'
var variable1 = 'wow'

// can't re-declare but re-assign values
// block scope 
let variable2 = "Bye"
variable2 = "heeeeee"

// can't be re-declared and re-assigned
const variable3 = 70

console.log("variable values", variable1, variable2, variable3)

console.log(typeof(variable3))
console.log(typeof(variable2))

var a=10;
var b=2;
var c= a+b;
console.log(c)
console.log(typeof(a))
console.log(typeof "John Doe")
console.log(typeof (3 + 4))


