// navbaar animate
var navbarItems = document.querySelectorAll(".the_li");
navbarItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navbarItems.forEach(function (navItem) {
      navItem.classList.remove("clicked");
    });
    item.classList.add("clicked");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto_typed", {
    strings: ["Full stack", "Developer"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".auto_typed2", {
    strings: [
      "HTML5",
      "Css",
      "JavaScript",
      "Bootstrap",
      "Nodejs",
      "Expressjs",
      "MySql",
      "MongoDb",
      "React",
      "git",
      "github",
      "tailwaindCSS",
    ],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
  });
});

// for responsive navbaaar

let menubar = document.getElementById("mobile-menu");
let navbar = document.querySelector(".nav_item");
menubar.addEventListener("click", () => {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});

// skills loader
let num = document.querySelectorAll("#number");
let counter = 0;

setInterval(() => {
  num.forEach((element) => {
    if (counter == 95) {
      clearInterval();
    } else {
      counter += 1;
      element.innerHTML = `${counter}%`;
    }
  });
}, 20);

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion : reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const innner = document.querySelector(".scroller_inner");
    const child = Array.from(innner.children);
    child.forEach((item) => {
      const duplicate = item.cloneNode(true);
      duplicate.setAttribute("aria-hidden", true);
      innner.appendChild(duplicate);
    });
  });
}

// form validation
let form = document.querySelector(".myform");
let error1 = document.querySelector("#error1");
let error2 = document.querySelector("#error2");
let error3 = document.querySelector("#error3");

form.addEventListener("submit", (event) => {

  let name = document.myform.name.value;
  let email = document.myform.email.value;
  let number = document.myform.number.value;

  error1.style.opacity = 0;
  error2.style.opacity = 0;
  error3.style.opacity = 0;

  // Name validation
  if (name.trim() === "") {
    error1.innerText = "*enter your name*";
    error1.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (name.length < 3 || name.length >= 20) {
    error1.innerText = "*enter your full name*";
    error1.style.opacity = 1;
    event.preventDefault();
    return;
  }

  // Email validation
  if (email.trim() === "") {
    error2.innerText = "*enter your email*";
    error2.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (email.indexOf("@") <= 0) {
    error2.innerText = " *@ invalid position*";
    error2.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (
    email.charAt(email.length - 4) !== "." &&
    email.charAt(email.length - 3) !== "."
  ) {
    error2.innerText = " *invalid position*";
    error2.style.opacity = 1;
    event.preventDefault();
    return;
  }

  // Number validation
  if (number.trim() === "" || number === null) {
    error3.innerText = "*please enter your number*";
    error3.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (number.length !== 10) {
    error3.innerText = "*number must be 10 digits*";
    error3.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (isNaN(number)) {
    error3.innerText = "*enter numeric value*";
    error3.style.opacity = 1;
    event.preventDefault();
    return;
  }

  if (!["9", "8", "7", "6"].includes(number.charAt(0))) {
    error3.innerText = "* enter Indian mobile number*";
    error3.style.opacity = 1;
    event.preventDefault();
    return;
  }
});

/// click li tag
let li = document.querySelectorAll(".the_li");
function toggleNavbarDisplay() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}
if (window.matchMedia("(max-width: 768px)").matches) {
  li.forEach((element) => {
    element.addEventListener("click", toggleNavbarDisplay);
  });
}
