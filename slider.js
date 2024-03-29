const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");
const brands = document.querySelectorAll(".brand");
let currentIndex = 0;

function showBrand(index) {
    brands.forEach((brand, i) => {
        if (i === index) {
            brand.style.display = "block";
        } else {
            brand.style.display = "none";
        }
    });
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + brands.length) % brands.length;
    showBrand(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % brands.length;
    showBrand(currentIndex);
});

showBrand(currentIndex);