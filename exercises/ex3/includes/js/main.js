$(document).ready(function(){
    var originColor;
    var originOpacity;
    var bottomBox = $(".main_lay3");
    var upperBox =$(".right_side_lay3 div")
    var box_count = 0;
    ({ originColor, originOpacity } = colorChange(originColor, originOpacity, upperBox, bottomBox));
     box_count = createBox(bottomBox, box_count);
})

function createBox(bottomBox, box_count) {
	 $(".button").on("click", function () {
	 	  	if(box_count<8){
          	$(bottomBox) .append("<div></div>") .find("div:last") .css("opacity", Math.random()); //how to add css elements to an append??
            console.log(box_count);
            box_count++;
           }
            else {}
    });
}

function colorChange(originColor, originOpacity, upperBox, bottomBox) {
   		upperBox.hover(function () {
        originColor = $(this).css("background-color");
        originOpacity = $(this).css("opacity");
        $(this).css({ "background-color": "#ffffff", "opacity": "1" });
        }
        , function () {
        $(this).css({ "background-color": originColor, "opacity": originOpacity });
   		});
    return { originColor, originOpacity };
}