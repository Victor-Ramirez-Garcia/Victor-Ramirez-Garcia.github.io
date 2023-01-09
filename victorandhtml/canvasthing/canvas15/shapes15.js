function difficult() {
	var canvas = document.getElementById("canvas1");
	if (canvas && canvas.getContext) {
		canvas.height = "400";
		canvas.width = "400";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(400,200);
			vr.arc(200,200,200,0,2*Math.PI);			
			vr.closePath();
			vr.fill();


			vr.beginPath();
			vr.moveTo(200,200);
			vr.lineTo(55,338);
			vr.closePath();
			vr.strokeStyle = "red";
			vr.stroke();
		};
	};
}

difficult();

function easy() {
	var canvas = document.getElementById("canvas2");
	if (canvas && canvas.getContext) {
		canvas.height = "400";
		canvas.width = "400";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(200,200);
			vr.lineTo(55,62);
			vr.closePath();
			vr.strokeStyle = "green";
			vr.stroke();
		};
	};
}

easy();

function boring() {
	var canvas = document.getElementById("canvas3");
	if (canvas && canvas.getContext) {
		canvas.height = "400";
		canvas.width = "400";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(200,200);
			vr.lineTo(345,62);
			vr.closePath();
			vr.strokeStyle = "blue";
			vr.stroke();
		};
	};
}

boring();

function wontPlay() {
	var canvas = document.getElementById("canvas4");
	if (canvas && canvas.getContext) {
		canvas.height = "400";
		canvas.width = "400";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(200,200);
			vr.lineTo(345,338);
			vr.closePath();
			vr.strokeStyle = "turquoise";
			vr.stroke();
		};
	};
}

wontPlay();