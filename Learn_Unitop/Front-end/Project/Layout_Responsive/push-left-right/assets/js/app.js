
$(document).ready(function(){
    $("#icon-menu-respon").click(function(){
        $("#site").toggleClass("open-respon-menu");
        $("#icon-menu-respon").toggleClass("fa-bars fa-times");
    });

    $("#icon-store").click(function(){
        $("#icon-store").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu").slideToggle();
    });

    $("#icon-store2").click(function(){
        $("#icon-store2").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu_store").slideToggle();
    });

    $("#wp-content").click(function() {
        $('#site').removeClass('open-respon-menu');
        $("#icon-menu-respon").removeClass('fa-times').addClass('fas fa-bars');
    });

    $(window).scroll(function() {
        $('#site').removeClass('open-respon-menu');
        $("#icon-menu-respon").removeClass('fa-times').addClass('fas fa-bars');
    });


    $(window).resize(function(){
        //Nếu màn hình có độ rộng  lớn hơn 768px  thì responsive-menu  nó phải ẩn đi
        if ($(document).width() >= 768) {
            $("#site").removeClass('open-respon-menu');
            $("#icon-menu-respon").removeClass('fa-times').addClass('fas fa-bars');
        }
    });  
});