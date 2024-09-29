function openNav() {
    document.querySelector(".sidebar").style.width = "150px";
   document.querySelector(".content").style.marginRight = "150px";
}

function closeNav() {
   document.querySelector(".sidebar").style.width = "0";
   document.querySelector(".content").style.marginRight = "0";
}

function openCircuit() {
   const modal = document.querySelector("#circuit-content");
   modal.style.display = "block";
   document.body.style.overflow = "hidden"
}

function closeCircuit() {
   const modal = document.querySelector("#circuit-content");
   modal.style.display = "none";
   document.body.style.overflow = "auto"; 
}


let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.carousel').style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide);