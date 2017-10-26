/* jshint browser: true */
/* global Menu, Search */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  Menu.init({
    hamburgerMenu: document.querySelector('.hamburger-menu'),
    hamburgerBarTop: document.querySelector('.hamburger-menu > span'),
    hamburgerBarMiddle: document.querySelector('.hamburger-menu > span + span'),
    hamburgerBarBottom: document.querySelector('.hamburger-menu > span + span + span'),
    navList: document.querySelector('.menu-list-wrapper'),
    menuListAnchor: document.querySelectorAll('.menu-item')
  });
  
  Search.init({
    searchIcon: document.querySelector('.search-icon'),
    searchInput: document.querySelector('.search-input')
  });
});