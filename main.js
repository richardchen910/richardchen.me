

// smooth scroll
sections = document.querySelectorAll(".smooth-scroll");
function myFunction(i) {
    sections[i].scrollIntoView({ 
    	behavior: 'smooth'
    });
}


$(document).ready(function() {
	// reveal content when mouse hovers over content section
	$(".content").hover(function() {
		var box = $(this).closest(".box");
		var reveal_content = box.find(".reveal-content");
		reveal_content.css("height", "100%");
	}, function() {
		var box = $(this).closest(".box");
		var reveal_content = box.find(".reveal-content");
		reveal_content.css("height", "0");
	});	
	
	//transform image when mouse hovers over
	$(".photo-group").hover(function() {
		$(this).find(".reveal-caption").fadeIn();
		$(this).closest(".photo-group").find(".photo").css("opacity", "0.5");
	}, function() {
		$(this).find(".reveal-caption").fadeOut();
		$(this).closest(".photo-group").find(".photo").css("opacity", "1");
	});
});





