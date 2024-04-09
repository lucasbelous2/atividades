function ativ7() {

    var picole = [
        {nome:"chocolate", preco:1.50},
        {nome:"morangeo", preco:2.50},
        {nome:"creme", preco:2.50},
        {nome:"manga", preco:3.20},
        {nome:"melancia", preco:3.40},
        {nome:"vanilla ice", preco:3.00},
        {nome:"ceu azul", preco:3.60},
        {nome:"brownie", preco:4.00},
        {nome:"hawaiano", preco:5.00}
    ]

    var inpute = prompt("qual o sabor que voce deseja procurar")
    inpute.toLowerCase

    for (var i = 0; i < picole.length; i++) {
        if (picole[i].nome == inpute) {
            alert("O sabor " + picole[i].nome + " custa " + picole[i].preco)
            return
        }
    }

    alert("sabor " + inpute + " nao encontrado")
}
ativ7()