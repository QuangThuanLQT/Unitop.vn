
$(document).ready(function(){
    $("#icon-menu-respon").click(function(){
        $("#respon-menu").slideToggle(); //slideDown, slideUp, slideToggle
    });

    $("#icon-store").click(function(){
        $("#icon-store").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu").slideToggle();
    });

    $("#icon-store2").click(function(){
        $("#icon-store2").toggleClass("fa-angle-right fa-angle-down");
        $(".sub-menu_store").slideToggle();
    });

    $(window).resize(function(){
        //Nếu màn hình có độ rộng  lớn hơn 768px  thì responsive-menu  nó phải ẩn đi
        if ($(document).width() >= 768) {
            $("#respon-menu").css('display', "none");
        }
    });  
});