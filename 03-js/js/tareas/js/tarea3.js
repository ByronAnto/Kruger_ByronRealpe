function prom(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let numero3 = parseInt(document.getElementById("numero3").value);
    console.log(numero1," ", numero2, " ", numero3);
    let prome = (numero1 + numero2 + numero3) / 3;
    
    document.getElementById("myp").innerHTML = "Resultado: " + prome;
    alert(prome);
}

// hacer el ejercicio hasta el viernes