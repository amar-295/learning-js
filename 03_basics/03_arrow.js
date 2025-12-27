const user = {
    username: "Amarnath",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username},  welcome to website `);  // this.username context work in objects 

    }
}

// user.welcomeMessage()
// user.username = "Hitesh"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "hitesh"
//     console.log(this.username); // this.username context work in functions
// }

// chai()

const chai = () => {
    let username = "Amarnath"
    console.log(username);
}

// chai()

// Explicit Return

// const addTwo = (num1, num2) => { 
//     return num1+num2 
// }

//  Implicit Return

// const addTwo = (num1, num2) => num1+num2 
// const addTwo = (num1, num2) => (num1+num2) 

const addTwo = (num1, num2) => ({username: "Amarnath"}) 

console.log(addTwo(3,5));