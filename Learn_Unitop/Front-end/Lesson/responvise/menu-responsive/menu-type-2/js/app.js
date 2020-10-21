
$(document).ready(function(){
    $("#icon-menu-responsive").click(function(){
        $("#respon-menu").slideToggle(); //slideDown, slideUp, slideToggle
    });

    $(window).resize(function(){
        //Nếu màn hình có độ rộng  lớn hơn 768px  thì responsive-menu  nó phải ẩn đi
        if ($(document).width() >= 768) {
            $("#respon-menu").css('display', "none");
        }
    });  
});