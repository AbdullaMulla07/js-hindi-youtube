// 21st VIDEO OF CHAI AUR CODE

{} // curly braces hi scope hai yani uss fuction ka scope ya uss if else ka scope
// jo bhi if else ya phir funtion ke andar likha jata hai usse kehte hai block scope orr jo bhi iske bahar likha jata hai usse kehte hai global scope

console.log(addone(5));
function addone(num){
    return num + 1
}


console.log(addtwo(3));
const addtwo = function(num){
    return num + 2
}
// 👆👆 iss upar wale case mein aap declaration se pehle aap usse use nahi kar sakte



