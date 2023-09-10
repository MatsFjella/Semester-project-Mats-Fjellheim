// JavaScript to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burgermenu");
    const headerList = document.querySelector(".headerlist");

    burgerMenu.addEventListener("click", function () {
        headerList.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });
});
