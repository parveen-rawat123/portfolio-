// let listitem = document.querySelector('.list')
// let navvaar = document.querySelector('.navbaar .one');
// // listitem.forEach(element => {
// //    element.addEventListener("click",()=>{
// //       listitem.classlist.toggle('active')
// //    })
// // });
// listitem.addEventListener("click",()=>{
//    navvaar.style.color= "red" 
//    navvaar.style.backgroundColor= "red" 
// })


 

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


    document.getElementById('mobile-menu').addEventListener('click', function () {
  let navbar = document.querySelector('.nav_item');
  let li = document.querySelectorAll('.the ul li')
  if (navbar.style.display === 'block') {
    navbar.style.display = 'none';
    
  } else {
    navbar.style.display = 'block';
  }
});

const formelement = document.querySelectorAll('input')
formelement.forEach(element => {
   element.addEventListener("click",()=>{
      element.style.border = "2px solid blue";
   })
});
