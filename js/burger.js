$('.header-menu__icon').click(function (){
	$('.header-menu').toggleClass('active');
	blackout();
	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$('body').removeClass('blackout');
	} else {
		$(this).addClass('active');
		$('body').addClass('blackout');
	}
});
res();
$( window ).resize(function() {res();});


function blackout(){
	var docHeight = $(document).height();
	if($('div').is('#overlay')){
		$('#overlay').detach();
	} else {
		$('body').append('<div id="overlay"></div>');
		$('#overlay').height(docHeight).css({
			'opacity' : 0.4,
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'background-color': 'black',
			'width': '100%',
			'z-index': 4
		});
   }
}
function res(){
	if ($(window).width() <= 768){
		$('.header-menu').append($('.header-top-lang'));
		$('.header-menu').append($('.header-bottom-menu'));
	} else {
		$('.header-top-lang').insertBefore($('.header-top__link'));
		$('.header-bottom-column').first().append($('.header-bottom-menu').first());
		$('.header-bottom-column').last().append($('.header-bottom-menu').last());
	}
}