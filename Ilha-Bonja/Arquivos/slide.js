
cont = 1

window.document.querySelector('#radio1').checked = true

setInterval(passagemauto, 2500)

function passagemauto(){

    if (cont<3){
        if (document.querySelector('#radio'+cont).checked == true){
            cont++
        } else {
            document.querySelector('#radio'+cont).checked = true
        }
    }else{
        cont = 1
    }
}