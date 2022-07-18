let home = document.getElementById("home");
let about = document.getElementById("about");
let works = document.getElementById("works");

let active = ["home", "about", "works"];
let i = 0;

function menu() {
   document.getElementById("menuIcon").classList.toggle("change");
   document.getElementById("menu").classList.toggle("showMenu");
   let container = document.getElementsByClassName('showMenu')[0];
   container.addEventListener('click', function( event ) {
      if (event.target.className == 'home') {
         home.style.display = "flex";
         home.style.height = "100%";
         about.style.display = "none";
         works.style.display = "none";
         i = 0;
      } else if (event.target.className == 'about') {
         about.style.display = "flex";
         about.style.height = "100%";
         home.style.display = "none";
         works.style.display = "none";
         i = 1;
      } else if (event.target.className == 'works') {
         works.style.display = "flex";
         works.style.height = "100%";
         home.style.display = "none";
         about.style.display = "none";
         i = 2;
      }
      document.getElementById("menuIcon").classList.remove("change");
      document.getElementById("menu").classList.remove("showMenu");
   });
}    



document.addEventListener('wheel', scrollHandler);
function scrollHandler(e) {
   if(e.deltaY == -100) {
      if (active[i] == "about") {
         home.style.display = "flex";
         home.style.height = "100%";
         about.style.display = "none";
         i--;
      } else if (active[i] == "works") {
         about.style.display = "flex";
         about.style.height = "100%";
         works.style.display = "none";
         i--;
      }
   }else if(e.deltaY == 100) {
      
      if (active[i] == "home") {
         about.style.display = "flex";
         about.style.height = "100%";
         home.style.display = "none";
         i++;
      } else if (active[i] == "about") {
         works.style.display = "flex";
         works.style.height = "100%";
         about.style.display = "none";
         i++;
      }
   }
}   

