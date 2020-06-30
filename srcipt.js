
function openNav() {
  document.getElementById("mobile_nav").style.width = "100%";
  var bodyElement = document.querySelector("body");
  bodyElement.classList.add("overflow-active");

}
function closeNav() {
  document.getElementById("mobile_nav").style.width = "0";
  var bodyElement = document.querySelector("body");
  bodyElement.classList.remove("overflow-active");

}
