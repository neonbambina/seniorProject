// toggles the mini menu inside of the photography heading

var drop = document.getElementById('photography');
var catagories = document.getElementById('photography__catagories');

 function toggleMenu(){
   catagories.classList.toggle('shown');
};

drop.addEventListener("click", toggleMenu, false);