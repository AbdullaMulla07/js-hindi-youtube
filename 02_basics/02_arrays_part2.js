// 15th VIDEO OF CHAI AUR CODE
const marvel_heros = ["Thor", "spiderman", "Ironman"]
const dc_heros = ["superman", "flash", "batman"]

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] // 3 dots ka kaam hai ke oo cheezo ko spread kar deta hai 
console.log(all_new_heros);  

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.from("Abdulla"));
console.log(Array.from({name: "Abdulla"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
