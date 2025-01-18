const ram = function() {
    let randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    if (randomNumber > 50) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "red";
    }
    return randomNumber;
}