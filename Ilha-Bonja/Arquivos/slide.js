
document.querySelector('#radio1').checked = true
setInterval(passagemauto, 2500)

function passagemauto(){
    cont = 1

    if (querySelector(`#radio`+cont).checked = true){
        cont++
    } else{
        querySelector(`#radio`+cont).checked = true
        cont = 1
    }
}