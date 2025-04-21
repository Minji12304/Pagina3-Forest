const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber = 0;

console.log(".next-btn:", nextBtn);
console.log(".prev-btn:", prevBtn);
console.log(".slide:", slides);

//slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    slideNumber++;

    if (slideNumber > numberOfSlides - 1) {
       slideNumber = 0; 
    }

    slides[slideNumber].classList.add("active");
}

//slider prev button
prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    
    slideNumber--;

    if (slideNumber < 0) {
       slideNumber = numberOfSlides - 1; 
    }

    slides[slideNumber].classList.add("active");
}