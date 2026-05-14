const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");

let index = 0;

function actualizarSlider(){

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

/* SIGUIENTE */
nextBtn.addEventListener("click", () => {

  index++;

  if(index >= slides.length){
    index = 0;
  }

  actualizarSlider();
});

/* ANTERIOR */
prevBtn.addEventListener("click", () => {

  index--;

  if(index < 0){
    index = slides.length - 1;
  }

  actualizarSlider();
});