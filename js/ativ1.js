function eaiBerg() {
    var soma = 0;
    var continuar = true;
    while (continuar) {
        var num = 0;
        num = parseInt(prompt("insira o numero"))
        if (isNaN(num)) {
            alert("numero nao e valido, insira um numero")
        } else {
            soma += num
            continuar = confirm("deseja continuar?")
        }
    }

    alert("A soma dos numero e: " + soma)
}
eaiBerg();