// js
// wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();
  // aos js
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

// jq
$(document).ready(function(){
// counter pluging
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$("#num1").countMe(40,65);
$("#num2").countMe(40,65);
$("#num3").countMe(40,65);

});