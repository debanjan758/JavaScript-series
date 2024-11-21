// singleton

// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Debanjan",
    age: 20,
    location: "Kolkata",
    email: "deanjansen32@gmail.com",
    isLoggedin: false,
    [mySym]: "myKey1",  // []  uses for symbol
    lastLoggedin: ["Monday", "Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);

JsUser.email = "deanjansen32@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "deanjansen32@gmail.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Helllo js User");
        
}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

