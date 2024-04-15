function calcularValores() {

    var operacao = document.getElementById('operacao').value;
    var primeiroNumero = parseInt(document.getElementById('primeiroNumero').value);
    var segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    var res = 0;

    switch (operacao) {
        case 'add':
            res = primeiroNumero + segundoNumero;
            break;

        case 'sub':
            res = primeiroNumero - segundoNumero;
            break;

        case 'mul':
            res = primeiroNumero * segundoNumero;
            break;

        case 'div':
            res = primeiroNumero / segundoNumero;
            break;
    }

    alert("O resultado é: " + res)

}