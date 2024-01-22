// document.querySelector('.the_ul').addEventListener('click', function(event) {
//    if (event.target.tagName === 'A') {
//      var listItems = document.querySelectorAll('.the_ul li');
//      listItems.forEach(function(item) {
//        item.classList.remove('active');
//      });
//      event.target.parentNode.classList.add('active');
//    }
//  });

let anime = document.querySelectorAll('.anime');
var listItems = document.querySelectorAll('.the_ul li a');

window.onscroll = ()=>{
anime.forEach(element => {
  let top = window.screenX;
  let offset = element.offsetRight;
  let height = element.offsetHeight;
  let id = element.getAttribute('id')
  if(top >= offset && top < offset + height){
    listItems.forEach(links => {
      links.classList.remove('active');
      document.querySelector('.the_ul li a [href* = '+ id +']').classList.add('active');
    });  
  }
});
} 







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



