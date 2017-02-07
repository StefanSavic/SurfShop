(function(){
	var $dropDownParent = $('.custom-dropdown').parent();
	var $dropDownMenuParent = $('.dropdown_menu').parent();
	var $mainMenuWidth = $('.main-menu').outerWidth();
	var $dropDownWidth = $('.custom-dropdown').outerWidth();
	$('.custom-dropdown').css('margin-left',$mainMenuWidth - 1);

	var smallScreenQuery = Modernizr.mq('(max-width: 900px)');
	var bigScreenQuery = Modernizr.mq('(min-width: 900px)');

	$($dropDownParent).on('mouseenter mouseleave ',function(){

		$('.custom-dropdown').first().toggleClass('hidden');
	});


	// Menu responsive	
	if(bigScreenQuery){
		$dropDownMenuParent.on('mouseenter',function(){

			$('.dropdown_menu').toggleClass('hidden');

		});

	}

	// $('.dropdown_menu').on('mouseleave',function(){
	// 	var $this = $(this);
	// 	$this.addClass('hidden');
	// });

	if (smallScreenQuery) {
		console.log('veci sam od 900');
		($dropDownMenuParent).on('click',function(){

			$('.dropdown_menu').toggleClass('hidden');

		});
	}

})();