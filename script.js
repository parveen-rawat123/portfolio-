let li = document.querySelectorAll('.the_ul li')
let a = document.querySelectorAll('.the_ul li a')
for (const newli of li) {
   newli.addEventListener('click',()=>{
            if(a.classList.contains('change')){
              newli.classList.add('change20')
            }

   })
}

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


