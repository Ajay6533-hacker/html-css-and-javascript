console.log("hello world");
var num1 = 45;
var num2 =  55;
console.log("sum of num1 and num2 is = " +(num1+num2));
 
let number1 = 5;
let number2 = 2;
console.log("The value of number1 and number2 is "+ (number1-number2))
console.log("The value of number1 and number2 is "+ (number1+number2))
console.log("The value of number1 and number2 is "+ (number1/number2))
console.log("The value of number1 and number2 is "+( number1 % number2))
console.log("The value of number1 and number2 is "+ (number1*number2))
console.log("The value of number1 and number2 is "+ (number1**number2))

console.log(number1++)        //  Before ++ operators value not change so output is same(5) 
console.log(number1)        // here output is 6
console.log(++number1)        //output is 7

console.log(--number2);      // output is 1
console.log(number2)        // output is 1


// unary operator  = It has single operands like - (x = -x)
// Binary operators = has binary operands like - ( c=45+3)

// String = The string object is used to represent and manipulate a sequence of characters.

var str1 = "my name is Ajay"
console.log(str1)
var str2 = 'Ajay here,"I have a car" '

//  $ Symbol is used here to pick that particular string from the varable.
var str3 = `${str1} and I am a programmer`        // left top key in keyboard
console.log(str3)

let  num4 = 34;
let  num3 = 65;
console.log(`Sum of num4+num3 is ${num4+num3}`)


let y = new String("this");
console.log(y)
document.getElementById("contents").innerHTML=<h3>This is my heading 3</h3>
