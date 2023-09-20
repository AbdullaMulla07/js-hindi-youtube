//26th VIDEO OF CHAI AUR CODE

// control or logic flow => pura code conditional base par run hona chahiye (jaise aap login ho toh aap ke paas koi code run hona chahiye, jaise aap logout ho toh aapke paas koi orr code run hona chahiye)

// if statement
const temperature = 41
if(temperature < 40){   // if ko execute karne ke liye condition(()) ki jagah par true ya false rehna chahiye (boolean). orr aap ismein likh bhi sakte hai jaise (2==2)
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}
// <, >, <=, >=, ==, !=, ===, !==

// Shorthand notations
const balance = 1000
if (balance > 500) console.log("test"); //(you can write multiple lines in this form but the readability will be not there (give(,) and than write))

// nesting (kai baar aapko multiple conditions check karni hoti hai)
const balances = 2000
if (balances < 500) {
    console.log("less than 500");
} else if (balances < 750) {
    console.log("less than 750");
} else if (balances < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

//👆real life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
 
if (userLoggedIn && debitCard && 2==2) {  //(&&) statement ke liye 2 baar laga sakte hai
    console.log("Allow to buy course");    
}

if (loggedInFromGoogle || loggedInFromEmail) {      //pipe sign(||) multiple conditions ko test karne ke liye hota hai
    console.log("User logged in");
}