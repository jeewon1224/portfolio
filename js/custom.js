// 메인 페이지의 타이핑 효과
var typed3 = new Typed(".type", {
  strings: ["Welcome!", "I'm Jeewon", "a Publisher"],
  typeSpeed: 50,
  backSpeed: 30,
  smartBackspace: true, // this is a default
  loop: true,
});

var isActive = false;

// typed.js의 addClass때문에 커서가 발생하는 문제
// 생성된 class를 숨겨서 해결
$(".typed-cursor").hide();




// swiper slider 옵션
var swiper = new Swiper('.swiper-container', {
  
    loop: true,
    // keyboard :true,
    allowTouchMove: true,
    autoplay: 
    {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      clickable : true,
        el: '.swiper-pagination',
    },
    
  });
  

  // 슬라이더 호버 시 자동 재생 멈춤
  // $(".swiper-slide").hover(

  //   function(){
  //   swiper.autoplay.stop();
  // }
  // , function(){
  //   swiper.autoplay.start();
  // }
  
  // );
  
 
// 풀페이지 옵션
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    navigation: true,
    navigationPosition: "right",
    keyboardScrolling: true,
    autoScrolling: true,
    controlArrows: true,
    afterRender: function () {
      $("#fullpage .section").each(function (index, value) {
        var id = $(this).attr("id");
        if ($(this).attr("data-anchor") != undefined) {
          $(this).attr("id", "fullpaged-" + id);
        }
      });
    },
    anchors: ["1st", "2st", "3st", "4st"],
    afterLoad: function (anchorLink, index) {

      if (anchorLink == "3st") {
        // 모달창 기능
        $(".view_btn").on("click", function () {
          $(".mask").addClass("active");
          $.fn.fullpage.setAllowScrolling(false); //active 클래스가 붙으면 풀페이지의 스크롤 기능이 막힘
          $(".swiper-button-next.nextBtn, .swiper-button-prev.prevBtn").css('z-index','0');
          $(".swiper-pagination").css('z-index','0'); // active 클래스가 붙으면 슬라이더의 페이지버튼 z-index가 0이 되어서 클릭이 불가능

          if($(".mask").hasClass("active")){
            swiper.autoplay.stop(); //active가 붙으면 슬라이더의 자동 재생 멈춤
            // swiper.allowTouchMove.disable;
            // swiper.keyboard.disable();

            
           
          }
        });

        

        // 모달창 닫기 기능
        function closeModal() {
          $(".mask").removeClass("active"); 
          $.fn.fullpage.setAllowScrolling(true);
          swiper.autoplay.start();
          $(".swiper-button-next.nextBtn, .swiper-button-prev.prevBtn").css('z-index','10');
          $(".swiper-pagination").css('z-index','10');
        }

        // 클릭,키보드 esc로 모달창 닫기
        $(".close, .mask").on("click", function () { 
          closeModal();
        });
        $(document).keyup(function (e) {
          if (e.keyCode == 27) {
            closeModal();
          }
        });

      }

    },
  });
});


// var swiper = new Swiper('.swiper-container', {
  
//   loop: true,
//   keyboard :true,
//   allowTouchMove: true,
//   autoplay: 
//   {
//     delay: 3000,
//     disableOnInteraction: true,
//   },
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   pagination: {
//     clickable : true,
//       el: '.swiper-pagination',
//   },
  
// });




// $(".swiper-slide").hover(

//   function(){
//   swiper.autoplay.stop();
// }
// , function(){
//   swiper.autoplay.start();
// }
// );


// $(".viewBtn").click(function(){
//   $(this).toggleClass('on');
//   //alert('abc');
//   if($(this).hasClass('on')){
//     swiper.autoplay.stop();
//   }
  
// });


// $(".viewBtn").click(function() {
//   (this).swiper.autoplay.stop();
// }, function() {
//   (this).swiper.autoplay.start();
// });
 

// if($('.mask').hasClass('active')){
//   swiper.allowTouchMove.false();
// }





// // 네비게이션 클릭 시 해당 페이지로 이동
// 	var speed = 500;	// 스크롤 스피드 수치로 사용할 변수

// 	let index = $(this).index();
// 	let offTop = $("section").eq(0).offset().top;
// 	let winHeight = $(window).height();

// $(".menu_list .menu__item1").click(function(){
//     // let index = $(this).index();
//     // let offTop = $("section").eq(index).offset().top;

//     //$("html,body").animate({scrollTop:offTop}, speed);
//     $("#fullpage").animate({scrollTop:offTop}, speed);

//   });

//   $(".menu_list .menu__item2").click(function(){
//     // let index = $(this).index();
//     // let offTop = $("section").eq(1).offset().top;

//     $("#fullpage").animate({top:-(offTop + winHeight)}, speed);

//   });
//   $(".menu_list .menu__item3").click(function(){
//     // let index = $(this).index();
//     // let offTop = $("section").eq(2).offset().top;

//     $("#fullpage").animate({top:-(offTop + winHeight*2)}, speed);

//   });
//   $(".menu_list .menu__item4").click(function(){
//     // let index = $(this).index();
//     // let offTop = $("section").eq(3).offset().top;

//     $("html,body").animate({scrollTop:offTop +winHeight*3}, speed);
//   });

// }
