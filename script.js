var navbarItems = document.querySelectorAll('.the_li');
navbarItems.forEach(function (item) {
   item.addEventListener('click', function () {
      navbarItems.forEach(function (navItem) {
         navItem.classList.remove('clicked');
      });
      item.classList.add('clicked');
   });
});




document.addEventListener('DOMContentLoaded', function () {
   var typed = new Typed(".auto_typed", {
      strings: ["HTML", "Css", "JavaScript", "Bootstrap"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
   });
});
document.addEventListener('DOMContentLoaded', function () {
   var typed = new Typed(".auto_typed2", {
      strings: ["WebDevloper", "HTML", "Css", "JavaScript", "Bootstrap"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
   });
});

// for responsive navbaaar

document.getElementById('mobile-menu').addEventListener('click', function () {
   let navbar = document.querySelector('.nav_item');
   let li = document.querySelectorAll('.the ul li')
   if (navbar.style.display === 'block') {
      navbar.style.display = 'none';

   } else {
      navbar.style.display = 'block';
   }
});


// skills loader
let num = document.querySelectorAll('#number');
let counter = 0;

setInterval(() => {
   num.forEach(element => {
      if (counter == 95) {
         clearInterval();
      }
      else {
         counter += 1;
         element.innerHTML = `${counter}%`
      }
   });
}, 20);



const scrollers = document.querySelectorAll('.scroller')
if(!window.matchMedia("(prefers-reduced-motion : reduce)").matches){
      addAnimation();
}
function addAnimation(){
   scrollers.forEach((scroller)=>{
      scroller.setAttribute("data-animated",true);

      const innner = document.querySelector('.scroller_inner')
      const child = Array.from(innner.children);
      child.forEach(item=>{
         const duplicate = item.cloneNode(true)
         duplicate.setAttribute('aria-hidden',true)
         innner.appendChild(duplicate);
      });
   });
};