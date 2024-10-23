const name = "debanjan"
const repoCount = 50

console.log(name + repoCount + " valueee");

console.log(`Hello my name is ${name} My repo Count is ${repoCount}`);

const gameName = new String('Debanjan-guru');

console.log(gameName[3]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(7));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-7 , 4)
console.log(anotherString);

const newStringOne = "    Debanjan    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://github.com/debanjan758/JavaScript-series/blob/main/01_basics/05_strings.js'
console.log(url.replace('20%', '-'));

console.log(url.includes('debanjan'));

console.log(gameName.split('-'));
