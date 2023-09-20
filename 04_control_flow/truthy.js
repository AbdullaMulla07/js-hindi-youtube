// continuation of 26th VIDEO OF CHAI AUR CODE

const userEmail = []
if (userEmail) {
    console.log("Got user email.");    
} else {
    console.log("Don't have user email.");
}

//Falsy values
// false, 0, -0, BigInt(mein 0n likha jata hai) 0n, ""(empty string), null, undefined, NaN

//Truthy values
// "0", 'false', " ", [], {}, function(){}, 

//how to detect empty array and object 

const UserEmail = []
if (UserEmail.length === 0) {
    console.log("Array is empty");    
}

const emptyobj = {}
if (Object.keys(emptyobj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Opera0tor (??): null, undefined(saari kahani inke upar hi teeki hui rahti hai)
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")