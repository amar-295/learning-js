// if

// const isUserLoggedIn = true
// const temprature = 43
// if (temprature === 40) {            // "===" => also checks datatype
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }


// <, >, <=, >=, ==, !=, 

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`); 
// }

//  short hand notation; (Implicit scope)

const balance = 1000

// if (balance > 500) console.log("Implicit Scope"); // not good practice

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 00");   
// } else {
//     console.log("less than 1200");   
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
     console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged in");
}