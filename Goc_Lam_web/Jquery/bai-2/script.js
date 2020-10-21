$(document).ready(function() { //khi html load xong hàm bắt đầu chạy
	
	// console.log('done');
	// + Selector: lực chọn phần tử cần xử lý
	// + Event: bắt sự kiện tương tác với phần tử selector
	// + Animate: hiệu ứng khi có sự kiện tương tác.
	$('button').click(function(event) {
		/* Act on the event */
		// console.log('done');
		$('h1').animate({marginLeft: 500},400); 
	}); /*end click button*/

});
