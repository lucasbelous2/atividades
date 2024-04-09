function ativ4() {

    var numerosInteiros = []
    
    for(let i = 1; i < 5; i++){
        let numeroIntero = parseInt(prompt("Qual o " + i + " numero"))
        if (!isNaN(numeroIntero)) {
            console.log("a")
            numerosInteiros.push(numeroIntero)
        }        
    }
    numerosInteiros.sort(function(a, b){return b-a});
    alert(numerosInteiros)

}

ativ4()