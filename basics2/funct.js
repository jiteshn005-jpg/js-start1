"use strict";
function sayMyName(){           //can give variable in () also
    console.log("J");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    return 29                        //in ret on 29 is stored as fun returns it
}
//const ret=sayMyName()
//console.log(ret)

function cartprice(...price){        //this ... is used to bundel if we dont know no. of 
    return price                     //values given
}

console.log(cartprice(100,200,300))     //[ 100, 200, 300 ], array so furthger operations can be performed

//if its like (val1,val2, ...price)  then first value in val1, 2nd in val2 and rest all in price as array

const user={                        
    uname: "Jitesh", age: 18,logedin: true, lastlogin: "Monday"
}

function fetch(database){
    return `User ${database.uname} last login was on ${database.lastlogin} `
}

console.log(fetch(user))        //we can give object directly here also