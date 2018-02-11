let Menu = (_=> {
  let s = {};
  
  function popMenu() {
    s.navList.classList.toggle("mobile");    
    s.hamburgerBarTop.classList.toggle("rotateAndMove");
    s.hamburgerBarMiddle.classList.toggle("rotate");
    s.hamburgerBarBottom.classList.toggle("none");
    
    if(s.navList.className === "menu-list-wrapper mobile") {
      s.menuListAnchor.forEach((index) => {
        index.addEventListener('click', popDown);
      });
    }
  }
  
  function popDown() {
    s.navList.classList.remove("mobile");
    s.hamburgerBarTop.classList.remove("rotateAndMove");
    s.hamburgerBarMiddle.classList.remove("rotate");
    s.hamburgerBarBottom.classList.remove("none");
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    config.hamburgerMenu.addEventListener('click', popMenu);
  }

  return {
    init
  };
})();