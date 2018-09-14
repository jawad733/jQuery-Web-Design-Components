$(document).ready(function () {
	//j-accordian functions
	//Initially all the accordian items remains closed
	$('.j-accordian .j-accordian-item .j-accordian-body').css("display","none");

	$('.j-accordian .j-accordian-item .j-accordian-header').click(function () {

		let collapsedIcon = 'fa-angle-double-right';
		let nonCollapsedIcon = 'fa-angle-double-down';
		let isCollapsed = $(this).next().is(":hidden");

		if(isCollapsed) {

			$(this).parent().prevAll().children('.j-accordian-body').slideUp(200);
			$(this).parent().nextAll().children('.j-accordian-body').slideUp(200);
			$(this).parent().prevAll().find('i').addClass(collapsedIcon).removeClass(nonCollapsedIcon);
			$(this).parent().nextAll().find('i').addClass(collapsedIcon).removeClass(nonCollapsedIcon);
			$(this).next().show(200);
			$(this).children('i').addClass(nonCollapsedIcon).removeClass(collapsedIcon);

		} else {
			
			$(this).next().hide(200);
			$(this).children('i').addClass(collapsedIcon).removeClass(nonCollapsedIcon);

		}
	});

	//j-modal functions
	//clicking on modal button
	$(".modal-button").click(function(){
		$('.j-modal').css({"display":"block"}).find('.j-modal-content').css({"display":"block"});
	});

	//close icon on top right of modal
	$('.j-modal').find('.close').click(function (){
		$(this).closest('.j-modal-content').slideUp(200, function(){
			$(this).parent().css("display","none");
		});
	});

	//close button for modal
	$('.close-modal').click(function () {
		$(this).closest('.j-modal-content').slideUp(200, function(){
			$(this).parent().css("display","none");
		});
	});

	//When clicked on an area other than modal, the modal closes
	$('.j-modal').click(function (event) {
		let flag = $(event.target).is('.j-modal');
		if(flag){
			$(this).find('.j-modal-content').slideUp(200, function () {
				$(this).parent().css("display","none");				
			});
		}
	});

	//prevent navigation to links when disbled
	$(".disabled a").click(function(event){
	    event.preventDefault();
	});

	//Navbar icon - small and medium sized screens
	$('.navbar-icon i').click(function (event) {
		let isCollapsed = $('.navbar').is(":hidden");
		let navbar = $(this).parent().next();
		if(isCollapsed){
			navbar.addClass('navbar-responsive');
			$(this).removeClass('fa-bars');
			$(this).addClass('fa-times');

		}
		else {
			navbar.removeClass('navbar-responsive');
			$(this).removeClass('fa-times');
			$(this).addClass('fa-bars');
		}
	});

	//Dropdown button in the navbar when clicked open sub menu
	$('.dropdown .dropdown-toggle').click(function(){
		$(this).toggleClass('clicked')
		let dropdownMenu = $(this).parent().find('.dropdown-menu');
		dropdownMenu.slideToggle(100);
	});

	//Close the dropdown when clicked elsewhere
	$(window).click(function (event) {
		if (!$(event.target).is('.dropdown-toggle') && !$(event.target).is('.navbar-icon i')) {
			$('.dropdown-menu').slideUp(100);
			$('.dropdown-toggle').removeClass('clicked');
		}
	});

	//focus and blur event for search button styling
	$('.input-box input').focus(function () {
		$(this).parent().next('a').css({"box-shadow" : "0 0 8px 0 #dc3545"});
	});
	$('.input-box input').blur(function () {
		$(this).parent().next('a').css({"box-shadow" : "none"});
	});

});