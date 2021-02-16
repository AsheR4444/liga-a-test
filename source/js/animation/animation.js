const animationElements = document.querySelectorAll('[data-onload-animation]');

const animateElements = () => {
  animationElements.forEach(element => {
    element.style = element.dataset.onloadAnimation;
  });
};

animateElements();
