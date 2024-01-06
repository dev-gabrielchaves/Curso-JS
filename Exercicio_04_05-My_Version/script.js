function count() {
    var start = Number(document.getElementById('start').value)
    var end = Number(document.getElementById('end').value)
    var increment = Number(document.getElementById('increment').value)
    var counter = document.getElementById('counter')
    if (start >= end && increment > 0) {
        window.alert('The start value must be less than the end value!')
    } else if (start <= end && increment < 0) {
        window.alert('The start value must be greater than the end value!')
    } else if (start <= end && increment > 0){
        counter.innerHTML = 'Counting...<br>'
        while(start <= end){
            counter.innerText += `${start} 👉 ` 
            start = start + increment
        }
        counter.innerText += '🏁'
    } else {
        counter.innerHTML = 'Counting...<br>'
        while(start >= end){
            counter.innerText += `${start} 👉 ` 
            start = start + increment
        }
        counter.innerText += '🏁'
    }
}