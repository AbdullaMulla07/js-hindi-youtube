// 10th VIDEO OF CHAI AUR CODE

//        Stack and Heap Memory
// 1. Stack Memory (primitive datatype mein use hota hai) --- (jab bhi stack memory use hoti hai toh jo bhi aapne variable declare kara hai uska aapko ek copy milta hai)
// 2. Heap Memory (Non primitive datatype mein use hoti hai) --- (jab bhi heap memory use hoti hai toh jo bhi aapne variable declare kara hai uska aapko ek reference milta hai)

let myYoutubename = "fitnessfoodtube"

let anothername = myYoutubename
anothername = "mulla'schannel"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "user@yahoo.com"

console.log(userOne.email);
console.log(userTwo.email);
