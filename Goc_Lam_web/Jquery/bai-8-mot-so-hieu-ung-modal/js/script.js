$(document).ready(function() {
	// dialog 1
	$('#open').click(function(event) {
		$('#dialog-1').addClass('show');
		$('.background').addClass('show');
	});
	$('#close').click(function(event) {
		$('#dialog-1').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-1').removeClass('show');
		$('.background').removeClass('show');
	});

	// dialog 2
	$('#open-2').click(function(event) {
		$('#dialog-2').addClass('show');
		$('.background').addClass('show');
	});
	$('#close-2').click(function(event) {
		$('#dialog-2').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-2').removeClass('show');
		$('.background').removeClass('show');
	});
	// dialog 3
	$('#open-3').click(function(event) {
		$('#dialog-3').addClass('show');
		$('.background').addClass('show');
	});
	$('#close-3').click(function(event) {
		$('#dialog-3').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-3').removeClass('show');
		$('.background').removeClass('show');
	});
	// dialog 4
	$('#open-4').click(function(event) {
		$('#dialog-4').addClass('show');
		$('.background').addClass('show');
	});
	$('#close-4').click(function(event) {
		$('#dialog-4').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-4').removeClass('show');
		$('.background').removeClass('show');
	});
	// dialog 5 - light box
	$('#dialog-5 img').click(function(event) {
		$('#dialog-5').toggleClass('show');
		$('.background').toggleClass('show');
	});
	$('#close-5').click(function(event) {
		$('#dialog-5').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-5').removeClass('show');
		$('.background').removeClass('show');
	});
	// dialog 6
	$('#open-6').click(function(event) {
		$('#dialog-6').addClass('show');
		$('.background').addClass('show');
	});
	$('#close-6').click(function(event) {
		$('#dialog-6').removeClass('show');
		$('.background').removeClass('show');
	});
	$('.background').click(function(event) {
		$('#dialog-6').removeClass('show');
		$('.background').removeClass('show');
	});

});