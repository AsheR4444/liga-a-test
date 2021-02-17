const initLoader = () => {
  const loader = document.querySelector('#loader');
  document.body.style = 'overflow: hidden;'

  const closeLoader = (e) => {

    if (e.keyCode === 13) {
      loader.classList.add('hide');

      setTimeout(() => {
        loader.remove();
        document.querySelector('#main-wrapper').style = 'display: block;';
        document.body.removeAttribute("style");
      }, 1999)
    }

  };

  window.addEventListener('keydown', closeLoader);
};

initLoader();
