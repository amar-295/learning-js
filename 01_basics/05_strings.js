const name = "Amarnath"
const repoCount = 2 

// console.log(name + repoCount + " value"); //old way

// console.log(`My name is ${name} and my repo count is ${repoCount}.`); //Modern way with backticks and injecting variables ${variableName}

const gameName = new String('BGMI-Player-Id') // another way for declaring String 

// console.log(gameName[0]); // B is at )th position of the string
// console.log(gameName.__proto__); // prototype => object 

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('G'));

const newName = gameName.substring(0, 4); // substring don't takes negative value
// console.log(newName);

const anotherName = gameName.slice(-7, -1); // slice can take both positive and negaive value
// console.log(anotherName);

const newString = "    Player     "
// console.log(newString);
// console.log(newString.trim());

const url = "https://hitesh/hitesh%20choudhary"

// console.log(url.replace('%20', '-'));
// console.log(url.includes('player'));

console.log(gameName.split('-')); // for coverting string into array
