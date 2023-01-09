function wait() {
	setTimeout(function() {
		var h1 = document.createElement("H1");
		var place = document.createTextNode("Wait!!!!!");
		h1.appendChild(place);
		var element = document.getElementById("wait");
		element.appendChild(place);

		document.getElementById("gone").style.color = "transparent";
	}, 4000);

	setTimeout(function() {
		document.getElementById("wait").style.color = "transparent";
	}, 6000);
}

wait();

function square() {
	setTimeout(function(){
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 300;
			canvas.width = 300;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.fillStyle = "red";
				vr.fill();
				vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);
			};
		};
	}, 4000);
}

square();

function coldness() {
	setTimeout(function(){
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 300;
			canvas.width = 300;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.fillStyle = "blue";
				vr.fill();
				vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);
			};
		};
	}, 6000);
}

coldness();

function changehref() {
	setTimeout(function() {
		document.getElementById("new").href = "../canvas8/shapes8.html";
	}, 8500);
}

changehref();

function run() {
	setTimeout(function() {
		var h1 = document.createElement("H1");
		var place = document.createTextNode("Click!!!!!");
		h1.appendChild(place);
		var element = document.getElementById("go");
		element.appendChild(place);

		document.getElementById("gone").style.color = "transparent";
	}, 6000);
}

run();

function newSquare() {
	setTimeout(function(){
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 300;
			canvas.width = 300;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.fillStyle = "green";
				vr.fill();
				vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);
			};
		};
	}, 8500);
}

newSquare();

function truth() {
	setTimeout(function() {
		var h1 = document.createElement("H1");
		var place = document.createTextNode("I mean now click because it's green");
		h1.appendChild(place);
		var element = document.getElementById("truth");
		element.appendChild(place);

		document.getElementById("go").style.color = "transparent";
	}, 8500);
}

truth();

function lostSquare() {
	setTimeout(function() {
		var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 300;
			canvas.width = 300;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.fillStyle = "red";
				vr.fill();
				vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);
			};
		};
	}, 10000);
}

lostSquare();

function lost() {
	setTimeout(function() {
	var h1 = document.createElement("H1");
		var place = document.createTextNode("Oof you did not hurry up...click square to restart");
		h1.appendChild(place);
		var element = document.getElementById("lose");
		element.appendChild(place);
		document.getElementById("truth").style.color = "transparent";
	}, 10000);
}

lost();

function afterhref() {
	setTimeout(function() {
		document.getElementById("new").href = "../canvas/shapes.html";
	}, 10000);
}

afterhref();