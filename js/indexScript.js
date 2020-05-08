var triggerBtn = document.querySelector("#overlay-open");
var overlay = document.querySelector("div.overlay");
var closeBtn = overlay.querySelector(".close-menu-button");

triggerBtn.addEventListener("click", showOverlayMenu);
overlay.addEventListener("click", hideOverlayMenu);

function showOverlayMenu(e) {
  overlay.style.visibility = "visible";
  document.querySelector(".home-logo").style.visibility = "hidden";
  triggerBtn.style.visibility = "hidden";
  closeBtn.style.visibility = "visible";
}

function hideOverlayMenu(e) {
  overlay.style.visibility = "hidden";
  document.querySelector(".home-logo").style.visibility = "visible";
  triggerBtn.style.visibility = "visible";
  closeBtn.style.visibility = "hidden";

}