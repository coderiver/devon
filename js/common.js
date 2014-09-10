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

	// threed	
	var threed = $('.js-threed'),
			threed_link = threed.find('.dev__item'),
			threed_el = threed.find('.dev__el'),
			threed_close = threed.find('.dev__close');
	threed_link.on('click', function () {
		var index = $(this).index();
		threed_el.hide();
		threed_el.eq(index).show();
		threed.addClass('is-open');
		return false;
	});
	threed_close.on('click', function () {
		threed.removeClass('is-open');
		return false;
	});

});