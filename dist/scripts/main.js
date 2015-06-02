$(document).on('ready', function() {

		$('.page').hide();
		$('#home').show();

		$home = $('#home a')
		$albums = $('.navbar a')

		$home.click(directory)
		$albums.click(directory)

	function directory(e) {
		
		var href = $(this).attr('href');
		var $gallery = $(href);

		$('.page').hide();
		$gallery.show();
	};



});