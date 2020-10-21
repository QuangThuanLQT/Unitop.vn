
$(document).ready(function(){
    //Selector
    //Sự kiện
    //Hiệu ứng
    //Phuongvw thức khác

    // alert("Nội dung được hiển thị bởi Jquery");
    $("a#change_color").click(function(){
        // alert("Đã click");   

        $("h1").css('color', 'red');

        return false; // vô hiệu hoá cho việc load trang
    });
});