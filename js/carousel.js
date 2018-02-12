let Carousel = (_=> {
  let s = {};
  let tab = ["hide", "left-top", "center", "right-bottom", "hide"];
  let j = 0, k = 4;
  let newTab = [];

  function slideUpLeft() {
    for (let i = tab.length - 1; i >= 0; i--) {
      if (k < 1) {
        k = 5;
      }
      newTab[i] = tab[k-1];
      k--;
      s.boxes[i].classList.remove(tab[i]);
      s.boxes[i].classList.add(newTab[i]);
    }
    tab = newTab;
    newTab = [];
    k = 4;
  }
  
  function slideDownRight() {
    for (let i = 0; i < tab.length; i++) {
      if (j > 3) {
        j = -1;
      }
      newTab[i] = tab[j+1];
      j++;
      s.boxes[i].classList.remove(tab[i]);
      s.boxes[i].classList.add(newTab[i]);
    }
    tab = newTab;
    newTab = [];
    j = 0;    
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.arrowLeft.addEventListener('click', slideUpLeft);
    s.arrowRight.addEventListener('click', slideDownRight);
  }

  return {
    init
  };
})();