function square1() {
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 150;
			canvas.width = 450;
		}
}

square1();

function lost() {
	setTimeout(function() {
		var h1 = document.createElement("H1");
		var place = document.createTextNode("Damn that sucks, click to restart");
		h1.appendChild(place);
		var element = document.getElementById("lost");
		element.appendChild(place);
		document.getElementById("stall").style.color = "transparent";
		document.getElementById("hurry").style.color = "transparent";
		document.getElementById("saved").href = "../canvas/shapes.html";
	}, 700);
}

lost();