function notSmiling() {
	var canvas = document.getElementById("canvasNone");
	if (canvas && canvas.getContext) {
		canvas.height = 450;
		canvas.width = 450;
		var vr = canvas.getContext("2d");
		if (vr) {
			vr.beginPath();
			vr.arc(225, 225, 210, 0, 2 * Math.PI, true);
			vr.moveTo(200, 130);
			vr.arc(150,130, 50, 2 * Math.PI, false);
			vr.moveTo(350, 130);
			vr.arc(300, 130, 50, 2 * Math.PI, false);
			vr.moveTo(125, 320);
			vr.arc(225, 325, 100, Math.PI, 0, false);
			vr.fillStyle = "brown";
			vr.fill();
		};
	};
}

notSmiling();