function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = document.getElementById("txtano")
    var resultado = document.getElementById("resultado")
    if (nascimento.value.length == 0 || nascimento.value.length != 4 || nascimento.value > ano) {
        //length conta quantos caracteres eu digitei!
        alert(`[ERRO] Verifque os dados e tente novamente!`)
    } else {
        var sexo = document.getElementsByName(`sex`)
        var idade = ano - Number(nascimento.value)
        var genero = ``
        var img = document.createElement(`img`) //cria uma tag img
        img.setAttribute("id" , "foto") //criei um id pra tag imamgem, id foto
        if (sexo[0].checked) {
            genero = `Homem`
            
            if(idade >= 0 && idade <=10) {
            //Criança
            img.setAttribute("src","bebeH.png")
        } else if (idade <19 && idade >10) {
            //Jovem
            img.setAttribute("src","jovemH.png")
        } else if (idade >=19 && idade <50){
            //Adulto
            img.setAttribute("src","adulto.png")
            
        } else {
            //Idoso
            img.setAttribute("src","idoso.png")
        } 
    }else if (sexo[1].checked) {
            genero = `Mulher`
            if(idade >= 0 && idade <=10) {
                //Criança
                img.setAttribute("src","bebeM.png")
            } else if (idade <19 && idade >10) {
                //Jovem
                img.setAttribute("src","jovemM.png")
            } else if (idade >=19 && idade <50){
                //Adulto
                img.setAttribute("src","adulta.png")
                
            } else {
                //Idoso
                img.setAttribute("src","idosa.png")
            }
        } 
        resultado.style.textAlign = `center`
        resultado.innerHTML =`<p>Detectamos ${genero} de ${idade} anos.</p>`
        resultado.appendChild(img) //adiciona um elemento, no caso o elemento img
    }
}