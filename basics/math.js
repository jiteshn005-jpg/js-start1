"use strict";

const score= Number(256.84)          //numaber
const str= score.toString()      //string
console.log(score.toFixed(2))
console.log(score.toPrecision(4))

console.table([typeof(score),typeof(str)])



//               maths

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));      //5
console.log(Math.ceil(4.2));       //5
console.log(Math.floor(4.9));      //4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());           //always b/w 0-1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)