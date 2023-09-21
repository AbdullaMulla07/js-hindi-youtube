// 30th VIDEO OF CHAI AUR CODE

//call back 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//1. method
// const newNums = myNums.filter( (num) => num > 4)
//2. method
const newNums = myNums.filter( (num) => {
    return num > 4
})
console.log(newNums);

//example
const books =[
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 1994},
    {title: 'Book Two', genre: 'Non Fiction', publish: 1995, edition: 1984},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 1694},
    {title: 'Book Four', genre: 'Non Fiction', publish: 2023, edition: 1594},
    {title: 'Book Five', genre: 'Science', publish: 2003, edition: 1954},
    {title: 'Book Six', genre: 'Fiction', publish: 2010, edition: 1993},
    {title: 'Book Seven', genre: 'History', publish: 2010, edition: 2004},
    {title: 'Book Eight', genre: 'Science', publish: 2020, edition: 2005},
    {title: 'Book Nine', genre: 'Fiction', publish: 2000, edition: 1999},
    {title: 'Book Ten', genre: 'Non Fiction', publish: 2005, edition: 2023},
]
let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})
console.log(userBooks);