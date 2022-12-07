function openMenu(){
    var links = document.querySelector(".links");
    links.style.right = 0;
}

function closeMenu(){
    var links = document.querySelector(".links");
    links.style.right = "-100%";
}

function reveal() {
    var reveals = document.querySelectorAll(".greenContent");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);