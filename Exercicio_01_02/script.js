function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`
    if (hora>=0 && hora<12) {
        document.body.style.background = '#fbdd66'
        imagem.src = 'manha.jpg'
    } else if (hora>=12 && hora<18) {
        document.body.style.background = '#db9872'
        imagem.src = 'tarde.jpg'
    } else {
        document.body.style.background = '#8c71ab'
        imagem.src = 'noite.jpg'
    }
}
