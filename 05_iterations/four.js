const myObject = {
    js: 'javascript',
    py: 'python',
    cpp: 'C++',
    rb: 'Ruby',
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`Shortcut: ${key} for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "c", "python"]

for (const program in programming) {
    // console.log(programming[program]);
}


const map = new Map()

map.set('IN', "India")
map.set('USA', "Uniated States od America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map(key));
}

