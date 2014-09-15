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
		$(this).toggleClass('is-active');
		$(this).next().slideToggle();
	});

	// history
	function history(){
	  var el = $('.js-history');
	      	link = el.find('.history__brands li'),
	      	item = el.find('.history__text li');
	  link.removeClass('is-active');
	  link.on('click', function(){
	  	link.removeClass('is-active');
	  	$(this).addClass('is-active');
	  	item.hide();
	  	var index = $(this).index();
	  	item.eq(index).fadeIn();
	  	return false;
	  }).first().trigger('click');
	};
	history();

	// scroll
	$(window).on('scroll touchmove mousewheel', function(){
		var sl = $('.js-sl'),
				sl_top = sl.offset().top,
				scroll_top = $(window).scrollTop(),
				varh = 8000;
		if (sl_top <= scroll_top) {
			sl.addClass('is-fixed');
			var koef = (scroll_top - sl_top)/1000;
			koef = Math.round(koef);
			if (koef > 0) {
				sl.removeClass('sl-slide-1 sl-slide-2 sl-slide-3 sl-slide-4 sl-slide-5 sl-slide-6 sl-slide-7');
				sl.addClass('sl-slide-'+koef);
			};
			if (koef == 8) {
				sl.addClass('sl-slide-7');
			};
		}
		else {
			sl.removeClass('sl-slide-1 sl-slide-2 sl-slide-3 sl-slide-4 sl-slide-5 sl-slide-6 sl-slide-7 sl-slide-8');
			sl.removeClass('is-fixed');
		};
		if ((sl_top + varh) <= scroll_top) {
			sl.addClass('is-absolute');
		}
		else {
			sl.removeClass('is-absolute');
		}
	})
	

});