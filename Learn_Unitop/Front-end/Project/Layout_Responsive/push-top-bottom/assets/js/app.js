
$(document).ready(function(){
    $("#icon-menu-respon").click(function(){
        $("#respon-menu").slideToggle(); //slideDown, slideUp, slideToggle
    });

    $("#icon-store").click(function(){
        $("#icon-store").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu").stop().slideToggle();
        return false;
    });

    $("#icon-store2").click(function(){
        $("#icon-store2").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu_store").stop().slideToggle();
        return false;
    });

    $("#wp-content").click(function() {
        $('#respon-menu').slideUp();
    });


    $(window).resize(function(){
        //Nếu màn hình có độ rộng  lớn hơn 768px  thì responsive-menu  nó phải ẩn đi
        if ($(document).width() >= 768) {
            $("#respon-menu").css('display', "none");
        }
    });  

    $('#wrapper li a').click(function(e) {
        if ($(this).hasClass('clicked')) {
            $(this).removeClass('clicked').next('ul').slideUp(500);
        } else if ($(this).parents().siblings('a').hasClass('clicked')) {
            $('.clicked').slideDown();
            $(this).addClass('clicked').next('ul').slideDown(500);
        } else {
            $('#wrapper li a').removeClass('clicked').next('ul').slideUp(500);
            $(this).addClass('clicked').next('ul').slideDown(500);
        }
    });
});