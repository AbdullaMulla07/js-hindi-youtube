// 23rd VIDEO OF CHAI AUR CODE

// This keyword => Current context(values) ko refer karta hai


const user = {
    username: "Abdulla",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website.`);
    }
}
user.welcomeMessage()
user.username = "Mulla"
user.welcomeMessage()
console.log(this);

//Arrow function = () => {}

//1. method
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//2. method
// const addTwo = (num1, num2) => num1 + num2

//3. method
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));