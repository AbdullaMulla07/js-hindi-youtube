// continuation of 32nd VIDEO OF CHAI AUR CODE

const user = {
    username: "Abdulla",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

// Constructor function  ==> yeh (new) hi constructor function hota hai (yeh aapko allow karta hai ke aap ek hi object literal se multiple instances bana sako)
const promiseOne = new Promise()
const date = new Date()

// Constructor function kaise kaam karta hai 
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    return this
}

const userOne = new User("Abdulla", 18, true)
const userTwo = new User("Chaiaurcode", 8, false)
console.log(userOne);
console.log(userTwo);

//1. jaise hi aap new keyword use karenge toh, sabse pehle ek empty object create hota hai(jisko instance bola jata hai)
//2. constructor function call hota hai new keyword ke karan
//3. aapka jo this keyword hai jo bhi arguments aap ne likhe hai oo sab usmein inject hojate hai
//4. aapko miljate hai function ke andar (FINAL)

