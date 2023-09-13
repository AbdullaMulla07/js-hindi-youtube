let score = "33abc" //- (sab se pehle aapko iska type check karna hoga kyunki kai baar aap backend mein kaam karrahe hote hai )

//there are 2 types to check type of any datatypes
console.log(typeof score);
console.log(typeof(score));

         // CHEEZO KO NUMBER MEIN CONVERT KARNA
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33 (jab aap number ko convert karte hai 33 ko toh oo easily convert hojata hai 33 mein)
// "33abc" => NaN (yeh convert nahi hote hai, or humein dete hain NaN(NotaNumber))
// true => 1, false => 0 (true convert hojati hai 1 mein, false convert hojati hai 0 mein)


          // CHEEZO KO BOOLEAN MEIN CONVERT KARNA
let isLoggedIn = 1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);
// 1 => true (jab aap 1 likte hai toh oo boolean mein true convert hota hai).  // 0 => false (jab aap 0 likte hai toh oo boolean mein false convert hota hai)
// "" => false (jab aap khaali "" likte hai toh oo boolean mein false convert hota hai)
// "Abdulla" => true (jab aap name ya phir string likte hai toh oo boolean mein true convert hota hai)


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);