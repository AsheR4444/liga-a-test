const clicker = () => {
  const needClass = document.querySelectorAll('[data-await-class]');

  needClass.forEach(element => {
    const parentElement = element.closest('[data-await-click]');
    const neededClass = element.dataset.awaitClass;

    parentElement.addEventListener('click', () => {
      if (!element.classList.contains(neededClass)) {
        element.classList.add(neededClass);
      } else {
        element.classList.remove(neededClass);
      }
    });
  });
};

const initClicker = () => {
  if (document.body.clientWidth < 1024) {
    clicker();
  }
};

initClicker();
window.addEventListener('resize', initClicker);

