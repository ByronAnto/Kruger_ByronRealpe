function detalles(){
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let details = "la Ciudad ingresa: " + city + ", El País Ingresado: " + country;
    
    alert(details); 
    document.getElementById("myp").innerHTML = details;
}