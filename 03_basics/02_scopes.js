// var c = 300

let a = 300 // global scope
if (true) {
  let a = 10;
  const b = 20;
//   console.log("INNER : ", a); // block scope
  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Amarnath"

    function two() {
        const website = "youtube.com"
        console.log(username);  
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "Amarnath"
    if (username === "Amarnath") {
        const website = " youtube.com"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}

console.log(addTwo(5)); 

const addTwo = function (num) {
    return num + 2
}

