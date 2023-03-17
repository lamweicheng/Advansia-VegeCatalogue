function loadPage(page, img_src) {
	var img = $('<img />');
	img.load(function () {
		 var container = $('.Advansia-Docs .p' + page);
		 img.css({ width: container.width(), height: container.height() });
		 img.appendTo($('.Advansia-Docs .p' + page));
		 container.find('.loader').remove();
	});

	img.attr('src', img_src); // Use img_src as the image source
}


function addPage(page, book) {
	var id, pages = book.turn('pages');

	var element = $('<div />', {});

	if (book.turn('addPage', element, page)) {
		 if (page < 45) {
			  element.html('<div class="gradient"></div><div class="loader"></div>');
			  
			  if (page == 1) {
					var img_src = 'pages/1.png'; // Set the first page source
			  } else if (page == 2) {
					var img_src = 'pages/2.png'; // Set the second page source
			  } else {
					var img_src = 'pages/' + (page) + '.png'; //Set the rest of the page source
			  }
			  
			  loadPage(page, img_src); // Pass img_src to the loadPage function
		 }
	}
}



function numberOfViews(book) {
	return book.turn('pages') / 2 + 1;
}


function getViewNumber(book, page) {
	return parseInt((page || book.turn('page'))/2 + 1, 10);
}


function moveBar(yes) {
	if (Modernizr && Modernizr.csstransforms) {
		$('#slider .ui-slider-handle').css({zIndex: yes ? -1 : 10000});
	}
}