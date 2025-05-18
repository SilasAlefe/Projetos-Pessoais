
var radio = document.querySelector('label.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(proximaImg, 2500)

function proximaImg(){
    cont++

    if (cont>3) {
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}