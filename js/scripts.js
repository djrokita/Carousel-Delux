$(document).ready(function() {

  var btnNext = $('.fa-angle-right');
  var btnPrev = $('.fa-angle-left');
  var indexPhoto = $('.gallery').find('li');
  var time = setInterval(changeSlide, 5000);
  var indexCircle = $('.controls').find('i.fired');
  var licz = 0;
  var pickPhotoCircle = $('<i class="fa fa-circle" aria-hidden="true"></i>');
  var emptyCircle = $('<i class="fa fa-circle-o" aria-hidden="true"></i>');

  indexCircle.eq(0).css('display', 'inline-block');

  function changeSlide() {
    $('.gallery').animate({marginLeft: '-400px'}, 500, moveFirstSlide);
  changeCircle();
  }

  function moveFirstSlide() {
    firstSlide = $('.gallery li:first');
    var lastSlide = $('.gallery li:last');
    lastSlide.after(firstSlide);
    $('.gallery').css('marginLeft', '0');
  }

  function addLastSlide() {
    var firstSlide = $('.gallery li:first');
    var lastSlide = $('.gallery li:last');
    firstSlide.before(lastSlide);
    $('.gallery').css('marginLeft', '0');
  }

  $(btnNext).click(function() {
    $('.gallery').animate({marginLeft: '-400px'}, 500, moveFirstSlide);    
    clearInterval(time);
    time = setInterval(changeSlide, 5000);
    changeCircle();
  });

  $(btnPrev).click(function() {
    $('.gallery').animate({marginLeft: '400px'}, 500, addLastSlide);    
    clearInterval(time);
    time = setInterval(changeSlide, 5000);
    changeCircleBack();
  });

  function changeCircle() {
    licz++;
    if (licz == indexPhoto.length) licz = 0;
    indexCircle.each(function() {
      $(this).css('display', 'none');
    });

  indexCircle.eq(licz).css('display', 'inline-block');

  console.log(licz);
  }

  function changeCircleBack() {
    licz--;
    if (licz < 0) licz = indexPhoto.length - 1;
    indexCircle.each(function() {
      $(this).css('display', 'none');
    });

  indexCircle.eq(licz).css('display', 'inline-block');

  console.log(licz);
  }
  
  function currentPhoto() {
	 var displayPhoto = indexPhoto.eq(1);

  }
});


/*Potrzebne funkcje:
- do zmiany koloru kółka
- do zmiany slajdu
- do uaktualnienia licznika*/