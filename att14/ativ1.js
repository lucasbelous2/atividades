function ativ1() {
    let num1 = document.getElementById("num1").value; 
    let num2 = document.getElementById("num2").value; 
    
    document.getElementById("diff").textContent = num1 - num2;
    document.getElementById("dobro-triplo").textContent = ( num1 * 2 ) + ( num2 * 3 );
    document.getElementById("mult").textContent = num1 * num2;

    if (num1 > num2) {
        document.getElementById("menor-var").textContent = num2;
        document.getElementById("maior-var").textContent = num1;
    } else {
        document.getElementById("menor-var").textContent = num1;
        document.getElementById("maior-var").textContent = num2;
    }

}