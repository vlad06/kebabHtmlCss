// document.addEventListener('DOMContentLoaded', function() {
//   // code
// })

var headerLinks = document.querySelectorAll("entete a");
var olol = document.querySelector(".flex-nav ul > li:nth-Child(3) a");
console.log(olol);
console.log(olol.href);
console.log(headerLinks);

headerLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("fct goto");
    var hrefLink = event.target.href;
    console.log(hrefLink);
    afficher(hrefLink);
  });
});

function afficher(hrefLink) {
  console.log(document.querySelector("main"));
  document.querySelector("main").style.visibility = "hidden";
  document.querySelector("main").innerHTML = '<object type="text/html" data="' + hrefLink + '"></object>';
}