var timenow = new Date()

var hournow = timenow.getHours()

console.log(`The time is ${hournow}.`)

if (hournow < 12) {
    console.log('Good Morning!')
} else if (hournow > 13 && hournow < 18) {
    console.log('Good Afternoon!')
} else {
    console.log('Good evening!')
}