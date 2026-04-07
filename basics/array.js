"use strict";

let arr=[1,2,3,4,5]
let arr2= Array(2,3,4,5,6)

console.table([arr[1],arr2[1],typeof(arr),typeof(arr2)])

//.pop()
//.push()
//.unshift()    add starting
//.shift()      remove starting
//.includes( "number/elkemnt" )       give bool(true/false)
//.indexof( "eklement" )

let strarr= arr.join()               //join converts arr in string
console.log(strarr)                  //1,2,3,4,5
console.log(typeof(strarr))          //string


let sli=arr.slice(1,3)               //[2,3]       last vnot included
console.log(sli)
let spli=arr.splice(1,3)             
console.log(spli)                    //[2,3,4]     last included + removes them from arr alaso
console.log(arr)                     //[1,5]       remaining after splice

let merg= arr.concat(arr2)
console.log(merg)
console.log(arr)

let test1=["a","b","c"]
let test2=["d","e"]
let con=test1.concat(test2)
let spr=[...test1,...test2]   // "..." is spread operator which sep each element of arr and join them (use this tio join)
console.log(con)
console.log(spr)

//.flat("level")               used to give single arr from merged arr
//eg [1,2,3,[4,5],6,[7,[8,9]]]  == [1,2,3,4,5,6,7,8,9]

console.log(Array.isArray(test1))
//Array.from()   to convert to array

console.log(Array.of("a","b","c"))    //or pass other variable to make a single array