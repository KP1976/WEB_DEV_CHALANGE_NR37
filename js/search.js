let Search = (_=> {
  let s = {};
  
  function search() {
    s.searchIcon.style.opacity = (s.searchIcon.style.opacity === '0.2') ? '1' : '0.2';
    s.searchInput.classList.toggle("searchOn");  
    s.searchInput.style.padding = (s.searchInput.style.padding === '5px') ? '0' : '5px';
  }

  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.searchIcon.addEventListener('click', search);
  }

  return {
    init
  };
})();