let menuHam = document.getElementById("menu_ham")
let menuAside = document.getElementById("menu_aside")

menuHam.addEventListener("click", function () {
    if (menuAside.style.display === "none") {
        menuAside.style.display = "block"
        menuHam.classList.remove("fa-bars")
        menuHam.classList.add("fa-x")
    } else {
        menuAside.style.display = "none"
        menuHam.classList.remove("fa-x")
        menuHam.classList.add("fa-bars")
    }
})
