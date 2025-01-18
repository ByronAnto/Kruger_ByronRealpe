const reset = () => {
    let details = document.getElementById("details");
    details.style.width = "10px";
    details.classList.add("format");
    document.body.style.backgroundColor = "blue"; 

}

const enlarge = () => {
  
  let details = document.getElementById("details");
  let currentWidth = parseInt(window.getComputedStyle(details).width);
  details.style.width = (currentWidth + 10) + "px";

  console.log(currentWidth);
  if (currentWidth >= 500) {
      document.body.style.backgroundColor = "brown"; 
  } else {
      document.body.style.backgroundColor = "blue"; 
  }
  
}
