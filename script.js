var navbarItems = document.querySelectorAll('.the_li');

navbarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        navbarItems.forEach(function(navItem) {
            navItem.classList.remove('clicked');
        });

        item.classList.add('clicked');
    });
});




document.addEventListener('DOMContentLoaded', function(){
   var typed = new Typed(".auto_typed", {
      strings: ["HTML", "Css", "JavaScript", "Bootstrap"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
   });
});
document.addEventListener('DOMContentLoaded', function(){
   var typed = new Typed(".auto_typed2", {
      strings: ["WebDevloper","HTML", "Css", "JavaScript", "Bootstrap"],
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

setInterval(()=>{
num.forEach(element => { 
   if(counter == 95){
      clearInterval();
   }
   else{
      counter += 1;
      element.innerHTML = `${counter}%` 
   }
});
},20);

