let score = "114"

console.log(typeof score)
//convert to number
let scoreNumber = Number(score)
console.log(scoreNumber)
console.log(typeof(scoreNumber))

let scoreTwo = "114abc"
let scoreNumber2 = Number(scoreTwo)

console.log(scoreTwo)
console.log(typeof scoreNumber2)

console.log("--------------------")
let Result = true
console.log(typeof Result)
let ResultBoolean = Number(Result)
console.log(typeof ResultBoolean)
console.log(ResultBoolean)

console.log("----------------------------")
let temp = null
console.log(typeof temp)
console.log(temp)
let temp2 = Number(temp)
console.log(typeof temp2)
console.log(temp2)

console.log("----------------------------")
let marks
console.log()
let marks2 = Number(marks)
let marks3 = String(marks)
console.log(typeof marks2)
console.log(marks2)
console.log(typeof marks3)
console.log(marks3)
/* 
"114" - converted to Number datatype and output was 114
"114abc" - converted to Number datatype but output was nan->not a number 
boolean -> Number
1- true
0- false

null -> Number > 0
undedined -> Number > nan
undefined -> string > undefined
*/
