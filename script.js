$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('div').click(function() {
       $(this).toggle(1000);
   });

});

// when the HTML document loads, the code will select an HTML element and make it disappear.
// $(document).ready(function() {
//     $("div").fadeOut(1000);
// });

// will hide every <div> on the page as soon as you mouse over one.
// $(document).ready(function() {
//     $('div').mouseenter(function() {
//         $('div').hide();
//     });
// });

// would quickly fade the target element to 25% of its original opacity, making it very light-colored.
// $(document).ready(function() {
//     $('div').mouseenter(function() {
//         $('div').fadeTo('fast', 0.25);
//     });
// });


// will make the div darken when you mouseover and then lighten when you mouseleave
// $(document).ready(function() {
//     $('div').mouseenter(function() {
//         $('div').fadeTo('slow', 1.0);
//     });
//      $('div').mouseleave(function() {
//         $('div').fadeTo('fast', 0.5);
//     });
// });
