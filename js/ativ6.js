function ativ6() {
    var letra = ""
    var vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    letra = prompt("qual a letra voce deseja verificar")

    if (letra.length > 1) {
        alert("tamanho da \"letra\" é maior q 1")
        return
    }

    for (var i = 0; i < vogais.length; i++) {
        console.log(vogais[i])
        if (vogais[i] == letra) {
            alert("e uma vogal parabens")
            return
        }
    }
    alert("nao e uma vogal")
}

ativ6()