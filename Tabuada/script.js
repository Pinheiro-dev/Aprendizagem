function calcular() {
    var numero = document.getElementById(`numero`)
    var n1 = Number(numero.value)
    var n2 = 1
    tabuada.innerHTML = ``

    if (numero.value.length == 0) {
        alert(`[ERRO] Digite um número!!`)
    } else {
        do {
            var resultado = n1 * n2
            tabuada.innerHTML += `<option> ${n1} X ${n2} = ${resultado} </option>`
            n2++
        } while (n2 <= 10)
    }
}