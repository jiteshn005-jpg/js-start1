"use strict";

//datatype conversion
let marks="39"
console.log(typeof marks) //string
marks= Number(marks)
console.log(typeof marks) //number

//if marks initially was 33jbnc then coverted will NaN and it will show its datatype number as converted successfully

let type=null
console.log(typeof type) //ooblect
type= Number(type)
console.log(typeof type)//number
console.log(type) //converted to 0

//boolean converted,  true to 1 and false to 0


let try1=0
let try2=1
let try3=5
let try4=""
let try5="dneff"
let try6=null
console.table([try1,try2,try3,try4,try5,try6])


try1=Boolean(try1)//false
try2=Boolean(try2)
try3=Boolean(try3)
try4=Boolean(try4)//false
try5=Boolean(try5)
try6=Boolean(try6)//false

console.table([try1,try2,try3,try4,try5,try6])


//.to convert datatype to string use    "String"


console.table([ 1+2,    //3
    1+"2",              //12
    "1"+2,              //12
    "1"+"2",            //12
    1+ 2 + "2",         //32         ==before string number all treated as number
    "1"+ 2+ 2,         //122        ==rule first no string, so all treated as string
    1+ 2+ "2"+ "3"])   //323        ==after first string number all treated as string



    console.table([
        2>3,
        "2">3,
        null>=0,           //inequal;ity like > < >= <= treat null as 0, so true
        null>0,
        null==0            //dont treate null as 0
    ])

//use === to check strictly which also verify same datatype