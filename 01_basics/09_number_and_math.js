// 12th VIDEO OF CHAI AUR CODE

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2)); // used during making e-commerce website or app 

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //(abs ka kaam hai ke oo negative(-) ko positive(+) mein badalta hai)
console.log(Math.round(5.4));
console.log(Math.ceil(4.2)); //(agar zara sa bhi 4 se ya phir first number ho toh next number mein convert karde ga )
console.log(Math.floor(4.9)); //(floor ceil ka ulta karta hai)
 
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
