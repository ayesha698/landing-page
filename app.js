let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
let mobilMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", function(){
    mobilMenu.classList.add("show-menu");
})

close.addEventListener("click", function(){
    mobilMenu.classList.remove("show-menu");
})

