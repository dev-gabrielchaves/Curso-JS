// Trying the usage of functions in JavaScript

function odd_or_even(num) {
    if (num%2==0) {
        return console.log(`${num} is even!`)
    } else {
        return console.log(`${num} is odd!`)
    }
}

odd_or_even(5)

// JavaScript is a functional language, that allows us to save function into variables

let v = function(num) {
    return num*2
}

console.log(v(5))