"use strict"; // treat all JS as newer version

//alert(3 + 3) // we are using nodejs , not browser

console.log( 3 + 3 )

console.log("Hitesh")

/* Types of Data Types

1. primitive data type

number => 2 to 53 or 52 power
bigint
string => ""
boolean => true/false
null => standalone value
undefined =>
symbol => unique

2. non primitive data type(Reference)

Array
objects
functions

*/

console.log(typeof undefined) //undefined


console.log(typeof null); //object

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)