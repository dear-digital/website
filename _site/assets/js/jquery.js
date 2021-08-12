//accordion script
          $(document).ready(function(){


            $(".accordion").click(function() {
              console.log("clicked");
              var acc1 = $(this).hasClass('accordion-active')
              console.log(acc1);
              $(".accordion").each(function() {
                $(this).removeClass("accordion-active");
                var panel1 = $(this).next()[0];
                console.log(panel1);
                panel1.classList.remove("panel-max");
              });
              if(acc1) {
                $(this).removeClass("accordion-active")
                var panel2 = $(this).next()[0];
                console.log(panel2);
                panel2.classList.remove("panel-max");
              }
              else {
                $(this).addClass("accordion-active")
                var panel3 = $(this).next()[0];
                console.log(panel3);
                panel3.classList.add("panel-max");
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


$('.mobile-nav-mid .accordion').click(function() {
  $(this).find('.symbol-plus').toggleClass('minus-sign');
  $(this).find('.symbol-plus span').toggleClass('no-disp');
});
