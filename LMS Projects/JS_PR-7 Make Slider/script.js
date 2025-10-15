
const slides = document.querySelector('.slides');

const slideElements = document.querySelectorAll('.slide');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const indicatorsContainer = document.querySelector('.indicators');

const autoToggleBtn = document.getElementById('autoToggle');

let currentIndex = 0;          
let autoSlide = true;            
let autoSlideInterval;           

slideElements.forEach((slide, index) => {
    const dot = document.createElement('div');

    dot.classList.add('dot');

    if (index === 0) {
        dot.classList.add('active');
    }
    indicatorsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => {
        dot.classList.remove('active'); 
    });
    dots[currentIndex].classList.add('active');  
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideElements.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);  
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval); µ
}


nextBtn.addEventListener('click', () => {
    nextSlide();  

    if (autoSlide) {
        stopAutoSlide();
        startAutoSlide();
    }
});

prevBtn.addEventListener('click', () => {
    prevSlide();  

    if (autoSlide) {
        stopAutoSlide();
        startAutoSlide();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;  
        updateSlider();

        if (autoSlide) {
            stopAutoSlide();
            startAutoSlide();
        }
    });
});

autoToggleBtn.addEventListener('click', () => {
    autoSlide = !autoSlide;  

    if (autoSlide) {
        autoToggleBtn.textContent = 'Pause Auto Slide';
        startAutoSlide();
    } else {
        autoToggleBtn.textContent = 'Start Auto Slide';
        stopAutoSlide();
    }
});

startAutoSlide();