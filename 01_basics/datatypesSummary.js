/***************************************************** DATATYPES SUMMARY************************************************************** */

// Primitive (call by value)

// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 44
const scoreValue = 44.5

const isLoggedIN = true
const outsideTemp = null // compiler will give object datatype
let userEmail // or let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

let bigNumber = 32454235462352n // compiler will give undefined datatype

// Non-Primitive (call by reference)

// Array, Objects, Functions

const heroes = ["Ironman", "Hulk", "Captian", "Hawakeye"];

let myObj = {
    name: "amar",
    age: 20
}

const myFunction = function() {
    // console.log("hello JavaScript");  // compiler will give function datatype but it is called function object 
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++ Memories +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Uses in Primitive) and Heap(Uses in Non-Primitive)

let myName = "Instagram"

let anotherName = myName
anotherName = "Meta"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user234@ybl"
}

let userTwo = userOne;

userTwo.email = "user@hotmail.com"

console.log(userOne);
