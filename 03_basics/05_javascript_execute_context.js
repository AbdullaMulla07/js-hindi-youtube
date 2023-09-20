// 25th VIDEO OF CHAI AUR CODE

//Global execution context
//Function execution context
//Eval execution context

//CODE EXECUTION PHASE
//1. Memory Creation Phase => sirf aap ke variables jo aap ne declare kara hai unke liye jage locate hoti hai, unko execute nahi kiya jata 
//2. Execution Phase => execute karna mathematical equations etc.....


//*************************************************************************************//
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(5, 2)
console.log(result1);
console.log(result2);

//👆//1.global execution(environment) => gobal execution se run hota hai chahe oo kitna bada code ho. or usko sabse pehle THIS ke andar locate kiya jata hai
//2.Memory certain phase => saare variables ko ikhatta kiya jata hai orr unn sab ko rakha jata hai apne paas
// jaise: val1 => undefined
//        val2 => undefined
//        addNum => defination (line no.15,16,17,18 ismein chala gaya) 
//        result1 => undefined
//        result2 => undefined
//👆👆 isse kehte hai first cycle orr yeh hoga hi hoga
//3.Execution phase 
// jaise: val1 => 10
//        val2 => 5
//        addNum => (line no.15,16,17,18 iss ka koi kaam hi nahi hai kyunki uski defination aap ne hold karke rakhdi hai)
//        addNum line 19 ka => ek imaginary box mein new variable enviroment + execution thread (important note: sara kaam hone ke baad ye delete hojata hai)
//                                    ↓                               ↓
//                           memory phase                      execution context
//                         val1 => undefined                    num1 => 10
//                         val2 => undefined                    num2 => 5
//                         total => undefined                   total => 15
//        line 20 ke liye bhi upar jaise hi hota hai