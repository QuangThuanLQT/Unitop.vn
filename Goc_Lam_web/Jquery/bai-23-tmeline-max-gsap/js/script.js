$(document).ready(function() {
	timeline = new TimelineMax();
	timeline.to($('.khoi'),1,{x:300})
	.to($('.khoi'),1,{y:300})
	.to($('.khoi'),2,{x:-300},"+=1");
	// dừng hiệu ứng
	$('#stop').click(function(event) {
		timeline.stop();
	});
	// tiếp tục hiệu ứng
	$('#play').click(function(event) {
		timeline.play();
	});
	// đi ngược lại
	$('#chay-nguoc-lai').click(function(event) {
		timeline.reverse();
	});
});


// Các hàm được sử dụng từ thư viện TimelineMax
// + Hàm khởi tạo new TimelineMax(), để sử dụng TimelineMax, các bạn cần khởi tạo bằng hàm dựng này.

// + Hàm to(phần tử được chọn,thời gian,{hiệu ứng},”khoảng cách 2 chuyển động”) 
	//dùng để xác định chuyển động. Hiệu ứng trong hàm là vị trí cuối cùng. 
	//Có thể viết nối tiếp các hàm to để tạo thành chuỗi chuyển động. Nếu dùng TweenMax, 
	//các bạn dùng thuộc tính delay trong phần hiệu ứng để định thời gian chuyển động. 
	//Trong TimelineMax, các bạn định thời gian bằng cách thêm 1 thuộc tính phía sau 
	//hiệu ứng như cú pháp bên trên.

// + Hàm stop(): dừng chuyển động.

// + Hàm play(): chạy hiệu ứng.

// + Hàm reverse(): đảo ngược hiệu ứng.