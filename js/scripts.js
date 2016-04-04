
$(document).ready(function() {
	$('.gallerySection').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {enabled:true},
		image:{
			titleSrc: 'title'
		}
	});
})

