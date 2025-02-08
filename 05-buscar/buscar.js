const search = () => {
  const filter =
      document.getElementById("userInput").value.toUpperCase();
  const li =
      document.getElementById("countryUl").getElementsByTagName("li");
  for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName("a")[0];
      const value = a.textContent || a.innerText;
      if (value.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      }
      else {
          li[i].style.display = "none";
      }
  }
}