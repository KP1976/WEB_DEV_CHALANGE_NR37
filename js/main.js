document.addEventListener('DOMContentLoaded', _=> {
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
  
  Carousel.init({
    arrowLeft: document.querySelector('.slider-left-or-top-arrow'),
    arrowRight: document.querySelector('.slider-right-or-bottom-arrow'),
    boxes: document.querySelectorAll('.slider-picture-container'),
    jobBox: document.querySelectorAll('.slider-picture-job-box')
  });
  
  Change.init({
    pictureWrapper: document.querySelectorAll('.what-client-says-small-pictures-wrapper'),
    imgBigSrc: document.querySelector('.what-client-says-big-picture'),
    cite: document.querySelector('cite'),
    nameCompany: document.querySelector('.what-client-says-name-company')
  });
});