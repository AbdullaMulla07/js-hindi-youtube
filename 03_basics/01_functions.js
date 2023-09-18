// 19th VIDEO OF CHAI AUR CODE

// Functions
// jo bhi aapne code likha hai 10 line ka ya 20 line ka usko ek package mein band kar diya us package ko aap jitni baar ya phir utha kar uski copies le ja sakte hai

function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("D");
    console.log("u");
    console.log("L");
    console.log("L");
    console.log("A");
}
sayMyName()

//1. method    
    function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    }
    addTwoNumbers(3, 4)

//2. method
    // function addTwoNumbers(number1, number2){
    //     let result = number1 + number2
    //     return result // (ek baat yaad rakhe ke jab aap return lik dete hai uske baad aap koi code ko execute nahi kar payenge)
    // }
    // const result = addTwoNumbers(3, 7)
    // console.log("Result: ", result);

//3. method
    function addTwoNumbers(number1, number2){
        return number1 + number2
    }
    const result = addTwoNumbers(3, 7)
    console.log("Result: ", result);


//if 
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} is loged in`
}
console.log(loginUserMessage("Abdulla"));    

// functions with objects and array
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 500, 1000, 6000));


// object in function
const user = {
    username: "Mulla",
    price: 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// array
const myNewArray = [200, 400, 800, 900]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));