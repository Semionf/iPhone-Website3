var changeColor = "red";
function changeColor() {
  if (changeColor == "red") {
    changeColor = "green";
  } else {
    changeColor = "red";
  }
  document.getElementById("total").bgc = changeColor;
}
