function sayMyname(){
    console.log("D");
    console.log("E");
    console.log("B");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("N");
}

// sayMyname()

function addtwoNumber(number1, number2) {
    // let result = number1 + number2
    // console.log("Debanjan");
    // return result
    return number1+number2
}

const result = addtwoNumber(3, 76)

// console.log("Result: ", result);

function loginUserMessage(username = "DEBU"){
    if(username === undefined){   // usename === undefined or !userame
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Debanjan"))
console.log(loginUserMessage());


