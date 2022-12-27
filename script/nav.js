const hamburger = document.querySelector(".hamburger")
const main_nav = document.querySelector(".main-nav")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    main_nav.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    main_nav.classList.remove("active");
}))