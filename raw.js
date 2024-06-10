document.addEventListener("DOMContentLoaded", function() {
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const items = document.querySelectorAll(".slider .list .item");
    const thumbnails = document.querySelectorAll(".thumbnail .item");
    let currentIndex = 0;

    function showSlide(index) {
        items[currentIndex].classList.remove("active");
        thumbnails[currentIndex].classList.remove("active");
        currentIndex = (index + items.length) % items.length;
        items[currentIndex].classList.add("active");
        thumbnails[currentIndex].classList.add("active");
    }

    next.addEventListener("click", () => showSlide(currentIndex + 1));
    prev.addEventListener("click", () => showSlide(currentIndex - 1));

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => showSlide(index));
    });
});
