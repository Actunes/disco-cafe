let menuHam = document.getElementById("menu_ham")
let menuAside = document.getElementById("menu_aside")

menuHam.addEventListener("click", function () {
    if (menuAside.style.display === "none") {
        menuAside.style.display = "block"
    } else {
        menuAside.style.display = "none"
    }
})
