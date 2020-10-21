$(document).ready(function() {
	$('ul.menu li').click(function(event) {
		// var _type = $(this).attr('type');
		var _type = $(this).data('type');
		var _title = $(this).text(); // lấy text từ thẻ
		console.log(_type);
		$('h1.title').text(_title); // thêm text vào thẻ
		$('.content img').each(function() {
			// .hasClass('Tên lass'): Xác định thành phần có chứa class nhất định nào đó hay không.
			if($(this).hasClass(_type)){
				$(this).removeClass('hidden');
				$(this).addClass('bounceInUp animated');
			}else {
				$(this).addClass('hidden');
				$(this).removeClass('bounceInUp animated');
			}
		});
	});
});