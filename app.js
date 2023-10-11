const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

updateSlider(); 



const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carousel = document.querySelector(".carousel");
const brands = document.querySelectorAll(".brand");

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