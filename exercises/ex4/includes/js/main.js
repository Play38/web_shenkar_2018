var selectAge = document.getElementById("selectAge");
var nameCheckFalse = document.getElementById("nameCheckFalse");
var contents;

/*for (let i = 1; i <= 100; i++) {
	if (i==1)
		contents+= "<option value=''>" + "Please select option" + "</option>";
  contents += "<option>" + i + "</option>";
}
contents+= "<option value=''>" + "Too much" + "</option>";

selectAge.innerHTML = contents;
*/
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