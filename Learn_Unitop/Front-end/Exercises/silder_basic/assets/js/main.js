$(document).ready(function () {

    var src_img_click, src_img_first

    //4.Xử lý hiênt thị hnhf ảnh mặc định
        src_img_first = $('#list_thumb li:first-child img').attr('src')
        // console.log(src_img_first);
        $('#show img').attr('src', src_img_first);

        $('#list_thumb li:first-child').addClass('active');

   
    $('#list_thumb li a').click(function () {
     //3.Hiển thị hình ảnh được chọn
        //Bước 1: Lấy src từ hình ảnh được chọn
        src_img_click = $(this).children('img').attr('src');
        // console.log(src_img_click);
        //Bước 2:Gắn src lấy được cho src của #show
        $('#show img').attr('src', src_img_click);
        $('#list_thumb li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    });


});