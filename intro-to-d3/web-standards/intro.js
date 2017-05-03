//DOM API
var clickMe = document.getElementById("click-me");
clickMe.onclick = function () {
  if (this.style.backgroundColor) {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = "red";
  }
}

d3.selectAll(".hover-me")
  .on("mouseover", function () {
  this.style.backgroundColor = "yellow";
  });
  .on("mouseleave", function () {
  this.style.backgroundColor = "";
  });
