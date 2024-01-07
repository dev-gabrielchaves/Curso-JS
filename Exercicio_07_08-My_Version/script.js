var numbers = []

function add() {
    let num = Number(document.getElementById('txtn').value)
    let sel = document.getElementById('selnum')
    let option = document.createElement('option')
    if (numbers.includes(num) == false && num >= 1 && num <= 100) { // Different than Python in JavaScript that is how you check if a number it is inside an array
        numbers.push(num)
        for (let i = 0; i < numbers.length; i++) {
            option.innerHTML = `${numbers[i]} was added.`
            sel.append(option)
        }
    } else {
        window.alert('The number was already choosen or is not in the range!')
    }
}
function end() {
    let sizeofarray = numbers.length
    let sumofnumbers = 0
    let highestnumber = 0
    let lowestnumber = 0
    for (let i = 0; i < sizeofarray; i++) {
        sumofnumbers += numbers[i]
        if (i==0) {
            highestnumber = numbers[i]
            lowestnumber = numbers[i]
        } else {
            if (highestnumber < numbers[i]) {
                highestnumber = numbers[i]
            }
            if (lowestnumber > numbers[i]) {
                lowestnumber = numbers[i]
            }
        }
    }
    let average = sumofnumbers/sizeofarray
    let info = document.createElement('p')
    info.innerHTML = `· There are ${sizeofarray} number(s);<br>
    · The highest value is ${highestnumber};<br>
    · The lowest value is ${lowestnumber};<br>
    · The sum of all numbers is ${sumofnumbers};<br>
    · The average of all numbers is ${average.toFixed(2)}.`
    info.style.marginTop = '10px'
    info.style.marginBottom = '10px'
    let sec = document.getElementById('sec')
    sec.append(info)
}