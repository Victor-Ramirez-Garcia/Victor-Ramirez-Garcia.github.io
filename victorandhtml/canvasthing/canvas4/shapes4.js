function square() {
	var canvas = document.getElementById("canvas1");
	if (canvas && canvas.getContext) {
		canvas.height = "150";
		canvas.width = "150";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.fillRect(0,0,vr.canvas.width, vr.canvas.height);
			vr.strokeRect(0,0, vr.canvas.width, vr.canvas.height);
		};
	};
}

square();

function triangle() {
	var canvas = document.getElementById("canvas2");
	if (canvas && canvas.getContext) {
		canvas.height = "150";
		canvas.width = "150";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(0, 70);
			vr.lineTo(148, 148);
			vr.lineTo(148, 1);
			vr.lineTo(-210, 169);
			vr.strokeStyle = "red";
			vr.stroke();
			vr.fillStyle = "green";	
			vr.fill();
		};
	};
}

triangle();

function circle() {
	var canvas = document.getElementById("canvas3");
	if (canvas && canvas.getContext) {
		canvas.height = "150";
		canvas.width = "150";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.arc(75, 75, 75, 0, 2 * Math.PI);
			vr.fillStyle = "blue";
			vr.fill();
		};
	};
}

circle();

function trapezoid() {
	var canvas = document.getElementById("canvas4");
	if (canvas && canvas.getContext) {
		canvas.height = "150";
		canvas.width = "200";
		
		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(150, 0);
			vr.lineTo(200, 150);
			vr.lineTo(0, 150);
			vr.lineTo(50, 0);
			vr.lineTo(150, 0);
			vr.fillStyle = "green";
			vr.fill();
			vr.strokeStyle = "blue";
			vr.stroke();
			vr.closePath();		
		};
	};
}

trapezoid();