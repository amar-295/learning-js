const scrore = 500

const newScore = new Number(500) // declaring number datatype
// console.log(newScore);

// console.log(newScore.toString().length); //converts the number datatype to String and find its length
// console.log(newScore.toFixed(2)); // output => 500.00 (uses precision value)

const number = 321.3243
// console.log(number.toPrecision(4)); // precision value must be bwtween 1-21

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In')); // Outputm => 10,00,000; en-In => Indian standard; default: US standard


//   ++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4)); // only chnage negative values to positive
// console.log(Math.round(5.7)); // 5.2 => 5
// console.log(Math.ceil(4.3)); // 4.3 => 5
// console.log(Math.floor(4.3)); // 4.3 => 4
// console.log(Math.min(4.3, 6, 5, 4)); 
// console.log(Math.max(4.3, 3, 5 ,3, 8)); 

// console.log(Math.random()); // random will give value between 0 to 1

// console.log(Math.floor(Math.random()*10) + 1); // gives value between 1-9; and +1 is for avoiding 0 case

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min); // min: atleast give 10 value
