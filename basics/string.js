"use strict";

let str="Hello"
console.log(str+7+"Hi")      //Hello7Hi
console.log(`${str} 7 Hi`)   //Hello 7 Hi     (suggested to use)

let strnew= new String("Hello Hi Hey")         //can use indexing here
console.log(strnew)
console.table([strnew[0],strnew[2],strnew[4]])

console.log(strnew.__proto__);           //show it is object type with key value pair     (  {}  )
console.log(strnew.length)

console.log(strnew.toUpperCase())       //dont change original
console.log(strnew)
console.log(strnew.charAt(1))           //e
console.log(strnew.indexOf("l"))        //2

//slicing
console.log(strnew.substring(0,5))     //no -ve values  (last index igonred)
console.log(strnew.slice(-10,7))       //negative allowed    (last index ignored)

//.trim() //removes front and last spaces
//.replace('to be replaced','new') //replace words

console.log(strnew.includes("Hel"))    //true
console.log(strnew.split(' ',2))       //[ 'Hello', 'Hi' ]   (2 as no of elements in array)
console.log(strnew.split(' ',1))       //[ 'Hello' ]   (1 as no of elements in array)