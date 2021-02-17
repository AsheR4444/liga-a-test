const toggleElements = document.querySelectorAll('[data-toggle-class]');

const toggle = (event) => {
  const target = event.target;
  const neededClass = target.dataset.toggleClass;

  if (!target.classList.contains(neededClass)) {
    target.classList.add(neededClass);
  } else {
    target.classList.remove(neededClass);
  }
};

toggleElements.forEach((item) => {
  item.addEventListener('click', toggle)
});
