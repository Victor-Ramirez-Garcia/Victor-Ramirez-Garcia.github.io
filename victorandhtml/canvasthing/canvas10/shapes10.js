function square1() {
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 150;
			canvas.width = 450;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.strokeRect(0,0, vr.canvas.width, vr.canvas.height);
			}
		}
}

square1();
