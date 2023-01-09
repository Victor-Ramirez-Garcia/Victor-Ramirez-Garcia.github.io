function star(id) {
	var canvas = document.getElementById(id);
	if (canvas && canvas.getContext) {
		canvas.height = 137;
		canvas.width = 45;
	};
	var vr = canvas.getContext("2d");
	if (vr) {
		vr.beginPath();
        vr.moveTo(22.5, 5);
        vr.lineTo(19, 18);
        vr.lineTo(5, 19);
        vr.lineTo(17, 25);
        vr.lineTo(14, 37);
        vr.lineTo(22.5, 27);
        vr.lineTo(31, 37);
        vr.lineTo(28, 25);
        vr.lineTo(40, 19);
        vr.lineTo(25, 18);
        vr.lineTo(22.5, 5);
		vr.fillStyle = "black";
        vr.fill();
        
        vr.beginPath();
        vr.moveTo(22.5, 50);
        vr.lineTo(19, 63);
        vr.lineTo(5, 64);
        vr.lineTo(17, 70);
        vr.lineTo(14, 82);
        vr.lineTo(22.5, 72);
        vr.lineTo(31, 82);
        vr.lineTo(28, 70);
        vr.lineTo(40, 64);
        vr.lineTo(25, 63);
        vr.lineTo(22.5, 50);
		vr.fillStyle = "black";
        vr.fill();
        
        vr.beginPath();
        vr.moveTo(22.5, 95);
        vr.lineTo(19, 108);
        vr.lineTo(5, 109);
        vr.lineTo(17, 115);
        vr.lineTo(14, 127);
        vr.lineTo(22.5, 117);
        vr.lineTo(31, 127);
        vr.lineTo(28, 115);
        vr.lineTo(40, 109);
        vr.lineTo(25, 108);
        vr.lineTo(22.5, 95);
		vr.fillStyle = "black";
		vr.fill();
	};
}

star('star1');
star('star2');
star('star3');
star('star4');
star("star5");
star("star6");