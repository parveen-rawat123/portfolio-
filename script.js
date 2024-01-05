let li = document.querySelectorAll('.the_ul li')
for (const newli of li) {
   newli.addEventListener('click',()=>{
      console.log(newli)
   let news = newli.firstElementChild;
    news.classList.toggle('changecolor');
    news.classList.remove('changecolor');
   // news.style.color = "red";
   //  news.classList.toggle('changecolor') 
   //  news.classList.remove('changecolor') 
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


