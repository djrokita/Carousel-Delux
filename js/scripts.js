$(document).ready(function() {

  var btnNext = $('.fa-angle-right');
  var btnPrev = $('.fa-angle-left');
  var time = setInterval(changeSlide, 2000);
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
    time = setInterval(changeSlide, 2000);
    changeCircle();
  });

  $(btnPrev).click(function() {
    $('.gallery').animate({marginLeft: '400px'}, 500, addLastSlide);    
    clearInterval(time);
    time = setInterval(changeSlide, 2000);
    changeCircleBack();
  });

  function changeCircle() {
  	var indexPhoto = $('.gallery').find('li');
	var displayPhoto = indexPhoto.eq(1);
 
	licz++;
   	if (licz == indexPhoto.length) licz = 0;
   	indexCircle.each(function() {
   		$(this).css('display', 'none');
   	});

	indexCircle.eq(licz).css('display', 'inline-block');

	console.log(licz);
  }

  function changeCircleBack() {
  	var indexPhoto = $('.gallery').find('li');
	var displayPhoto = indexPhoto.eq(1);
    var idPhoto = displayPhoto.attr('id');
    console.log(idPhoto);
	licz--;
   	if (licz < 0) licz = indexPhoto.length - 1;
   	indexCircle.each(function() {
   		$(this).css('display', 'none');
   	});

	indexCircle.eq(licz).css('display', 'inline-block');

	console.log(licz);
  }

});