let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Debanjan"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()

}

// one()

if (true) {
    const username = "Debanjan"
    if (username === "Debanjan") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++ interesting ++++++++++++++++

addone(5)

console.log(addone(5));

function addone(num){
    return num + 1
}

addtwo(5)
console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}


