// 16th VIDEO OF CHAI AUR CODE

//singleton


// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Abdulla",
    [mySym]: "mykey1",
    age: 18,
    location: "Sirsi",
    email: "mulla6361@gmail.com",
    isloggedIn: false,
    lastloginDays: ['Monday', 'Saturday'],
}
console.log(jsUser.email);
console.log(jsUser["email"]); 
                               // in dono ko hi use karna chahiye upar wale ko nahi(it's important)
console.log(jsUser[mySym]);   

jsUser.email = "abdulla2441@gmail.com"
Object.freeze(jsUser)
jsUser.email = "talha4881@gmail.com"
console.log(jsUser);
