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
    $('.hamburger').on('click',function(){
        if($(this).hasClass('is-active')){
            $(this).removeClass('is-active')
        } else{
            $(this).addClass('is-active')
        }
    });
    if ($(window).width() < 768){
        $('#menu-footer-menu .menu-item-has-children').eq(0).append($('#menu-footer-menu .menu-item-has-children').eq(1))
    }
    if ($(window).width() < 768 && $(window).width() > 500){
        $('.main_categories_mobile .category').eq(0).after($('.main_categories_mobile .category').eq(2));
        $('.main_categories_mobile .category').eq(0).css('width','39%').css('margin-right','1%');
        $('.main_categories_mobile .category').eq(1).css('width','59%').css('margin-left','1%').css('height', $('.main_categories_mobile .category').eq(0).height());
        $('.main_categories_mobile .category').eq(1).find('.back').css('margin-top','-5%');
        $('.main_categories_mobile .category').eq(3).after($('.main_categories_mobile .category').eq(5));
        $('.main_categories_mobile .category').eq(3).css('width','43%').css('margin-right','1%');
        $('.main_categories_mobile .category').eq(4).css('width','55%').css('margin-left','1%').css('height', $('.main_categories_mobile .category').eq(3).height());
        $('.main_categories_mobile .category').eq(4).find('.back').css('height', '100%');
    }
});
