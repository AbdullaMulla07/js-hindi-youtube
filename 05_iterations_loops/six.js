// continuation of 30th VIDEO OF CHAI AUR CODE

//call back 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => {return num + 10})
// console.log(newNums);

//chaining method
// const newNums = myNums.map().map()
const newNums = myNums 
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)
console.log(newNums);                

