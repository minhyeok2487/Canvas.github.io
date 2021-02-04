const hide = document.getElementById("hide");


function HideShow(){
  var content = document.getElementById("content");
  var jsColors = document.getElementsById("jsColors");
  if (jsColors.style.display === "none") {
    jsColors.style.display = "block";
  } else {
    jsColors.style.display = "none";
  }
}


if (hide) {
  hide.addEventListener("click", HideShow);
}