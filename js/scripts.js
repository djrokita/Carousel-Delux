$(document).ready(function() {

  var btnNext = $('.fa-angle-right');
  var btnPrev = $('.fa-angle-left');
  var indexPhoto = $('.gallery').find('li');
  var indexCircle = $('.controls').find('i.fired');
  var licz = 1;
  var pickPhotoCircle = $('<i class="fa fa-circle" aria-hidden="true"></i>');
  var emptyCircle = $('<i class="fa fa-circle-o" aria-hidden="true"></i>');
  var indexPoint = $('.controls').find('li');

  var time = setInterval(changeSlide, 5000);
  indexCircle.eq(0).css('display', 'inline-block');

  console.log(licz);

  function changeSlide() {
    $('.gallery').animate({
      marginLeft: '-400px'
    }, 500, moveFirstSlide);
    changeCircle();
  }

  function moveFirstSlide() {
    var firstSlide = $('.gallery li:first');
    var lastSlide = $('.gallery li:last');
    lastSlide.after(firstSlide);
    $('.gallery').css('marginLeft', '0');
    indexPhoto = $('.gallery').find('li');
  }

  function moveLastSlide() {
    var firstSlide = $('.gallery li:first');
    var lastSlide = $('.gallery li:last');
    firstSlide.before(lastSlide);
    $('.gallery').css('marginLeft', '0');
    indexPhoto = $('.gallery').find('li');
  }

  $(btnNext).click(function() {
    $('.gallery').animate({
      marginLeft: '-400px'
    }, 500, moveFirstSlide);
    clearInterval(time);
    time = setInterval(changeSlide, 5000);
    changeCircle();
  });

  $(btnPrev).click(function() {
    $('.gallery').animate({
      marginLeft: '400px'
    }, 500, moveLastSlide);
    clearInterval(time);
    time = setInterval(changeSlide, 5000);
    changeCircleBack();
  });

  function changeCircle() {
    licz++;
    if (licz > indexPhoto.length) licz = 1;
    indexCircle.each(function() {
      $(this).css('display', 'none');
    });

    indexCircle.eq(licz - 1).css('display', 'inline-block');

    console.log(licz);
  }

  function changeCircleBack() {
    licz--;
    if (licz == 0) licz = indexPhoto.length;
    indexCircle.each(function() {
      $(this).css('display', 'none');
    });

    indexCircle.eq(licz - 1).css('display', 'inline-block');

    console.log(licz);
  }

  /*function currentPhoto() {
    var displayPhoto = indexPhoto.eq(1);
    var idPhoto = displayPhoto.attr('id');
   console.log(idPhoto);

  }
  /*currentPhoto();*/

  var getIdPoint = 0;
  var toMargin = 0;


  function changeCircleClick() {
    indexCircle.each(function() {
      $(this).css('display', 'none');
    });

    indexPoint.each(function() {
      $(this).click(function() {
        $(this).css('display', 'inline-block');
      });
    });
    console.log(licz);
  }

  indexPoint.each(function(index) {
    $(this).click(function() {
      indexCircle.each(function() {
        $(this).css('display', 'none');
      });
      $(this).find('i').css('display', 'inline-block');
    });
  });
  /*toMargin = 0;
      getIdPoint = indexPoint.eq(index).attr('id'); 
      console.log(getIdPoint);
      moveSlidePoint();
    /*clearInterval(time);*/
  /*$('.gallery').animate({left: '-' + toMargin + 'px'}, 500);*/

  /*time = setInterval(changeSlide, 5000);
      changeCircle();


      
  });
  });*/

  function moveSlidePoint() {
    if (licz < getIdPoint) toMargin = (getIdPoint - licz) * 400;
    else toMargin = (licz - getIdPoint) * 400;
    console.log(toMargin);
    /*if (getIdPoint == 3) moveFirstSlide();
    else if (getIdPoint == 1) moveLastSlide();*/
  }

});


/*Potrzebne funkcje:
- do zmiany koloru kółka
- do zmiany slajdu
- do uaktualnienia licznika*/