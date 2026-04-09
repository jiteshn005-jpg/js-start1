"use strict";


//object literal
const sym= Symbol('Symb')

const user={                        //opbject
    uname: "Jitesh", age: 18, [sym]: "idk", logedin: true, lastlogin: "Monday"
}


/*
console.log(user['age'])       //should not use " . " method
console.log(typeof(user))
console.log(typeof(user[sym]))

user.age=17
user.id=27

Object.freeze(user)   //no no any changes can be done outside the user
console.log(user['age'])

console.log(user)
*/


const objx={
    a:1, b:2, c:3
}

// const obj_mer={user,objx}

//const obj_mer= Object.assign({},user,objx)    //here {} is used as empty obj, in assign all values copy in 1st
                                              //so here 1st is given empty so that all that dont copy in user

const obj_mer= {...user,...objx}           //no need of {}, (recommended)  " ... "  seperator

/*
console.log(obj_mer)
console.log(Object.keys(obj_mer))
console.log(Object.values(obj_mer))
console.log(Object.entries(obj_mer))       //give key ans value as array
*/


//user.hasOwnProperty('uname')   if key than true else false

//if i need a key from object again and again then use:
const {lastlogin: llog}=user                //make lastlogin as llog
console.log(llog)                           //use the shortcut again and again