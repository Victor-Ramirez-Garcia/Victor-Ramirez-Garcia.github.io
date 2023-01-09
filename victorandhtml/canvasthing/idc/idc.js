function pacman() {
	var canvas = document.getElementById("canvas1");
	if (canvas && canvas.getContext) {
		canvas.height = "400";
		canvas.width = "400";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(200,200);
			vr.arc(200,200,200, 400,Math.PI);			
			vr.closePath();
			vr.fillStyle = "yellow";
			vr.fill();
		};
	};
}

pacman();

function circle() {
	var canvas = document.getElementById("canvas2");
	if (canvas && canvas.getContext) {
		canvas.height = "200";
		canvas.width = "200";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(170,100);
			vr.arc(100,100,20,0,2*Math.PI);
			vr.closePath();
			vr.fillStyle = "white";
			vr.fill();
		};
	};
}

circle();

function circle2() {
	var canvas = document.getElementById("canvas3");
	if (canvas && canvas.getContext) {
		canvas.height = "200";
		canvas.width = "200";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(170,100);
			vr.arc(100,100,20,0,2*Math.PI);
			vr.closePath();
			vr.fillStyle = "white";
			vr.fill();
		};
	};
}

circle2();

function circle3() {
	var canvas = document.getElementById("canvas4");
	if (canvas && canvas.getContext) {
		canvas.height = "200";
		canvas.width = "200";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(170,100);
			vr.arc(100,100,20,0,2*Math.PI);
			vr.closePath();
			vr.fillStyle = "white";
			vr.fill();
		};
	};
}

circle3();

function circle4() {
	var canvas = document.getElementById("canvas5");
	if (canvas && canvas.getContext) {
		canvas.height = "200";
		canvas.width = "200";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(170,100);
			vr.arc(100,100,20,0,2*Math.PI);
			vr.closePath();
			vr.fillStyle = "white";
			vr.fill();
		};
	};
}

circle4();

function circle5() {
	var canvas = document.getElementById("canvas6");
	if (canvas && canvas.getContext) {
		canvas.height = "200";
		canvas.width = "200";

		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.moveTo(170,100);
			vr.arc(100,100,20,0,2*Math.PI);
			vr.closePath();
			vr.fillStyle = "white";
			vr.fill();
		};
	};
}

circle5();