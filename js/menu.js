/* "browser" : true */
/* jshint browser : true */
/* global console */
/* jshint esversion: 6 */

let Menu = (function () {
  'use strict';
  let s = {};

  function popMenu() {
    s.navList.className = (s.navList.className === "menu-list-wrapper mobile") ? "menu-list-wrapper" : "menu-list-wrapper mobile";    
    s.hamburgerBarTop.className = (s.hamburgerBarTop.className === "rotateAndMove") ? "" : "rotateAndMove";
    s.hamburgerBarMiddle.className = (s.hamburgerBarMiddle.className === "rotate") ? "" : "rotate";
    s.hamburgerBarBottom.className = (s.hamburgerBarBottom.className === "none") ? "" : "none";
    
    if(s.navList.className === "menu-list-wrapper mobile") {
      s.menuListAnchor.forEach(function(index) {
        index.addEventListener('click', popDown);
      });
    }
  }

  function popDown() {
    s.navList.className = "menu-list-wrapper";
    s.hamburgerBarTop.className = "";
    s.hamburgerBarMiddle.className = "";
    s.hamburgerBarBottom.className = "";
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.hamburgerMenu.addEventListener('click', popMenu);
  }

  return {
    init: init
  };
}());