//accordion script
          $(document).ready(function(){


            $(".accordion").click(function() {
              var acc1 = $(this).hasClass('accordion-active');
              $(".accordion").each(function() {
                $(this).removeClass("accordion-active");
                var panel1 = $(this).next()[0];
                // panel1.classList.remove("panel-max");
                panel1.style.maxHeight = null;
              });
              if(acc1) {
                $(this).removeClass("accordion-active")
                var panel2 = $(this).next()[0];
                // panel2.classList.remove("panel-max");
                panel2.style.maxHeight = null;
              }
              else {
                $(this).addClass("accordion-active")
                var panel3 = $(this).next()[0];
                // panel3.classList.add("panel-max");
                panel3.style.maxHeight = panel3.scrollHeight + "px";
              }
            });

            $(".work-type").click(function() {
              $(".work-type").removeClass("work-selected");
              $(this).addClass("work-selected");
            });
        });


        $('.togather-checkbox-section').click(function() {
          $('.togather-checkbox-section .checkbox-inner').toggleClass('checked');
          if($('#togather-checkbox').prop('checked')){
            $('#togather-checkbox').prop('checked', false);
          }
          else {
            $('#togather-checkbox').prop('checked', true);
          }
        });

        $(function() {
  var loc = window.location.href; // returns the full URL
  if(/blog-detail/.test(loc) || /work-detail/.test(loc)) {
    $('.header').addClass('font-blue');
    $('.cart-white').addClass('no-disp');
    $('.cart-blue').removeClass('no-disp');
  }
});

$('.navbar-toggler').click(function() {
  $('.mobile-nav').addClass('open');
  $('body').addClass('no-scroll');
});

$('.mobile-nav-close').click(function() {
  $('.mobile-nav').removeClass('open');
  $('body').removeClass('no-scroll');
});


$('.accordion').click(function() {
  $('.accordion').not(this).find('.symbol').removeClass('trans-back');
  $('.accordion').not(this).find('.symbol-plus').removeClass('minus-sign');
  $('.accordion').not(this).find('.symbol-plus span').removeClass('no-disp');
  if($(this).find('.symbol').hasClass('trans-back')){
    $(this).find('.symbol').removeClass('trans-back');
    $(this).find('.symbol-plus').removeClass('minus-sign');
    $(this).find('.symbol-plus span').removeClass('no-disp');
  }else{
    $(this).find('.symbol').addClass('trans-back');
    $(this).find('.symbol-plus').addClass('minus-sign');
    $(this).find('.symbol-plus span').addClass('no-disp');
  }
});

$('.explore').click(function() {
  $('html, body').animate({
        scrollTop: $(this).closest('.hero').next().offset().top
    }, 100);
  // $(this).closest('.hero').next();
});

$(document).ready(function () {
  if(window.location.href.indexOf("work") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Work") {
      	$(this).addClass("page-selected");
      }
   });
  }
  if(window.location.href.indexOf("service") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Services") {
      	$(this).addClass("page-selected");
      }
   });
  }
  if(window.location.href.indexOf("about") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "About") {
      	$(this).addClass("page-selected");
      }
   });
 }
   if(window.location.href.indexOf("blog") > -1) {
     $(".header-link").removeClass("page-selected");
     $(".header-link").each(function() {
       if($(this).text() == "Blog") {
       	$(this).addClass("blog-selected");
       }
    });
  }
  if(window.location.href.indexOf("cart") > -1) {
      $(".header-link").removeClass("page-selected");
      $(".header-link").each(function() {
        if($(this).data("cart") == "cart") {
        	$(this).addClass("page-selected");
        }
     });
  }
  if(window.location.href.indexOf("contact") > -1) {
    $(".header-link").removeClass("page-selected");
    $(".header-link").each(function() {
      if($(this).text() == "Contact us") {
        $(this).addClass("contactUs-selected");
        $(this).find('span').removeClass('pink-dot-med');
        $(this).find('span').addClass('white-dot-med');
      }
   });
 }
});



  $(".text-fx").mousemove(function(event){

    const bounderies = $(this)[0].getBoundingClientRect();
    // Calculate the mouse coordinates relative to the hovered element
    let mouseXrelative = event.clientX - bounderies.left;
    let mouseYrelative = event.clientY - bounderies.top;

    console.log(bounderies.bottom);
    console.log(event.clientY);
    console.log($(this).scroll().top);

    let mouseXpct = Math.ceil(mouseXrelative / $(this)[0].clientWidth * 100);
    let mouseYpct = Math.ceil(mouseYrelative / $(this)[0].clientHeight * 100);

    $(this).find(".text-fx__bg")[0].style['-webkit-clip-path'] = `circle(150px at ${ mouseXpct }% ${ mouseYpct }%)`;
    $(this).find(".text-fx__bg")[0].style.clipPath = `circle(150px at ${ mouseXpct }% ${ mouseYpct }%)`;
  });
