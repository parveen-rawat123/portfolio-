//  let navbaar = document.querySelector('.the_ul');
//  navbaar.addEventListener('click', function(event) {
//    if (event.target.tagName === 'LI') {
//      var listItems = document.querySelectorAll('.the_ul li');
//      listItems.forEach(function(item) {
//        item.classList.remove('active');
//      });
//      event.target.classList.add('active');
//    }
//  });
 
let toggleBtn = document.querySelector('.navbar-toggle');
let sidebar = document.querySelector('.side-bar');

toggleBtn.addEventListener("click",()=>{
    sidebar.classList.toggle('active');
    toggleBtn.classList.toggle('navbar-toggle-btn');

})


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



