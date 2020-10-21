$(document).ready(function() {

	$('.menu a').click(function(event) {
	event.preventDefault();

	part = $(this).attr('href'); // lấy id của thẻ h2 tương ứng

	position = $(part).offset().top; // tìm vị trí thẻ h2
	//.offset(): Lấy tọa độ hiện tại của thành phần đầu tiên, 
	//hoặc thiết lập các tọa độ của từng thành phần trong tập hợp các thành phần phù hợp liên quan đến văn bản.

	$('html, body').animate({scrollTop: position},1400,'easeInOutSine');
	});
});