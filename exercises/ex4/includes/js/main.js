var nameCheckFalse = document.getElementById("nameCheckFalse");
var slider = new Slider('#coffeeTemp', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
document.getElementById("button").onclick = function() {
	var nameCheck = document.getElementById("nameCheck2").value;
	if (((nameCheck.indexOf("a"))!= -1) && (nameCheck.indexOf("d") != -1) && ((nameCheck.indexOf(" ") == -1)))
		return true;
	else {
		nameCheckFalse.innerHTML = "<h3>" + "invalid input" + "</h3>";
		return false;
	}	
};