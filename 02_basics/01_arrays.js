// 14th VIDEO OF CHAI AUR CODE

//Array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Ironman"]
const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[0]);

//Array Methods
myArr.push(6) //push values add karata hai
myArr.pop() //pop sirf last ki value ko nikaal deta hai
myArr.unshift(9)
myArr.shift() //shift first ki value ko nikaal deta hai

myArr.includes(9) //includes se hum pata kar sakte hai ke oo value usmein hai ya nai(humein answer true ya false mein mil jayega)
myArr.indexOf(3)

console.log(myArr);

const newArr = myArr.join()
console.log(newArr);

//Slice Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
// slice or splice mein difference yeh hai ke slice mein array mein actual value rahti hai or splice actual array mein value extract kar lete hai