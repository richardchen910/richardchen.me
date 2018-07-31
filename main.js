

//smooth scroll
sections = document.querySelectorAll(".smooth-scroll");
function myFunction(i) {
    sections[i].scrollIntoView({ 
    	behavior: 'smooth'
    });
}


//reveal content when user clicks on arrow
$(document).ready(function() {
	//reveal content when user clicks on arrow
	$(".view").on("click", function() {
		var box = $(this).closest(".box");
		var reveal_content = box.find(".reveal-content");
		var button = box.find(".view img");
		if (reveal_content.css("height") == "0px") {
			reveal_content.css("height", "100%");
			button.attr("src", "images/arrow_close.jpg");
		}
		else {
			reveal_content.css("height", "0");
			button.attr("src", "images/arrow_open.jpg");
			button.addClass("arrow");
		}
	});

	//ensure image takes up entire box width
	var box_width = $(".fit").closest(".box").css("width");
		
	
});





