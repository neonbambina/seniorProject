var drop = document.getElementById('photography');
var catagories = document.getElementById('photography__catagories');

 function toggleMenu(){
   catagories.classList.toggle('hidden');
};

drop.addEventListener("click", toggleMenu, false);