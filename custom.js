$(document).ready(function(){

  /* Aos.js */
  AOS.init();

  /* 헤더 */
  $(window).scroll(function() {

    let pos = $(window).scrollTop();

    if(pos > 50) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    };

  });

  /* Slide - main */
  let $img = $(".changeimg ul li");
  let $text = $('.changeimg ul li .des');
  let $lbtn = $(".side_btn .lbtn");
  let $rbtn = $(".side_btn .rbtn");
  let oldImg = 0;
  let newImg = 0;
  let oldText = 0;
  let newText = 0;
  let count = $img.length;

  //이미지&텍스트 전환효과
  function changeImg(newImg) {
    
    if(oldImg != newImg) {
      $img.eq(oldImg).removeClass('imgVisible');
      $img.eq(newImg).addClass('imgVisible');
    }
    oldImg = newImg;
  };

  function changeText(newText) {
    
    if(oldText != newText) {
      $text.eq(oldText).removeClass('textVisible');
      $text.eq(newText).addClass('textVisible');
    }
    oldText = newText;

  };

  //자동함수
  function autoImg() {
    newImg++;
    if(newImg > count-1) {
      newImg = 0;
    }
    changeImg(newImg);
  };
  timer1 = setInterval(autoImg, 4000);
  
  function autoText() {
    newText++;
    if(newText > count-1) {
      newText = 0;
    }
    changeText(newText);
  };
  timer2 = setInterval(autoText, 4000);

  //좌우버튼 클릭시..
  $rbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg++;
      if(newImg > count-1){
        newImg = 0;
      }
      changeImg(newImg);


      newText++;
      if(newText > count-1){
        newText = 0;
      }
      changeText(newText);

    timer1 = setInterval(autoImg,4000);
    timer2 = setInterval(autoText,4000);
  });

  $lbtn.click(function(){
    clearInterval(timer1);
    clearInterval(timer2);

    newImg--;
      if(newImg < 0){
        newImg = count-1;
      }
      changeImg(newImg);


      newText--;
      if(newText < 0){
        newText = count-1;
      }
      changeText(newText);

    timer1 = setInterval(autoImg,4000);
    timer2 = setInterval(autoText,4000);
  });



  
  /* Slick - banner */
  $(".banner-slide").slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });

  /* Slick - magazine */
  $(".magazine-slider").slick({
    infinite : true,
    slidesToShow : 4,
    slidesToScroll : 1,
    speed : 100,
    arrows : true,
    dots : false,
    autoplay : true,
    autoplaySpeed : 3000,
    pauseOnHover : true,
    vertical : false,	
    dotsClass : "slick-dots", 
    draggable : true, 
    variableWidth: true,
  })

  var $slider = $('.magazine-slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });

  /* #################### Header ###################### */
  $('.gnb .main').mouseenter(function() {
    $('.sub_bgbox').stop().show();
    $(this).find('.sub_all').css({'display':'flex'});
    $(this).find('.sub_all').show();
  });
  $('.gnb .main').mouseleave(function(){
    $(this).find('.sub_all').hide();
    $('.sub_bgbox').hide();
  });

  /* 간편예매, 기차여행 검색 탭 */
  $(".station-tab div").click(function() {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let cln = $(this).attr("data-alt");

    $("#"+cln).addClass("active");
    $("#"+cln).siblings().removeClass("active");
  });

  /* KTX역 정보 탭 */
  $(".tab-menu li").click(function () {
    let num = $(this).index();
    let move = 160 * num; //너비*순서 = 거리

    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let tabname = $(this).attr("data-alt");
    $(".tab-contents div").removeClass("active");
    $("#" + tabname).addClass("active");
  });

  function selectSt() {
    console.log('킅릭');
  }
});