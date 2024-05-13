function ativ2() {
    let salario = parseInt(document.getElementById("salario-bruto").value);
    let porcentagem = 0.000;
    let valorInss = 0.00;

    if (salario <= 1000) {
        porcentagem = 0.08;
    } else if (salario <= 1500) {
        porcentagem = 0.085;
    } else {
        porcentagem = 0.09;
    }

    valorInss = salario * porcentagem;

    document.getElementById("valor-inss").textContent = valorInss;
    document.getElementById("salario-liquido").textContent = salario - valorInss;

}