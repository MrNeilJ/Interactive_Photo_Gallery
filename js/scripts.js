$(document).ready(function() {
	$('.photoGallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {enabled:true},
		image:{
			titleSrc: 'title'
		}
	});
})