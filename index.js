const slider = document.querySelector(".silder");
const slide = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left_btn");
const rightBtn = document.querySelector(".right_btn");

let curSlide = 0;
const maxSlide = slide.length;

const goToSlide = (curSlide) => {
  slide.forEach((el, i) => {
    el.style.transform = `translateX(${110 * (i - curSlide)}%)`;
  });
};

goToSlide(0);

const nextSlide = () => {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const preSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

leftBtn.addEventListener("click", preSlide);
rightBtn.addEventListener("click", nextSlide);
