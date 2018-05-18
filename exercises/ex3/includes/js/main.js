$(document).ready(function(){
    var originColor;
    var originOpacity;
    var upperBox =$(".right_side_lay3 div")
    var boxCount = 1;
    var firstCheck = 1;
    //colorChange(originColor, originOpacity, upperBox);
    createBox(boxCount, firstCheck, originColor, originOpacity);
})

$(document).ready(function first4boxes () {
	  var firstboxes = 0;
    	while (firstboxes <4)
    	{
    			$(".right_side_lay3") .append("<div></div>") .find("div:last") .css("opacity", Math.random()).hover(function () {
    originColor = $(this).css("background-color");
    originOpacity = $(this).css("opacity");
    $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }
    , function () {
    	$(this).css({ "background-color": originColor, "opacity": originOpacity });
   	});
    			firstboxes++;
    	}
  })

function createBox(boxCount, firstCheck, originColor, originOpacity) {
	 $(".button").on("click", function () {
	 	  	 if((boxCount % 5) == 0 )
            {
            if (firstCheck ==1)
            {
            	firstCheck = 0;
            }
            else {
            $(".main_lay3").css("height", "+=250");
            }
            boxCount = 1;
            }
          	$(".main_lay3") .append("<div></div>") .find("div:last") .css("opacity", Math.random()).hover(function () {
    originColor = $(this).css("background-color");
    originOpacity = $(this).css("opacity");
    $(this).css({ "background-color": "#ffffff", "opacity": "1" });
    }
    , function () {
    	$(this).css({ "background-color": originColor, "opacity": originOpacity });
   	});
            boxCount++;
    });
}