$(document).ready(function() {
	$("img").hover(function(){
		$("button").show();
	});
	
	$("button").hover(function(){
        $(this).stop().animate({opacity:.4},200);
        $('.text').fadeIn();

    }, function() {
        $(this).stop().animate({opacity:1},500)
        $('.text').fadeOut();
    });
});