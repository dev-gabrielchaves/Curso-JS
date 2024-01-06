function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonascimento = Number(document.getElementById('txtano').value)
    var res = document.getElementById('res')
    if (anonascimento<1900 || anonascimento>ano) {
        window.alert('Cheque os dados!')
    } else {
        var idade = ano - anonascimento
        var fsex = document.getElementsByName('sex')
        var genero = ''
        var img = document.createElement('img')
        img.style.width = '200px'
        img.style.height = '200px'
        img.style.borderRadius = '100px'
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade<10) {
                img.setAttribute('src', 'crianca-m.jpg')
            } else if (idade<25) {
                img.setAttribute('src', 'jovem-m.jpeg')
            } else if (idade<50) {
                img.setAttribute('src', 'adulto-m.jpeg')
            } else {
                img.setAttribute('src', 'idoso-m.jpeg')
            }
        } else {
            genero = 'Mulher'
            if (idade<10) {
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade<25) {
                img.setAttribute('src', 'jovem-f.jpeg')
            } else if (idade<50) {
                img.setAttribute('src', 'adulto-f.jpeg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.append(img)
    }
}