// Array

const myArr = [1, 2, 3, 4, 5]
const myArr1 = new Array(6, 7, 8, 9, 10)

// console.log(myArr[0]);


// Array Methods

// myArr.push(6)
// myArr.push(7) // insert value at the last of the array
// myArr.pop() // removes the last value in array

// myArr.unshift(0) // insert value at the start in array
// myArr.shift() // removes the first value in array 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);


// Slice(), Splice( manipulates the array )

// console.log("A ", myArr);


// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr );
// console.log(myn2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++*********************

const marvel_heroes = ["thor", "Ironman", "Spiderman"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes) // needs to be stored in a new array

// console.log(marvel_heroes);

// const newArr = marvel_heroes.concat(dc_heroes)
// console.log(newArr);

const allHeroes = [...marvel_heroes, ...dc_heroes] // spread operator

// console.log(allHeroes);

const uglyArr = [1, 2, 3, [4, 5, [6, 7], 8, [9, 10]]]

const beauty_Arr = uglyArr.flat(3) // or infinity
// console.log(beauty_Arr);

// console.log(Array.isArray("Amarnath"));
// console.log(Array.from("Amarnath"));

// console.log(Array.from({name: "Amarnath"})); // interesting

let score1 = 100
let score2 = 300
let score3 = 200
let score4 = 400

console.log(Array.of(score1, score2, score3, score4));
