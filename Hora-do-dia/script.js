function carregar() {
    var msg = document.getElementById("msg")
    var img = document.querySelector("#imagem")
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12 ){
        //Bom dia!
        img.src = `fotomanha.png`
            //document.body.style.background = "#F6DA21"
        document.querySelector(`#corpo`).style.background = `url("manha.jpeg")`
    } else if(hora >=12 && hora <18) {
        //Boa tarde!
        img.src =`fototarde.png`
           //document.body.style.background = "#F69E21"
        document.querySelector(`#corpo`).style.background = `url("tarde.jpg")`
    } else {
        //Boa noite!
        img.src = `fotonoite.png`
       // document.body.style.background = "#4B4A48" 
        document.getElementById(`corpo`).style.background = `url("noite.jpg")`
    } 
}
