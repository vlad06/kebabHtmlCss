
var btnNext = document.querySelector(".next");
var btnPrevious = document.querySelector(".previous");
var thumbImages = document.querySelectorAll(".column>img");

btnNext.addEventListener("click", function() {
  showCells(selectedCell += 1);
});

btnPrevious.addEventListener("click", function() {
  showCells(selectedCell -= 1);
});

thumbImages.forEach(image => {
  image.addEventListener("click", function(event) {
    showCells(selectedCell = event.target.alt.slice(-1));
  });
});

// Initialisation du carousel
var selectedCell = 1;
showCells(selectedCell);

// fonction permettant d'afficher l'image sélectionnée comme image principale
function showCells(n) {
  var cells = document.querySelectorAll(".cell");
  var thumbs = document.querySelectorAll(".demo");
  var captionText = document.getElementById("caption");

  if(n > cells.length) {
    selectedCell = 1;
  }

  if(n < 1) {
    selectedCell = cells.length;
  }

  for(var i = 0; i < cells.length; i++) {
    cells[i].style.display = "none";
  }

  for(var i = 0; i < thumbs.length; i++) {
    thumbs[i].className = thumbs[i].className.replace(" active", "");
  }

  cells[selectedCell - 1].style.display = "block";
  thumbs[selectedCell - 1].className += " active";
  captionText.innerHTML = thumbs[selectedCell - 1].alt;

}