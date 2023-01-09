function square() {
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 125;
			canvas.width = 650;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(0, 0);
				vr.lineTo(650,0);
				vr.lineTo(650, 125);
				vr.lineTo(0, 125);
				vr.lineTo(0,0);
				vr.lineWidth = 5;
				vr.fill();

				vr.beginPath();
				vr.moveTo(370, 62);
				vr.arc(325, 62.5, 45, 0, 2 * Math.PI);
				vr.fillStyle = "blue";
				vr.fill();

				vr.beginPath();
				vr.moveTo(0, 0);
				vr.arc(650, 0, 15, 0, 2 * Math.PI);
				vr.fillStyle = "green";
				vr.fill();
			};
		};
}

square();

function mainCircle() {
	var canvas = document.getElementById("circle");
		if (canvas && canvas.getContext) {
			canvas.height = 15;
			canvas.width = 15;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(0, 0);
				vr.arc(0, 0, 15, 0, 2 * Math.PI);
				vr.fill();
			}
		}
}

mainCircle();
