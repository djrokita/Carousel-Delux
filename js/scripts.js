$(document).ready(function() {

  var btnNext = $('.fa-angle-right');
  var btnPrev = $('.fa-angle-left');
  var time = setInterval(changeSlide, 5000);

  function changeSlide() {
    $('.gallery').animate({marginLeft: '-400px'}, 500, moveFirstSlide);
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
  });

  $(btnPrev).click(function() {
    $('.gallery').animate({marginLeft: '400px'}, 500, addLastSlide);    
    clearInterval(time);
    time = setInterval(changeSlide, 5000);
  });

});