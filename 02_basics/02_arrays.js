const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anothor_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anothor_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Debanjan"));
console.log(Array.from("Debanjan"));
console.log(Array.from({name:"Debanjan"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
