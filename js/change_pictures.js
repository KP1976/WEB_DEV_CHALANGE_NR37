let Change = (_=> {
  let s = {};
  const tabNameCompany = ["Jimmy Doe, Designer", "John Doe, IT manager", "Jinny Snow, Company CEO"];
  const cites = ["Morbi interdum blandit velit, sit amet accumsan lorem porta id. Mauris at odio vitae felis maximus placerat. Curabitur elementum lacus et neque tristique, id convallis sem.", "Vestibulum purus massa, tempus eu congue ut, placerat placerat metus. Integer laoreet dolor et massa cursus, sit amet ultrices odio scelerisque. Donec auctor tristique facilisis. Etiam.", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."];

  // Funkcja zmieniająca obrazki, cytat, nazwisko i nazwę firmy po kliknięciu na miniaturę obrazka
  function changePicture(e) {
    const pictureAttribute = e.target.getAttribute('src');
    const currentPicture = e.target.parentNode;
    
    if(currentPicture.previousElementSibling === null) {
      currentPicture.nextElementSibling.classList.remove('bordered');
      currentPicture.nextElementSibling.nextElementSibling.classList.remove('bordered');
    }
    
    if(currentPicture.previousElementSibling !== null && currentPicture.nextElementSibling !== null) {
      currentPicture.previousElementSibling.classList.remove('bordered');
      currentPicture.nextElementSibling.classList.remove('bordered');
    }
    
    if(currentPicture.nextElementSibling === null) {
      currentPicture.previousElementSibling.classList.remove('bordered');
      currentPicture.previousElementSibling.previousElementSibling.classList.remove('bordered');
    }

    this.classList.add('bordered');
    s.imgBigSrc.setAttribute('src', pictureAttribute);
    
    if(pictureAttribute === 'img/team_pic2.jpg') {
      s.cite.textContent = cites[0];
      s.nameCompany.textContent = tabNameCompany[0];
    }
    
    if(pictureAttribute === 'img/team_pic1.jpg') {
      s.cite.textContent = cites[1];
      s.nameCompany.textContent = tabNameCompany[1];
    }
    
    if(pictureAttribute === 'img/team_pic4.jpg') {
      s.cite.textContent = cites[2];
      s.nameCompany.textContent = tabNameCompany[2];
    }
  }
  
  // Funkcja inicjalizująca //
  function init(config) {
    s = config;
    s.pictureWrapper.forEach(picture =>{
      picture.addEventListener('click', changePicture);
    });
  }

  return {
    init
  };
})();