const initLoader = () => {
  const loader = document.querySelector('#loader');

  const closeLoader = (e) => {

    if (e.keyCode === 13) {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.remove();
        document.querySelector('#main-wrapper').style = 'display: block; opacity: 1;';
      }, 1999)
    }

  };

  window.addEventListener('keydown', closeLoader);
};

initLoader();
