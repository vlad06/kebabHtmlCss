//***** PARTIE MENU OVERLAY *********/
//Listeners pour l'ouverture et la fermeture du menu overlay
document.querySelector(".open-menu-btn").addEventListener("click", openNav);
document.querySelector(".close-menu-btn").addEventListener("click", closeNav);

//fonction pour l'ouverture du menu overlay
function openNav(e) {
  document.querySelector("nav").style.height = "100%";
  document.querySelector(".home-logo").style.visibility = "hidden";
  document.querySelector(".open-menu-btn").style.visibility = "hidden";
  document.querySelector(".close-menu-btn").style.visibility = "visible";
}
//fonction pour la fermeture du menu overlay
function closeNav(e) {
  document.querySelector("nav").style.height = "0%";
  document.querySelector(".open-menu-btn").style.visibility = "visible";
  document.querySelector(".close-menu-btn").style.visibility = "hidden";
  document.querySelector(".home-logo").style.visibility = "visible";
}

