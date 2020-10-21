$(document).ready(function() {
   $('#btn-dangky').click(function(event) {
	    // $('#form-login').animate({marginLeft: -300,opacity: 0});
	    // $('#form-dangky').animate({marginLeft: 0,opacity: 1});
	    $('#form-login').addClass('hidden');
	    $('#form-dangky').removeClass('hidden');
   });
});