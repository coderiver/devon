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

	// logist
	var logist = $('.js-logist'),
			logist_pic = logist.find('.logist__pic'),
			logist_category = logist.find('.logist__category'),
			logist_title = logist.find('.logist__title'),
			logist_text = logist.find('.logist__text');
	logist_pic.on('click', function () {
		$(this).addClass('is-moved');
	});
	logist_title.on('click', function () {
		$(this).parent().next().removeClass('is-moved');
	});
	logist_category.on('click', function () {
		if (!$(this).hasClass('is-active')) {
			logist_category.removeClass('is-active');
			logist_text.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		};
	});

	// scroll
	$('body').on('scroll touchmove mousewheel', function(e){
		var sl = $('.js-sl'),
				sl_top = sl.offset().top,
				scroll_top = $(window).scrollTop();
		if (sl_top <= scroll_top) {
			e.preventDefault();
			e.stopPropagation();
			return false;
		};
	})
	

});