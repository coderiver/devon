head.ready(function() {

	// fullpage
	if (head.desktop) {
		var fullpage_el = $('.js-fullpage');
		if (fullpage_el.length) {
			$('#fullpage').fullpage({
				onLeave: function(index, nextIndex, direction){
					if (head.browser.ie && head.browser.version == 8) {}
					else {
						var header = $('.js-header');
						header.addClass('is-fixed');
						setTimeout(function () {
							header.addClass('is-visible');
						}, 100);
						if(nextIndex == '1') {
							header.removeClass('is-fixed');
							setTimeout(function () {
								header.removeClass('is-visible');
							}, 1000);
						};
						nav();
					}
				}
			});
		};
	};

	// nav
	function nav () {
		var nav_btn = $('.nav-btn'),
				nav_line = $('.nav-line'),
				nav = $('.js-nav'),
				nav_list = nav.find('.nav__list'),
				nav_act = nav.find('.nav__list.is-active');
		if (nav_act.length) {
			var nav_act_left = nav_act.position().left,
					nav_act_width = nav_act.outerWidth();
			nav_line.css({'left': nav_act_left, 'width': nav_act_width});
			nav_list.hover(function () {
				var this_nav_list_left = $(this).position().left,
						this_nav_list_width = $(this).outerWidth();
				nav_line.css({'left': this_nav_list_left, 'width': this_nav_list_width});
			}, function () {
				nav_line.css({'left': nav_act_left, 'width': nav_act_width});
			});
		}
		else {
			var nav_first_left = nav_list.first().position().left;
			nav_line.css('left', nav_first_left);
			nav_list.hover(function () {
				var this_nav_list_left = $(this).position().left,
						this_nav_list_width = $(this).outerWidth();
				nav_line.css({'left': this_nav_list_left, 'width': this_nav_list_width});
			}, function () {
				nav_line.css({'left': nav_first_left, 'width': 0});
			});
		};
	}
	nav();
	function nav_btn () {
		var nav_btn = $('.nav-btn'),
				nav = $('.js-nav');
		nav_btn.on('click', function () {
			if (!$(this).hasClass('is-open')) {
				nav_btn.addClass('is-open');
				nav.show();
				setTimeout(function () {
					nav.addClass('is-open');
				}, 1);
			}
			else {
				nav_btn.removeClass('is-open');
				nav.removeClass('is-open');
				setTimeout(function () {
					nav.hide();
				}, 300);
			}
		});
	}
	nav_btn();

	// team
	$('.js-team').on('click', function () {
		$(this).toggleClass('is-active');
		$(this).next().toggle(200);
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
	  var el = $('.js-history'),
	      link = el.find('.history__brands li'),
	      item = el.find('.history__text li');
	  link.removeClass('is-active');
	  link.on('click', function(){
	  	link.removeClass('is-active');
	  	$(this).addClass('is-active');
	  	item.hide();
	  	var index = $(this).index();
	  	item.eq(index).show();
	  	return false;
	  }).first().trigger('click');
	};
	history();

	// sl
	function sl () {
		var sl = $('.js-sl');
		if (sl.length) {
			var sl_top = sl.offset().top,
					scroll_top = $(window).scrollTop(),
					varh = 8000;
			if (sl_top <= scroll_top) {
				sl.addClass('is-fixed');
				var koef = (scroll_top - sl_top)/1000;
				function sl_remove_class () {
					sl.removeClass('sl-slide-1 sl-slide-2 sl-slide-3 sl-slide-4 sl-slide-5 sl-slide-6 sl-slide-7');
				}
				if (koef > 0) {
					sl_remove_class();
					sl.addClass('sl-slide-1');
				}
				if (koef > 1) {
					sl_remove_class();
					sl.addClass('sl-slide-2');
				}
				if (koef > 2) {
					sl_remove_class();
					sl.addClass('sl-slide-3');
				}
				if (koef > 3) {
					sl_remove_class();
					sl.addClass('sl-slide-4');
				}
				if (koef > 4) {
					sl_remove_class();
					sl.addClass('sl-slide-5');
				}
				if (koef > 5) {
					sl_remove_class();
					sl.addClass('sl-slide-6');
				}
				if (koef > 6) {
					sl_remove_class();
					sl.addClass('sl-slide-7');
				}
				if (koef > 7) {
					sl.addClass('sl-slide-8');
				}
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
		};
	}

	// header
	function header () {
		var body = $('body'),
				header = $('.js-header'),
				scroll_top = $(window).scrollTop();
		if (!body.hasClass('main-page')) {
			if (scroll_top > 0) {
				header.addClass('is-fixed');
				setTimeout(function () {
					header.addClass('is-visible');
				}, 100);
			}
			else {
				header.removeClass('is-fixed is-visible');
			}
			nav();
		};
	}

	// native select
	function native_select() {
	  var el = $('.js-select'),
	  		select = el.find('.select__el');
	  select.on('change', function(){
	  var option_selected = $(this).find('option:selected'),
	  		value_selected = option_selected.text();
	  		$(this).prev().text(value_selected);
		});
	};
	native_select();

	// dev anchors
	function dev_anchors () {
		var el = $('.js-dev').find('.dev__item'),
				info = $('.js-dev-info').find('.dev__item');
		el.on('click', function () {
			var index = $(this).index(),
					header = $('.js-header'),
					el_top = info.eq(index),
					wnd_width = $(window).width(),
					top = el_top.offset().top;
			if (wnd_width >= 980) {
				var top_bar = 70,
						header_diff = 99;
			}
			else {
				var top_bar = 0,
						header_diff = 0;
			}
			if (header.hasClass('is-fixed')) {
				var final_top = top - top_bar;
			}
			else {
				var final_top = top - top_bar - header_diff;
			};
			$('html, body').animate({
				scrollTop: final_top
			}, 500);
		})
	}
	dev_anchors();

	// scroll
	$(window).on('scroll touchmove mousewheel', function(){
		if (head.browser.ie && head.browser.version == 8) {}
		else {
			header();
			sl();
		}
	})

	// resize
	$(window).on('resize', function(){
		nav();
	})
	

});