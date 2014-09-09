head.ready(function() {

	// mob menu
	var menu_btn = $('.nav-btn'),
			menu = $('.nav_main');
	menu_btn.on('click', function () {
		menu.fadeToggle();
	});

	// team
	$('.js-team').on('click', function () {
		$(this).toggleClass('is-active');
		$(this).next().fadeToggle();
	});

	// dev	
	var dev = $('.js-dev'),
			dev_item = dev.find('.dev__item'),
			dev_popup = $('.dev-popup'),
			dev_close = dev_popup.find('.dev-popup__close');
	dev_item.on('click', function () {
		dev_popup.show();
		setTimeout(function () {
			dev_popup.addClass('is-open');
		}, 100);
		return false;
	});
	dev_close.on('click', function () {
		dev_popup.removeClass('is-open');
		setTimeout(function () {
			dev_popup.hide();
		}, 400);
	});

});