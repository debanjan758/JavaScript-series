// const tinderuser = new Object()
const tinderuser= {}

tinderuser.id = "123abc";
tinderuser.name= "Debanjan Sen";
tinderuser.isLoggedin= "false";

// console.log(tinderuser);

const regularUser= {
    email: "deanjansen32@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Debanjan",
            lastname: "Sen"
        }
        
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {4: "a", 5: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj3.obj1);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

const course = {
    coursename: "js in hindi",
    price: "899",
    courseinstructor: "Debanjan"
}

const {courseinstructor: teacher} = course
console.log(teacher);

// {
//     "name": "Debanjan",
//     "coursename": "js in hindi",
//     "price": "free"
// }

{
    
}