$(document).ready(function(){
		$('.demoone-nav').find('li').mouseenter(function(){
			var aSpan=$('.demoone-main-box').find('span');
			aSpan.removeClass('check');
			aSpan.eq($(this).index()).addClass('check');
		});

})