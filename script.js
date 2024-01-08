let li = document.querySelectorAll('.the_ul li')
let a = document.querySelectorAll('.the_ul li a')
li.forEach(element => {
   element.addEventListener('click',()=>{
     
a.forEach(element => {
  element.style.color = "red"; 
  });
a.forEach(element => {
  element.style.color = "black"; 
  });
   })
});

document.addEventListener('DOMContentLoaded', function(){
   var typed = new Typed(".auto_typed", {
      strings: ["WebDevloper","HTML", "Css", "JavaScript", "Bootstrap"],
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


