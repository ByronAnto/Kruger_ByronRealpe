function ram() {
    let luckyNumber = prompt("Por favor, ingresa tu número de la suerte:");

    if (luckyNumber !== null) {
        luckyNumber = parseInt(luckyNumber, 10);

        if (!isNaN(luckyNumber) && luckyNumber === 777) {
            document.getElementById("details").innerHTML = "ESTAS DE SUERTE GASTE 1,000,000 DE DOLARES";
            document.getElementById("details").classList.add("format");

            console.log("Tu número de la suerte es: " + luckyNumber);
        } else {
            document.getElementById("details").innerHTML = "no estas de suerte: " + luckyNumber;
            document.getElementById("details").classList.remove("format");

            alert("Ingresa un numero correcto");
        }
    } else {
        console.log("No ingresaste ningún número.");
        
    }
}