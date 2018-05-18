$(document).ready(function(){
	var originColor;
	var originOpacity;
	var element;
	boxGenerator(element);
	plusBoxes();
})
$(document).ready(function first4Boxes () {
	var firstboxes = 0;
	while (firstboxes < 4) {
	boxGenerator(".right_side_lay3");
	firstboxes++;
	}
});
function plusBoxes() {
    $(".button").on("click", function() {
	boxGenerator(".main_lay3");
    });
}
function boxGenerator(element) {
    return $(element).append("<section><div></div></section>").find("div:last").css("opacity", Math.random()).hover(function() {
        originColor = $(this).css("background-color");
        originOpacity = $(this).css("opacity");
        $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }, function() {
        $(this).css({ "background-color": originColor, "opacity": originOpacity });
    });
};