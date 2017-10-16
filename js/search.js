/* "browser" : true */
/* jshint browser : true */
/* global console */
/* jshint esversion: 6 */

let Search = (function () {
  'use strict';
  let s = {};

  function search() {
    s.searchIcon.style.opacity = (s.searchIcon.style.opacity === '0.2') ? '1' : '0.2';
    s.searchInput.style.width = (s.searchInput.style.width === '20%') ? '0' : '20%';
    s.searchInput.style.padding = (s.searchInput.style.padding === '5px') ? '0' : '5px';
  }

  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.searchIcon.addEventListener('click', search);
  }

  return {
    init: init
  };
}());