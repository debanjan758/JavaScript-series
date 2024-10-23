//  primitive

// 7 types: string, number, boolean, null, undefind, symbols
// Bigint

const score= 100
const scorevalue= 100.3

const outsideTemp= null
let useremail;

// const Id= symbol('123')
// const AnotherId= symbol('123')

// console.log(Id === AnotherId);

const BigNumber= 23456789987654n


// Reference(not primitive)

// Array, Function, Objects

const heros = ['Saktiman' , 'Krish', 'Doga']
let Objects= {
    name: "Debanjan",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof BigNumber);
console.log(typeof myFunction);
console.log(typeof Objects);
console.log(typeof heros);


// *******************************************************************


// stack(primitive), heap(non-primitive)

let myYoutube = "techbecheta"

let anothername = myYoutube
anothername = "chaiwalacoder"

console.log(myYoutube);
console.log(anothername);


