document.querySelector('.the_ul').addEventListener('click', function(event) {
   if (event.target.tagName === 'A') {
     var listItems = document.querySelectorAll('.the_ul li');
     listItems.forEach(function(item) {
       item.classList.remove('active');
     });
     event.target.parentNode.classList.add('active');
   }
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

// for responsive

    document.getElementById('mobile-menu').addEventListener('click', function () {
  let navbar = document.querySelector('.nav_item');
  let li = document.querySelectorAll('.the ul li')
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    
  } else {
    navbar.style.display = 'block';
  }
});


// const formElements = document.querySelectorAll('.contectform input');
// let val = true;

// formElements.forEach(element => {
//   element.addEventListener('click', (e) => {
//     if (val) {
//       e.style.border=  "2px solid blue";
//       e.style.backgroundColor =  "blue";

//       val = false
//    }
//    else{
//       element.style.border=  "none";
//    }
//   });
// });


