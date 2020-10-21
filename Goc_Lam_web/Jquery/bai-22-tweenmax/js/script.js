$(document).ready(function() {
	// hieu ung 1 goc la 0
	TweenMax.to($('.khoi-1'),1,{x:200,opacity:0});
	// hieu ung 2 cach 1s
	TweenMax.from($('.khoi-2'),2,{scale:2,opacity:0.5,delay:1});
	// hieu ung 3 cach 1s
	TweenMax.fromTo($('.khoi-3'),2,{y:200,opacity:0.3,delay:2},{y:-200,opacity:1});
	TweenMax.staggerTo($('.khoi-4'),1,{y:150,opacity:0},0.2);
	TweenMax.staggerFrom($('.khoi-5'),2,{y:150,opacity:0,ease: Bounce.easeOut},0.5);
});


// Một số hàm được sử dụng từ thư viện TweenMax

//+ Hàm TweenMax.to(phần tử được chọn,thời gian,{hiệu ứng}) dùng để xác định chuyển động. 
	//Hiệu ứng trong hàm là vị trí cuối cùng.

//+ Hàm TweenMax.from(phần tử được chọn,thời gian,{hiệu ứng}) dùng để xác định chuyển động. 
	//Hiệu ứng trong hàm là vị trí ban đầu.

//+ Hàm TweenMax.fromTo(phần tử được chọn,thời gian,{hiệu ứng 1},{hiệu ứng 2}) 
	//dùng để xác định chuyển động từ vị trí 1 đến vị trí 2.

//+ Hàm TweenMax.staggerTo(phần tử được chọn,thời gian,{hiệu ứng}, thời gian giữa các phần tử) 
	//dùng để xác định chuyển động của chuỗi các phần tử. Các phần tử sẽ chuyển động liên tiếp nhau 
	//và cách nhau 1 khoảng thời gian. Hiệu ứng trong hàm là vị trí cuối cùng.

//+ Hàm TweenMax.staggerFrom(phần tử được chọn,thời gian,{hiệu ứng}, thời gian giữa các phần tử) 
	//dùng để xác định chuyển động của chuỗi các phần tử. Các phần tử sẽ chuyển động liên tiếp nhau 
	//và cách nhau 1 khoảng thời gian. Hiệu ứng trong hàm là vị trí ban đầu.