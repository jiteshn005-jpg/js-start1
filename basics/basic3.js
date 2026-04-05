"use strict";

//datatypes

const idk="123"
const idk2="123"

const idk3=Symbol("123")
const idk4=Symbol("123")

console.table([idk==idk2, idk3==idk4])
// symbol make the same also different

let arr=["a","b","c"]      //array

let obj={                  //object
    a: 1,
    b:2,
    c:3
}

console.log(arr)
console.log(obj)

let myfun=function(){
    console.log("My World")
}

myfun()