// Enable tooltips everywhere
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// Scroll to Top
let toTopBtn = document.querySelector(".to-top");

window.onscroll = function () {
    if (this.scrollY >= screen.height) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
};
toTopBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};

