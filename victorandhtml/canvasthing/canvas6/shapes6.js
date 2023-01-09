function star() {
	var canvas = document.getElementById("canvas1");
	if (canvas && canvas.getContext) {
		canvas.height = "600";
		canvas.width = "446";
	};
	var vr = canvas.getContext("2d");
	if (vr) {
		vr.beginPath();
		vr.moveTo(100, 600);
		vr.lineTo(150, 433);
		vr.lineTo(0, 350);
		vr.lineTo(190, 350);
		vr.lineTo(230, 200);
		vr.lineTo(260, 348);
		vr.lineTo(440, 348);
		vr.lineTo(300, 430);
		vr.lineTo(350, 600);
		vr.lineTo(232, 500);
		vr.lineTo(100, 600);
		vr.fillStyle = "red";
		vr.fill();
		vr.lineWidth = 6;
		vr.strokeStyle = "blue";
		vr.stroke();
	};
}

star();