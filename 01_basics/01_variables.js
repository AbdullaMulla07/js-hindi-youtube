const accountId = 144533
let accountEmail = "abdulla@gmail.com"
var accountPassword = "12345"
accountCity = "Sirsi"

// accountId = 2 //not allowed

accountEmail = "aufhdsnfjsd@gmail.com"
accountPassword = "152455"
accountCity = "Hubli"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
//(table) hum isliye use karte hai kyunki jab humein bhot sare (let) ko chalana hai toh table use karte hai