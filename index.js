//Selecting Side Navbar, Menu
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

closenav.addEventListener("click", function(){
    sidenav.style.right="-50%"
})