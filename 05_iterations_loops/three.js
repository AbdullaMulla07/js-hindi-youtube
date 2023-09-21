//29th VIDEO OF CHAI AUR CODE 


// for of

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`For every one ${greet}`);
}

 
//Maps => it's unique

//in array
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
console.log(map);

for (const [key, value] of map) {
    console.log(key, '=>', value);
}

//in object
const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


