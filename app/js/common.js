var logo;
logo = document.getElementById("logo");
logo.addEventListener("click",toggleMenu);

function toggleMenu(){
    var ul;
    ul = document.getElementById("main-nav");
    ul.classList.toggle('show');
}