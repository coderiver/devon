head.ready(function() {

	// mob menu
	var menu_btn = $('.nav-btn'),
			menu = $('.nav_main');
	menu_btn.on('click', function () {
		menu.fadeToggle();
	});

});