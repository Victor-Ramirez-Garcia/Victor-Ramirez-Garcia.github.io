function square1() {
	var canvas = document.getElementById("canvas1");
		if (canvas && canvas.getContext) {
			canvas.height = 350;
			canvas.width = 350;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(321, 150);
				vr.lineWidth = 30;
				vr.arc(175, 175, 148, 0, 2 * Math.PI);
				vr.stroke();
			};
		}
}

square1();

function square2() {
	var canvas = document.getElementById("canvas2");
		if (canvas && canvas.getContext) {
			canvas.height = 350;
			canvas.width = 350;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(321, 150);
				vr.lineWidth = 30;
				vr.arc(175, 175, 148, 0, 2 * Math.PI);
				vr.strokeStyle = "rgb(41, 128, 185)";
				vr.stroke();
			};
		}
}

square2();

function square3() {
	var canvas = document.getElementById("canvas3");
		if (canvas && canvas.getContext) {
			canvas.height = 350;
			canvas.width = 350;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(321, 150);
				vr.lineWidth = 30;
				vr.arc(175, 175, 148, 0, 2 * Math.PI);
				vr.strokeStyle = "rgb(227, 41, 41)";
				vr.stroke();
			};
		}
}

square3();

function square4() {
	var canvas = document.getElementById("canvas4");
		if (canvas && canvas.getContext) {
			canvas.height = 350;
			canvas.width = 350;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(321, 150);
				vr.lineWidth = 30;
				vr.arc(175, 175, 148, 0, 2 * Math.PI);
				vr.strokeStyle = "rgb(241, 196, 15 )";
				vr.stroke();
			};
		}
}

square4();

function square5() {
	var canvas = document.getElementById("canvas5");
		if (canvas && canvas.getContext) {
			canvas.height = 350;
			canvas.width = 350;
			var vr = canvas.getContext("2d");
			if (vr) {
				vr.beginPath();
				vr.moveTo(321, 150);
				vr.lineWidth = 30;
				vr.arc(175, 175, 148, 0, 2 * Math.PI);
				vr.strokeStyle = "rgb(39, 174, 96)";
				vr.stroke();
			};
		}
}

square5();

function lost() {
	setTimeout(function() {
		var h1 = document.createElement("H1");
		var place = document.createTextNode("Now click on me");
		h1.appendChild(place);
		var element = document.getElementById("lostWords");
		element.appendChild(place);
		
		document.getElementById("lost").href = "";
		document.getElementById("lostWords").href = "../wrongcanvas2/noshapes2.html";
		document.getElementById("lost").style.color = "transparent";
		document.getElementById("lose1").style.color = "transparent";
		document.getElementById("lose2").style.color = "transparent";
		document.getElementById("lose3").style.color = "transparent";
	}, 4500);
}

lost();