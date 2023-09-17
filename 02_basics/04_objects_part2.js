// 17th VIDEO OF CHAI AUR CODE 

const regularUser = {
    email: "some5451@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abdulla",
            lastname: "Mulla"
        }
    }
}
console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj5 = {...obj1, ...obj2}
console.log(obj5);

const users = [
    {
       id: 1,
       email: "google@gmail.com"
    },
    {
        id: 1,
        email: "google@gmail.com"
    },
    {
        id: 1,
        email: "google@gmail.com"
    }
]
users[1].email

console.log(Object.keys(regularUser)); //important aage kaam aayega
console.log(Object.values(regularUser)); //important aage kaam aayega
