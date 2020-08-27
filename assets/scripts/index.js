// scroll nav effect
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".navbar").addClass("darkNav");
  } else {
    $(".navbar").removeClass("darkNav")
  }
});

const close = document.querySelector('.close').parentElement;
const imgZoom = close.parentElement.querySelector('img');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', function (e) {
    const cardSrc = this.querySelector('img').getAttribute('src');
    imgZoom.src = cardSrc;
    close.parentElement.style.display = 'flex';


  })
});


close.addEventListener('click', function () {
  this.parentElement.style.display = 'none';
});