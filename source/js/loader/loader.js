const initLoader = () => {
  const loader = document.querySelector('#loader');

  const closeLoader = (e) => {

    if (e.keyCode === 13) {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.remove();
      }, 599)
    }

  };

  window.addEventListener('keydown', closeLoader);
};

initLoader();
