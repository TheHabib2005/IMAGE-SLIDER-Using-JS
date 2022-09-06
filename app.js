
// LEFT TO RIGHT SLIDEING

const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;

});
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
var habib = slides.length - 1
prevBtn.style.display = "none"

function next() {
  counter = counter + 1
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;

  })
  if (counter === slides.length - 1) {
    nextBtn.style.display = "none"
  }

  if (counter > 0) {

    prevBtn.style.display = ""

  }
}



function prev() {
  counter = counter - 1
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  })

  if (counter < slides.length - 1) {
    nextBtn.style.display = ""
  }

  if (counter === 0) {

    prevBtn.style.display = "none"

  }

}

// SLIDER BOTTOM TO TOP  SLIDEING



// const slides = document.querySelectorAll(".slide");
// var counter = 0;
// slides.forEach((slide, index) => {
//   slide.style.bottom = `${index * 100}%`;

// });
// const nextBtn = document.querySelector(".nextBtn");
// const prevBtn = document.querySelector(".prevBtn");
// var habib = slides.length - 1
// prevBtn.style.display = "none"

// function next() {
//   counter = counter + 1
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateY(${counter * 100}%)`;

//   })
//   if (counter === slides.length - 1) {
//     nextBtn.style.display = "none"
//   }

//   if (counter > 0) {

//     prevBtn.style.display = ""

//   }
// }



// function prev() {
//   counter = counter - 1
//   slides.forEach(slide => {
//     slide.style.transform = `translateY(${counter * 100}%)`;
//   })

//   if (counter < slides.length - 1) {
//     nextBtn.style.display = ""
//   }

//   if (counter === 0) {

//     prevBtn.style.display = "none"

//   }

// }