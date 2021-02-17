const openButton = document.querySelectorAll('[data-open]');

if (openButton) {
  openButton.forEach(button => {

    const openSome = (event) => {
      const target = event.target;
      const needOpen = document.querySelector(target.dataset.open);

      if (!needOpen.classList.contains('opened')) {
        needOpen.classList.add('opened');
        target.classList.add('open');
      }
      else {
        needOpen.classList.remove('opened');
        target.classList.remove('open');
      }
    };

    button.addEventListener('click', openSome)
  })
}
