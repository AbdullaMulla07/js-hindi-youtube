// continuation of 30th VIDEO OF CHAI AUR CODE

//Reduce
const myNums = [1, 2, 3]
// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemname: "Js course",
        price: 2999
    },
    {
        itemname: "py course",
        price: 999
    },
    {
        itemname: "m/d course",
        price: 5999
    },
    {
        itemname: "Data Science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)
console.log(priceToPay);

