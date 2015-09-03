$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 350){  
			$(".sticky").slideDown("fast");
	  	}
	  	else{
	    	$(".sticky").slideUp("fast");
	  	}
	});

	// person 1 animation
	$('.p1open, .p1close').click(function(){
		$('.p1more').toggle(1000);
		$('.p1, .p2, .p3, .p4').toggle(1000);
	});

	// person 2 animation
	$('.p2open, .p2close').click(function(){
		$('.p2more').toggle(1000);
		$('.p1, .p2, .p3, .p4').toggle(1000);
	});

	// person 3 animation
	$('.p3open, .p3close').click(function(){
		$('.p3more').toggle(1000);
		$('.p1, .p2, .p3, .p4').toggle(1000);
	});

	//person 4 animation
	$('.p4open, .p4close').click(function(){
		$('.p4more').toggle(1000);
		$('.p1, .p2, .p3, .p4').toggle(1000);
	});

	$('.emopen, .emclose').click(function(){
		$('.mail, .options').toggle(1000);
	});
})