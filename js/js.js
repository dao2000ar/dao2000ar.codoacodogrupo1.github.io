window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var logo = document.querySelector("logo");


    header.classList.toggle("abajo",window.scrollY>0);
    logo.classList.toggle("abajo",window.scrollY>0);

})