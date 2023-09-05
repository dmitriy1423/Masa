function initFilter() {
  const filterList = document.querySelector('.news__filter');
  const options = document.querySelectorAll('.news__filter-option');

  if (filterList && options.length > 0) {
    options.forEach((option) => {
      option.addEventListener('click', onOptionClick);
    });
  }

  function onOptionClick(evt) {
    options.forEach((option) => {
      if (option.classList.contains('news__filter-option--active')) {
        option.classList.remove('news__filter-option--active');
      }
    });
    options.forEach((option) => {
      if (evt.target === option) {
        option.classList.add('news__filter-option--active');
      }
    });
  }
}

export default initFilter;
