var selectAge = document.getElementById("selectAge");
var nameCheckFalse = document.getElementById("nameCheckFalse");
var slider = new Slider('#coffeeTemp', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
document.getElementById("button").onclick = function() {
	var nameCheck = document.getElementById("nameCheck2").value;
	if ((nameCheck.indexOf("a") && nameCheck.indexOf("d") && nameCheck.indexOf(" ")) == -1 )
		return true;
	else
	{
		nameCheckFalse.innerHTML = "<h3>" + "invalid input" + "</h3>";
		return false;
	}	
};