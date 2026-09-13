//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5)
const addTwo = function(num){
    return num + 2
}

let val1
val1 = 5 ?? 10
console.log(val1)
val1 = null ?? 10
console.log(val1)
val1 = undefined ?? 15
console.log(val1)
val1 = null ?? 10 ?? 20
console.log(val1)

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}