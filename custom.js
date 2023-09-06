$(document).ready(function(){
  /* Slick - main */
  
  /* Slick - banner */
  $(".banner-slide").slick({
    infinite: true,
    dots: false,
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
    autoplay : false,
    autoplaySpeed : 4500,
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
    $(this).find('.sub_all').css({'display':'flex'});
    $('.sub_bgbox').stop().slideDown(700,"easeOutBounce");
    $(this).find('.sub_all').stop().slideDown(700,"easeOutBounce");
  });
  $('.gnb .main').mouseleave(function(){
    $(this).find('.sub_all').stop().slideUp();
    $('.sub_bgbox').stop().slideUp();
  });

  /* #################### Main ###################### */
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
});