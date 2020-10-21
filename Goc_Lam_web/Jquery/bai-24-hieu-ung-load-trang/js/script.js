$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	// $('.load').delay(1000).fadeOut('fast');
	$('.loader').delay(1000).fadeOut('fast');
});


// .fadeOut(): Ẩn các thành phần phù hợp với hiệu ứng mờ dần (fade).
// $(selector).fadeOut(speed,easing,callback)
// speed : tốc độ có 3 loại: mặc định 400, fast, slow
// easing: có swing -di chuyển chậm hơn ở đầu / cuối, nhưng nhanh hơn ở giữa
// 		linear  -di chuyển với tốc độ không đổi