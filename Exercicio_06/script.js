function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        for (let i = 1; i <= 10; i++) {
            let option = document.createElement('option')
            option.innerHTML = `${n} x ${i} = ${n*i}`
            tab.appendChild(option)
            // AppendChild only accepts Node Objects
        }
    }
}