/* "browser" : true */
/* jshint browser : true */
/* global console */
/* jshint esversion: 6 */

let Carousel = (function () {
  'use strict';
  let s = {};
  let index = 0, ind1 = 1, ind2 = 2, ind3 = 0;
  let jobBoxInd1 = 0, jobBoxInd2 = 1, jobBoxInd3 = 2;
  const tab = ["slider-picture-container less-opacity left-top", "slider-picture-container center", "slider-picture-container less-opacity right-bottom"];

  function slideUpLeft() {
    if (ind1 < 0){ind1 = 2;}
    if (ind2 < 0){ind2 = 2;}
    if (ind3 < 0){ind3 = 2;}

    if (ind1 > tab.length - 1){ind1 = 0;}
    if (ind2 > tab.length - 1){ind2 = 0;}
    if (ind3 > tab.length - 1){ind3 = 0;}
    
    if (jobBoxInd1 < 0){jobBoxInd1 = 2;}
    if (jobBoxInd2 < 0){jobBoxInd2 = 2;}
    if (jobBoxInd3 < 0){jobBoxInd3 = 2;}

    if (jobBoxInd1 > tab.length - 1){jobBoxInd1 = 0;}
    if (jobBoxInd2 > tab.length - 1){jobBoxInd2 = 0;}
    if (jobBoxInd3 > tab.length - 1){jobBoxInd3 = 0;}

    s.boxes[index].classList = tab[ind2];
    s.boxes[index + 1].classList = tab[ind3];
    s.boxes[index + 2].classList = tab[ind1];
    
    s.jobBox[jobBoxInd1].classList.remove('is-visible');
    s.jobBox[jobBoxInd2].classList.remove('is-visible');
    s.jobBox[jobBoxInd3].classList.add('is-visible');

    ind1--; ind2--; ind3--;
    jobBoxInd1++; jobBoxInd2++; jobBoxInd3++;
  }
  
  function slideDownRight() {
        
    if (ind1 < 0){ind1 = 2;}
    if (ind2 < 0){ind2 = 2;}
    if (ind3 < 0){ind3 = 2;}

    if (ind1 > tab.length - 1){ind1 = 0;}
    if (ind2 > tab.length - 1){ind2 = 0;}
    if (ind3 > tab.length - 1){ind3 = 0;}
    
    if (jobBoxInd1 < 0){jobBoxInd1 = 2;}
    if (jobBoxInd2 < 0){jobBoxInd2 = 2;}
    if (jobBoxInd3 < 0){jobBoxInd3 = 2;}

    if (jobBoxInd1 > tab.length - 1){jobBoxInd1 = 0;}
    if (jobBoxInd2 > tab.length - 1){jobBoxInd2 = 0;}
    if (jobBoxInd3 > tab.length - 1){jobBoxInd3 = 0;}
    
    s.boxes[index].classList = tab[ind1];
    s.boxes[index + 1].classList = tab[ind2];
    s.boxes[index + 2].classList = tab[ind3];
 
    s.jobBox[jobBoxInd1].classList.add('is-visible');
    s.jobBox[jobBoxInd2].classList.remove('is-visible');
    s.jobBox[jobBoxInd3].classList.remove('is-visible');
        
    ind1++; ind2++; ind3++;
    jobBoxInd1--; jobBoxInd2--; jobBoxInd3--;
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.arrowLeft.addEventListener('click', slideUpLeft);
    s.arrowRight.addEventListener('click', slideDownRight);
  }

  return {
    init: init
  };
}());