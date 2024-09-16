function verificar(){
    var precoE = document.getElementById('precoEtanol').value
    var precoG = document.getElementById('precoGasolina').value
    var resposta = document.querySelector('div#res')
    var comparaComb = (precoE / precoG).toFixed(2)
    var porCentagem = comparaComb * 100
    var msg = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (comparaComb >= 0 && comparaComb <= 0.70) {
        msg = `O Etanol é mais econômico!</br> É mais vantajoso quando está custando até 70% do preço da Gasolina. </br> E a diferença foi de ${porCentagem}%`
        img.setAttribute('src', 'etanol.jpg')
        
    
    } else if (comparaComb > 0.70 && comparaComb <= 3) {
        msg = `A Gasolina é mais econômica!</br> É mais vantajosa quando está custando acima de 70% do preço do Etanol. </br> A diferença foi de ${porCentagem}%`
        img.setAttribute('src', 'gasolina.jpg')
    
    } else {
        msg = 'Erro, valide o valor de entrada e tente novamente!'

    }

    resposta.style.padding = '8px'
    resposta.innerHTML = `${msg}`
    resposta.appendChild(img)
}