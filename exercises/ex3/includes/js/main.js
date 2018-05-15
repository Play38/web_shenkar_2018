$(document).ready(function(){
    var originColor;
    var originOpacity;
    var bottomBox = $(".main_lay3");
    var bottomHoverBox = $(".main_lay3 div");
    var upperBox =$("div")
    var box_count = 0;
    colorChange(originColor, originOpacity, upperBox, bottomHoverBox);
    createBox(bottomBox, box_count);
})

function createBox(bottomBox, box_count) {
	 $(".button").on("click", function () {
	 	  	if(box_count<8){
          	$(bottomBox) .append("<div></div>") .find("div:last") .css("opacity", Math.random() );
            box_count++;
           }
    });
}



function colorChange(originColor, originOpacity, upperBox, bottomHoverBox) {
	upperBox.hover(function () {
    originColor = $(this).css("background-color");
    originOpacity = $(this).css("opacity");
    $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }
    , function () {
    	$(this).css({ "background-color": originColor, "opacity": originOpacity });
   	});
}