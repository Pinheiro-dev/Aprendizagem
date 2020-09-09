function contar() {
    var inicio = document.querySelector("#inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")

    resultado.innerHTML = "Contando: "

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)



    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Dados incorretos!")
        resultado.innerHTML = "Digite os dados Corretamente."
    } else if (passo.value == 0 && i < f) {
        alert(`Passo foi alternado à 1 para que seja possível realizar a contagem!`)
        p = 1

        for (var c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449} `
        }
    } else if (passo.value == 0 && i > f) {
        p = 1
        alert(`Passo foi alterado à 1 para que seja possível realizar a contagem!`)
        for (var c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c} \u{1F449} `
        }

    } else if (i > f) {
        for (var c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c} \u{1F449} `
        }
    } else {
        for (var c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449} `
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}