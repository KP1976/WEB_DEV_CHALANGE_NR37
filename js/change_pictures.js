/* "browser" : true */
/* jshint browser : true */
/* global console */
/* jshint esversion: 6 */

let Change = (function () {
//  'use strict';
  let s = {};
  const tabImgSrc = ["img/team_pic2.jpg", "img/team_pic1.jpg", "img/team_pic4.jpg"];
  const tabNameCompany = ["Jimmy Doe, Designer", "John Doe, IT manager", "Jinny Snow, Company CEO"];
  const cites = ["Morbi interdum blandit velit, sit amet accumsan lorem porta id. Mauris at odio vitae felis maximus placerat. Curabitur elementum lacus et neque tristique, id convallis sem.", "Vestibulum purus massa, tempus eu congue ut, placerat placerat metus. Integer laoreet dolor et massa cursus, sit amet ultrices odio scelerisque. Donec auctor tristique facilisis. Etiam.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."];

  function change1() {
    this.classList.add('bordered');
    s.pictureWrapper[1].classList.remove('bordered');
    s.pictureWrapper[2].classList.remove('bordered');
    
    s.imgBigSrc.setAttribute('src', tabImgSrc[0]);
    
    s.cite.textContent = cites[0];
    s.nameCompany.textContent = tabNameCompany[0];
  }
  
  function change2() {
    this.classList.add('bordered');
    s.pictureWrapper[0].classList.remove('bordered');
    s.pictureWrapper[2].classList.remove('bordered');
    
    s.imgBigSrc.setAttribute('src', tabImgSrc[1]);
    
    s.cite.textContent = cites[1];
    s.nameCompany.textContent = tabNameCompany[1];
  }
  
  function change3() {
    this.classList.add('bordered');
    s.pictureWrapper[0].classList.remove('bordered');
    s.pictureWrapper[1].classList.remove('bordered');
    
    s.imgBigSrc.setAttribute('src', tabImgSrc[2]);
    
    s.cite.textContent = cites[2];
    s.nameCompany.textContent = tabNameCompany[2];
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.pictureWrapper[0].addEventListener('click', change1);
    s.pictureWrapper[1].addEventListener('click', change2);
    s.pictureWrapper[2].addEventListener('click', change3);
  }

  return {
    init: init
  };
}());