 
 /*for lazy load for videoes (yotube and others)*/
  function init() {
var vidDefer = document.getElementsByClassName('myVideo');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }

/*timeout animation class add*/
function timeout_funct_animation() {
  setTimeout(function() {
    $("body").addClass('animatations');
  }, 800);
}




/*browser media query*/
function msieversion()
{
    if (navigator.userAgent.indexOf('Edge') >= 0) {
        $('body').addClass('inter-explrorer');
    } else { }
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('body').addClass('firefox');
    }
    else { }
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $('body').addClass('safari');
    }

    /*IE 11*/
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
       $('body').addClass('IE');
    }
    else  {}
}

/*Fixed navigation and bottom arrow*/
function visible_scroll_up(){
    /*visible scroll up arrow */
      if ($(window).scrollTop() > 300) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }

    /*hidden opt*/

    var $same_content = $('.same_content').height() - 200;

     if ($(window).scrollTop() > $same_content) {
      $(".pos_right_button").addClass('pos_right_button_added');
    } else {
     $(".pos_right_button").removeClass('pos_right_button_added');
    }

    /*fixed navigation*/
    if ($(window).scrollTop() > 120) {
      $('#navbar').addClass('fixed-nav-top');
      $('.app-container').addClass('top_animate');
    } else {
      $('#navbar').removeClass('fixed-nav-top');
      $('.app-container').removeClass('top_animate');
    }
}


/*scrol Up*/
function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 600, 'linear');
} 

function goDown() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('.donwPosition');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop - 100}, 600, 'linear');
}

function how_we_do_action() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('.how_we_do_action');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop - 100}, 600, 'linear');
}

function why_work_with_action() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('.why_work_with_action');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop - 100}, 600, 'linear');
}


function onScrollAnimation(){

            var $window = $(window);
            var window_top_position = $window.scrollTop() + 300;

            var $window_banner = $(window);
            var window_top_position_banner = $window_banner.scrollTop();
       
           /*services*/

              /*start*/
            var $home_banner = $(".midle");
            if ($home_banner.length){
                var window_offset = $home_banner.offset().top;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $('.box2').css({
                        transform: 'translate3d(0px, ' + (window_top_position_banner / 20) + 'px, 0)'
                    });

                        $('.box1').css({
                        transform: 'translate3d(0px, ' + (- window_top_position_banner / 20) + 'px, 0)'
                    });


                }
                else{
                    $(".box2, .box1").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                     $(".box2 .box1").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                     $(".box2 .paralax_img_inner").css({
                        'opacity': 1,  transform:  'none'
                    });
     
                }

                /*end*/


                     /*start*/
            var $home_section_2 = $(".home_section_2");
            if ($home_section_2.length){
                var window_offset = $home_section_2.offset().top + 300;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                   $(".home_sec2_head").css({
                        transform: 'translate3d(0px, ' + (-window_top_position_banner / 40) + '%, 0)'
                    });

                   $(".home_section_2 .row").css({
                        transform: 'translate3d(0px, ' + (window_top_position_banner / 85) + '%, 0)'
                    });

                  $(".home_section_2 .right_content_img img").css({
                        transform: 'translate3d(0px, ' + (-window_top_position_banner / 50) + '%, 0)'
                    });

                }
                else{
                 $(".home_sec2_head, .home_section_2 .row, .home_section_2 .right_content_img img").css({
                        'opacity': 1,  transform:  'none'
                    });
     

                }
              }

               else{
           $(".home_sec2_head, .home_section_2 .row, .home_section_2 .right_content_img img").css({
                        'opacity': 1,  transform:  'none'
                    });

                }
              }

              else{
        $(".home_sec2_head, .home_section_2 .row, .home_section_2 .right_content_img img").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

                /*end*/

                      /*start*/
            var $home_section_3 = $(".home_section_3");
            if ($home_section_3.length){
                var window_offset = $home_section_3.offset().top + 400;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                   $(".parralax_text").css({
                        transform: 'translate3d(0px, ' + (window_top_position_banner / 100) + '%, 0)'
                    });
                   

                }
                else{
                    $(".parralax_text").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                   $(".parralax_text").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                    $(".parralax_text").css({
                        'opacity': 1,  transform:  'none'
                    });
     
                }

                /*end*/


            var $home_section_5 = $(".scroll_anim");
            if ($home_section_5.length){
                var window_offset = $home_section_5.offset().top + 200;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $(".member_info").css({
                            transform: 'translate3d(0px, ' + ( - window_top_position_banner / 40) + 'px, 0)'
                    });
                   

                }
                else{
                     $(".member_info").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                  $(".member_info").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                    $(".member_info").css({
                        transform:  'none'
                    });
     
                }

                /*end*/



            var $home_section_7 = $(".home_section_7");
            if ($home_section_7.length){
                var window_offset = $home_section_7.offset().top + 200;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $(".left_content").css({
                            transform: 'translate3d(0px, ' + (-window_top_position_banner / 60) + 'px, 0)'
                    });
                   
                   $(".right_content_img").css({
                            transform: 'translate3d(0px, ' + (window_top_position_banner / 60) + 'px, 0)'
                    });

                }
                else{
                     $(".left_content, .right_content_img").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                      $(".left_content, .right_content_img").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                     $(".left_content, .right_content_img").css({
                        transform:  'none'
                    });
     
                }

                /*end*/


            var $inner_banner = $(".inner_banner");
            if ($inner_banner.length){
                var window_offset = $inner_banner.offset().top + 200;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $(".inner_banner .container").css({
                            transform: 'translate3d(0px, ' + (-window_top_position_banner / 10) + 'px, 0)'
                    });
                   
                     $(".inner_bg").css({
                            transform: 'translate3d(0px, ' + (window_top_position_banner / 10) + 'px, 0)'
                    });

                }
                else{
                     $(".inner_banner .container, .inner_bg").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                    $(".inner_banner .container, .inner_bg").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                    $(".inner_banner .container, .inner_bg").css({
                        transform:  'none'
                    });
     
                }

                /*end*/




             var $our_team = $(".our_team");
            if ($our_team.length){
                var window_offset = $our_team.offset().top + 200;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $(".our_team_layer").css({
                         transform: 'translate3d(0px, ' + (-window_top_position_banner / 10) + 'px, 0)'
                    });
                   
            

                }
                else{
                     $(".our_team_layer").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                    $(".our_team_layer").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                    $(".our_team_layer").css({
                        transform:  'none'
                    });
     
                }

                /*end*/

           var $lets_talk = $("#who_we_are .lets_talk");
            if ($lets_talk.length){
                var window_offset = $lets_talk.offset().top + 200;
                 if (window_offset <= window_top_position) {
                   
                var width = $(window).width();
                if(width >= 767){

                    $(".who_we_are_layer").css({
                        transform: 'scale(' + (100 + window_top_position_banner / 50) / 200 + ')'
                    });
                   
            

                }
                else{
                     $(".who_we_are_layer").css({
                        'opacity': 1,  transform:  'none'
                    });
                }

            }

               else{
                    $(".who_we_are_layer").css({
                        'opacity': 1,  transform:  'none'
                    });

                }

        }

              else{
                    $(".who_we_are_layer").css({
                        transform:  'none'
                    });
     
                }

                /*end*/
               
}

(function () {
  $('.burger').on('click', function() {
    $("body").toggleClass("fixed-pos");
    //$(this).toggleClass('animate');
    $("nav").toggleClass("bigg");
         var mobileNav = $('.mobile-nav');
         mobileNav.toggleClass('showw');
  
  })
})();





/*
(function () {
  $('.burger').on('click', function() {
    $("body").toggleClass("fixed-pos");
    $(this).toggleClass('animate');
    $("nav").toggleClass("bigg");
         var mobileNav = $('.mobile-nav');
         mobileNav.toggleClass('showw');
  
  })
})();*/

$(document).ready(function()
{

  $(".mobile_ul a").click(function(){

    $('body').removeClass('fixed-pos');
    $('body').fadeIn();
    $('#burger').removeClass('animate');
    $('.mobile-nav').removeClass('showw');
     $("nav").toggleClass("bigg");
  });


   var url = window.location.pathname;
   /* if (url == "/") {
        url = "index.aspx";
    }*/

   var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('.desktop-menu li a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('highlighted_menu');
        }
    });



//     $(document).ready(function() {
//   if ( $(window).width() < 992 ) {
//     startCarousel();
//   } else {
//     $('.owl-carousel').addClass('off');
//   }
// });

// $(window).resize(function() {
//     if ( $(window).width() < 992 ) {
//       startCarousel();
//     } else {
//       stopCarousel();
//     }
// });

// function startCarousel(){
//   $("#client").owlCarousel({
//      navigation : true, // Show next and prev buttons
//      slideSpeed : 500,
//      margin:10,
//      paginationSpeed : 400,
//      autoplay:true,
//      items : 4,
//      itemsDesktop : false,
//      itemsDesktopSmall : false,
//      itemsTablet: false,
//      itemsMobile : false,
//      loop:false,
//      dots:true,
//      nav:false,
//      responsive:{ 
//       0:{items:1},
//       420:{items:2},
//       600:{items:4,autoplay:true}
//       }
//   });
// }

// function stopCarousel() {
//   var owl = $('.owl-carousel');
//   owl.trigger('destroy.owl.carousel');
//   owl.addClass('off');
// }



//     $(document).ready(function() {
//   if ( $(window).width() < 992 ) {
//     startCarousel2();
//   } else {
//     $('.owl-carousel').addClass('off');
//   }
// });

// $(window).resize(function() {
//     if ( $(window).width() < 992 ) {
//       startCarousel2();
//     } else {
//       stopCarousel2();
//     }
// });

// function startCarousel2(){
//   $("#client2").owlCarousel({
//      navigation : true, // Show next and prev buttons
//      slideSpeed : 500,
//      margin:10,
//      paginationSpeed : 400,
//      autoplay:true,
//      items : 4,
//      itemsDesktop : false,
//      itemsDesktopSmall : false,
//      itemsTablet: false,
//      itemsMobile : false,
//      loop:false,
//      dots:true,
//      nav:false,
//      responsive:{ 
//       0:{items:1},
//       420:{items:2},
//       600:{items:4,autoplay:true}
//       }
//   });
// }

// function stopCarousel2() {
//   var owl2 = $('.owl-carousel');
//   owl2.trigger('destroy.owl.carousel');
//   owl2.addClass('off');
// }

/*
      var $owl_client = $("#owl_client");
      if ($owl_client.length){

        $owl_client.owlCarousel({
        smartSpeed: 1000,autoplay:true,dots:false,mouseDrag:false,touchDrag:false,nav:false,loop:true, 
          responsive:{ 0:{items:1}, 600:{items:3}, 1200:{items:6} }
         });

    }




      var $owl_testimonial = $("#owl_testimonial");
      if ($owl_testimonial.length){

        $owl_testimonial.owlCarousel({
         smartSpeed: 1000,autoplay:true,dots:true,mouseDrag:false,touchDrag:false,nav:false,loop:true, 
          responsive:{ 0:{items:1}, 600:{items:1}, 1200:{items:1} }
         });

    }



      var $owl_company_logo = $("#owl_company_logo");
      if ($owl_company_logo.length){
          if ($(window).width() < 992)
          {
             $owl_company_logo.owlCarousel({
           smartSpeed: 1000,autoplay:false,dots:false,nav:false,loop:true, 
            responsive:{ 0:{items:1}, 450:{items:3,margin:5}, 767:{items:4} }
           });
          }
             else {
        }

    }
*/

    




  /*animation class add function*/
  timeout_funct_animation();

  /*Loader function*/
  // timeout_funct_loader();

  /*browser media function*/
  msieversion();


 
 /*scrol up function call */

  $('.scroll-top-wrapper').on('click', scrollToTop);
  $('.goDown').on('click', goDown);
  $('.how_we_do_trigger').on('click', how_we_do_action);
  $('.why_work_with_trigger').on('click', why_work_with_action);

  


});   



 $(window).scroll(function() {
       /*visible arrow and fixed navigation function call*/
  visible_scroll_up();

  /*on scroll parralax effect on jquery function call*/
  onScrollAnimation();

});




function toggleChevron(e) {
  
    $(e.target)
        .prev('.panel-heading').find(".accordion-toggle").toggleClass("nelo")
        .next("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion1').on('hidden.bs.collapse', toggleChevron);
$('#accordion1').on('shown.bs.collapse', toggleChevron);





/*Heigh equal*/

var matchHeight = function () {
  
  function init() {
    eventListeners();
    matchHeight();
  }
  
  function eventListeners(){
    jQuery(window).on('resize', function() {
      matchHeight();
    });
  }
  
  function matchHeight(){
    var groupName = jQuery('[data-match-height]');
              
    var groupHeights = [];
    
    groupName.css('min-height', 'auto');
    
    groupName.each(function() {
      groupHeights.push(jQuery(this).outerHeight());
    });
    
    var maxHeight = Math.max.apply(null, groupHeights);
    groupName.css('min-height', maxHeight);
  };
  
  return {
    init: init
  };
  
} ();




var matchHeight2 = function () {
  
  function init() {
    eventListeners2();
    matchHeight2();
  }
  
  function eventListeners2(){
    jQuery(window).on('resize', function() {
      matchHeight2();
    });
  }
  
  function matchHeight2(){
    var groupName = jQuery('[data-match-height2]');
              
    var groupHeights = [];
    
    groupName.css('min-height', 'auto');
    
    groupName.each(function() {
      groupHeights.push(jQuery(this).outerHeight());
    });
    
    var maxHeight = Math.max.apply(null, groupHeights);
    groupName.css('min-height', maxHeight);
  };
  
  return {
    init: init
  };
  
} ();


jQuery(document).ready(function() {
  matchHeight.init();
  matchHeight2.init();

});





$("document").ready(function(){

/*calculator temporary function*/

$("#sub_div").click(function(){
  $(".cal_body_result").show();
  $(".cal_body_by_default").hide();
});

$("#edit_btn").click(function(){
  $(".cal_body_result").hide();
  $(".cal_body_by_default").show();
});


});




$(function(){

  var scroll_fixed_start = $(".scroll_fixed_start");
var scroll_fixed_end = $(".scroll_fixed_end");

/*
if (scroll_fixed_start.length){
  
 $(window).on('scroll', function() {

            if ($(window).scrollTop() >= $(scroll_fixed_start).offset().top - 150 ) { 
                  if ($(window).scrollTop() <= $(scroll_fixed_end).offset().top - 300 ) { 
                 $(".pos_plus_btn").addClass("fixed_posed");
            
                } 
                else{
                  $(".pos_plus_btn").removeClass("fixed_posed");
                }
            } 
            
            else{
               $(".pos_plus_btn").removeClass("fixed_posed");
            }

            });


}

   else{
               $(".pos_plus_btn").removeClass("fixed_posed");
            }*/

            

 var box_parallax_start = $(".blog_posi");
 var box_parallax_end = $(".first_span_left");

var $window_banner = $(window);
var window_top_position_banner = $window_banner.scrollTop() ;

 if (box_parallax_start.length){
 $(window).scroll(function() {


            if ($(window).scrollTop() >= $(box_parallax_start).offset().top - 300 ) { 
   
                  if ($(window).scrollTop() <= $(box_parallax_end).offset().top - 300 ) { 
                   $(".blog_detail_main_cont").css({
                        transform: 'translate3d(0px, ' + ( -window_top_position_banner / 30) + '%, 0) '
                    });
                //$(".blog_detail_main_cont").removeClass("box_parallax_up");
                } 
                else{
                   $(".blog_detail_main_cont").css({transform:  'none'});
                    $(".blog_detail_main_cont").addClass("box_parallax_up");
                   $(".blog_body_details").addClass("blog_body_details_paralax");
                }
            } 
            
            else{
                $(".blog_detail_main_cont").css({transform:  'none'});
                    $(".blog_detail_main_cont").removeClass("box_parallax_up");
                       $(".blog_body_details").removeClass("blog_body_details_paralax");
                  
            }


       

            });

   }



});




/*

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 119)
                }, 1000);

            }
        }
    });
});*/


$(document).ready(function () {

    var url = window.location.pathname,
       urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
    // now grab every link from the navigation
    $('nav a, .mobile_ul a').each(function () {
        // and test its normalized href against the url pathname regexp
        if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
            $(this).addClass('highlighted_menu');
        }
    });

  });

var isAlreadyRun = false;

$(window).scroll( function(){

    $('.counter_div').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > ( bottom_of_object + 20 )  ){
        if (!isAlreadyRun) {
          $('.count_number').each(function () {
                
                  $(this).prop('Counter', 0).animate({
                      Counter: $(this).text()
                  }, {
                          duration: 3500,
                          easing: 'swing',
                          step: function (now) {
                              $(this).text(Math.ceil(now));
                          }
                      });
                });
        }
                isAlreadyRun = true;
            }
    }); 

});