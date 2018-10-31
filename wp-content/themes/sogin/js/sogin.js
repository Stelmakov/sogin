$(document).ready(function(){
   $('.header_slider .arrow_next').click(function(){
        $('.header_slider .slider_inner').animate({
            left:"-=100%"
        });
   });
    $('.header_slider .arrow_prev').click(function(){
        $('.header_slider .slider_inner').animate({
            left:"+=100%"
        });
    });
    if (typeof baguetteBox !== 'undefined'){
        baguetteBox.run('.product_single .images');
    }
});