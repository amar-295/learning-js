const code = ["js", "ruby", "java", "swift", "cpp"]

// code.forEach(function (val) {
//     console.log(val);
// })

// code.forEach( (item) => {           // call back function
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }

// code.forEach(printMe)

// code.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        language: "JavaScript",
        fileName: "js"
    },
    {
        language: "Java",
        fileName: "java"
    },
    {
        language: "Python",
        fileName: "py"
    }
]

mycoding.forEach( (item, index, obj) => {
    console.log(item, index, obj);  
})