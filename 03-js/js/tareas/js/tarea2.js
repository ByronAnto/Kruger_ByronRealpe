function sum(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    console.log(numero1," ", numero2);
    let resultado = numero1 + numero2;
    
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    alert(resultado);
}

// hacer el ejercicio hasta el viernes