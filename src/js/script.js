
let navBtn = document.querySelector("#navBtn");
let navbarContent = document.querySelector("#navbarContent");
let navlinks = document.querySelectorAll(".nav-link");

navBtn.addEventListener("click", () => {
    navbarContent.classList.toggle("hiddenNav");
});

navlinks.forEach(nav_link => {
    nav_link.addEventListener("click", () => {
        navbarContent.classList.toggle("hiddenNav");
    });
});






