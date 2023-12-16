const burger = document.getElementById("burger")
const NavList = document.getElementById("nav__list")


burger.onclick = function() {
    NavList.classList.toggle("open")
    burger.classList.toggle("b_transition")
}