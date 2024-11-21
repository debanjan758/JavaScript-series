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
// console.log(loginUserMessage());

function calculatecartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculatecartprice(200,400,500))

const user = {
    username: "Debanjan", 
    price: 1999
}

function handleonject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleonject({
    username: "Sam",
    price: 399
})


const mynewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[3]
}

// console.log(returnSecondvalue(mynewArray));
console.log(returnSecondvalue([200, 400, 500, 6000]));

