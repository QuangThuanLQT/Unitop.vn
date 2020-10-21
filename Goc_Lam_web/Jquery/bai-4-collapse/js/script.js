$(document).ready(function() {
   $('.noi-dung').slideUp(); /*ẩn nội dung*/

   $('.khoi h3').on('click', function(event) {

      // ngăn chặn mặc định
      event.preventDefault();
      // đóng/ mở
      
      	$(this).next().slideToggle();

      // $(this).offset().top lấy vị trí của phần tử this

      	$('html, body').animate({scrollTop:$(this).offset().top},400);

   });

// quay về đầu trang
   $('#btn-top').click(function(event) {
      /* Act on the event */
      	$('html, body').animate({scrollTop:0},400);
      	$('.noi-dung').slideUp();
   });
});