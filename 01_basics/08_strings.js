// 11th VIDEO OF CHAI AUR CODE
const name = "Abdulla"
const repoCount = 50

console.log(name + repoCount + " Value");
// 👆👆 yeh syntax outdated hai or koi likna pasand nahi karta hai👆👆

// agar aap aaj ki date mein aapko likna hai toh aap use karenge Backtick(`)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("Abdulla-hc")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "     Abdulla     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('choudary', 'Mulla'));