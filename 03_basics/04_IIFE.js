// 24th VIDEO OF CHAI AUR CODE

// Immediately Invoked Function Expressions(IIFE) => is a function that is executed as soon as it is defined.
// global scope ke pollution se problem hoti hai kai baar toh jo uss global scope ke variables ke pollution ko hatane ke liye IIFE ka use kiya

//named IIFE👇
(function chai(){
    console.log(`DB CONNECTD`);
})();

//IIFE👇
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Abdulla")

