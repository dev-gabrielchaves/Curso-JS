let list = [1, 3, 2, 4, 8, 2]

list[10] = 2 // When doing this I am increasing the length of the array but leaving 4 empty spaces

console.log(list) // Output -> [ 1, 3, 2, 4, 8, 2, <4 empty items>, 2 ]

list = [1, 3, 2, 4, 8, 2]

list.push(15) // Adds the element to the end of the list

list.push(37)

console.log(list)

console.log(list.length) // Shows the length of the array

list.sort() // Sorts the elements inside an array, ***but notice that by default, the sort() function sorts values as strings

console.log(list) // Output -> [1, 15, 2, 2, 3, 37, 4, 8]

console.log(list.indexOf(2)) // Shows the index where the element appears for the first time -> Output -> 2

// Using for to iterate through the array
for (let counter = 0; counter < list.length; counter++) {
    console.log(`The ${counter+1}° number of the list is: ${list[counter]}`)
}