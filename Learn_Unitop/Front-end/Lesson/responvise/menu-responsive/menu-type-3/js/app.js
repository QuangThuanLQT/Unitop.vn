
$(document).ready(function(){
    $("#icon-menu-responsive").click(function(){
       $("#site").toggleClass('open-respon-menu'); 
    });

    $(window).resize(function(){
        //Nếu màn hình có độ rộng  lớn hơn 768px  thì responsive-menu  nó phải ẩn đi
        if ($(document).width() >= 768) {
            $("#site").removeClass('open-respon-menu');
        }
    });  
});