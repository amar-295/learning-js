function sayMyName() {
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("R");
}

// sayMyName() // sayMyName => reference; sayMyName() => execution

// function operations(number1, number2) {
//     console.log(number1 + number2);
     
// }

function operations(number1, number2) {
//    let result = number1 + number2
//    return result  
    return number1 + number2
}

const result = operations(4, 6)

// console.log("Result : ", result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Enter a username");   
    } 
        return `${username} just logged in`   
}
 
// console.log(loginUserMessage("Amar"));

function calculateCartPrice(...num1) {   
    return num1
}

// console.log(calculateCartPrice(300, 200, 100));

const user = {
    username: "Amar",
    price: 100
}

function handleObjec(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObjec({
    username: "sam",
    price: 399
})

const arr = [200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(arr));
console.log(returnSecondValue([23, 34, 54, 45]));
