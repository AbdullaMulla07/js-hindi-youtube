// continuation of 29th VIDEO OF CHAI AUR CODE
 
// For each loop
//yeh call back hota isliye hum name nahi dete hai 

const coding = ["js", "ruby", "java", "python", "cpp"]
//1. method
coding.forEach( function (val) {
    console.log(val);
})
//2. method
coding.forEach( (item) => {
    console.log(item);
})
//3. method
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (items) => {
    console.log(items.languageName);
})