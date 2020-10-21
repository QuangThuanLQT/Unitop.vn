$(document).ready(function() {
		$(".hop-thoai").addClass('show');
		$(".background").addClass('show');

	// Phương thức setInterval() dùng để thiết lập một hàm nào đó  
	//		sẽ được thực thi  sau một khoảng thời gian xác định và hành động này được lập lại mãi mãi.

	// Phương thức clearInterval() dùng để kết thúc 
	//		việc thực thi lập lại của hàm được thiết lập trong phương thức setInterval()
	var banner = setInterval(function(){
		$(".hop-thoai").removeClass('show');
		$(".background").removeClass('show');
		console.log("chạy");
		clearInterval(banner);
	},2000);
	$(".open").click(function(event) {
		$(".hop-thoai").addClass('show');
		$(".background").addClass('show');
	});
	$(".close").click(function(event) {
		$(".hop-thoai").removeClass('show');
		$(".background").removeClass('show');
	});
	$(".background").click(function(event) {
		$(".hop-thoai").removeClass('show');
		$(".background").removeClass('show');
	});
});