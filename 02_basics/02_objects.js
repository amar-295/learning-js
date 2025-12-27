//singleton in object constructors
// Object.create

// object literals

const mySymb = Symbol("key");

const JSuser = {
    name: "Amar",
    "full name": "Amarnath Sharma",
    [mySymb]: "mykey", // symbol declaration in object
    age: 20,
    location: "faridabad",
    email: "612amar@google.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Wednesday"]
}

// console.log(JSuser.name); // Accessing methods
// console.log(JSuser["full name"]);
// console.log(JSuser[mySymb]);

JSuser.email = "amar@chatgpt.com" // changing the value of key in object 
// Object.freeze(JSuser); // locking the object so no one can change key values 

JSuser.greeting = function() {
    console.log("Hello JS user");   
}

JSuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);   
}

// console.log(JSuser.greeting());
// console.log(JSuser.greetingTwo());


// const tinderUser = new Object() // singleton Object 
const tinderUser = {}  // non-singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someagmail.com",
    fullname: {
        firstname: "Amar",
        middlenmae: "nath",
        lastname: "Sharma"
    }
}

// console.log(regularUser);
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // {} using this is good practice

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "firts@gamil.com"
    },
    {
        id: 2,
        email: "sec@gamil.com"
    },
    {
        id: 3,
        email: "third@gamil.com"
    },
]

// console.log(Object.keys(tinderUser)); // give all keys of object 
// console.log(Object.values(tinderUser)); // give all values of object
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);
