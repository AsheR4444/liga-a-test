const initLoader = () => {
  const loader = document.querySelector('#loader');

  const closeLoader = (e) => {

    if (e.keyCode === 13) {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.remove();
        document.querySelector('#main-wrapper').style = 'display: block;';
      }, 1999)
    }

  };

  window.addEventListener('keydown', closeLoader);
};

initLoader();
