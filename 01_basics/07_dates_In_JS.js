 let myDate = new Date();

//  console.log(myDate);
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toTimeString());
//  console.log(myDate.toUTCString());
 
// Date datatype is Object;

// const createDate = new Date(2025, 5, 26) // only date value
// console.log(createDate.toDateString());

// const createDate = new Date(2025, 5, 26, 12, 5) // date with value
// console.log(createDate.toLocaleString());

const createDate = new Date("05-29-2025") // date format
// console.log(createDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // Output => 1766729788685(milliseconds of this)
// console.log(createDate.getTime());
// console.log(Math.floor(myTimeStamp/1000)); // to convert milliseconds into seconds

let newDate = new Date()

console.log(newDate);
