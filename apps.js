const menuIcon = document.querySelector(".menu");
const sidebar = document.querySelector(".navbar");
const container = document.querySelector(".short-list");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-menu");
    container.classList.toggle("large-navbar");
}

