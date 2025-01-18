function reset() {
    let details = document.getElementById("details");
    details.style.width = "10px"; 
    details.style.backgroundColor = "yellow"; 
}

function enlarge() {
    let details = document.getElementById("details");
    let currentWidth = parseInt(window.getComputedStyle(details).width); 
    details.style.width = (currentWidth + 10) + "px"; 
}

let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote); // Output: Yes
