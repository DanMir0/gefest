export default class Slider {
  constructor(parent) {
    const arrowLeft = parent.querySelector(".arrow-left");
    const arrowRight = parent.querySelector(".arrow-right");

    arrowLeft.addEventListener("click", () => {
        const element = parent.querySelector(".wrapper__img--active");
        element.classList.remove("wrapper__img--active")
        let prevElement = element.previousElementSibling

        let allItems = parent.querySelectorAll(".wrapper__img")

        if (prevElement === null) {
            prevElement = allItems[allItems.length-1]
        }
        prevElement.classList.add("wrapper__img--active")
    });

    arrowRight.addEventListener("click", (e) => {
      //hideCurrentSlide
      const element = parent.querySelector(".wrapper__img--active");
      element.classList.remove("wrapper__img--active");
      let nextElement = element.nextElementSibling;

      //showNextSlide
      if (nextElement === null) {
        nextElement = parent.querySelector(".wrapper__img");
      }
      nextElement.classList.add("wrapper__img--active");
    });
  }
}
