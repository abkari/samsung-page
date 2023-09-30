const hamburgerMenuBtn = document.getElementById("hamburger-menu")
const closeBtn = document.getElementById("close-btn")
const menuOverlay = document.getElementById("menu-overlay")


hamburgerMenuBtn.addEventListener("click", function(){
    menuOverlay.classList.add("open")
    document.body.style.overflowY = "hidden";
})

closeBtn.addEventListener("click", function(){
    menuOverlay.classList.remove("open")
    document.body.style.overflowY = "scroll";
})