$(document).ready(function() {
	$('.btn-open').click(function(event) {
		$('.hop-thoai').addClass('hien-ra');
		$('.nen-mo').addClass('hien-ra');
	});
	$('.btn-close').click(function(event) {
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
	$('.nen-mo').click(function(event) {
		$('.hop-thoai').removeClass('hien-ra');
		$('.nen-mo').removeClass('hien-ra');
	});
});

$(document).ready(function(){
	$('#btn_open').click(function(){
		$('.hop_thoai').addClass('hien_ra');
		$('.nen_mo').addClass('hien_ra');

	});

	$('#btn_close').click(function(){
		$('.hop_thoai').removeClass('hien_ra');
		$('.nen_mo').removeClass('hien_ra');
	});

	$('.nen_mo').click(function(event) {
		$('.hop_thoai').removeClass('hien_ra');
		$('.nen_mo').removeClass('hien_ra');
	});

});