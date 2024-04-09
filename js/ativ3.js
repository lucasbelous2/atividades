function ativ3() {

    var ganhos = 0.00
    var ganhoBruto = 0.00
    var gastos = 0.00
    var gasto = 0.00

    for(let i = 1; i < 13; i++){
        gasto = parseFloat(prompt("Qual o gasto do " + i + " mes"))
        if (!isNaN(gasto)) {
            gastos += gasto
        }
        ganhoBruto = parseFloat(prompt("Qual o ganho bruto do "+i+" mes"))
        if (!isNaN(ganhoBruto)) {
            ganhos += ganhoBruto
        }
    }

    alert("Gastos anuais : " + gastos)
    alert("Ganho Bruto anual : " + ganhos)
    alert("Saldo financiero : " + (ganhos - gastos))

}
ativ3()