function linkWidth(number, marginSides) {
	var aTag = document.getElementById('introduccion').querySelectorAll('a');
	aTag[number].style.marginLeft = marginSides;
	aTag[number].style.marginRight = marginSides;
}

linkWidth(0, '3.5vh');
linkWidth(1, '13vh');
linkWidth(2, '25vh');
linkWidth(3, '42vh');
linkWidth(4, '38vh');
linkWidth(5, '22vh');
linkWidth(6, '19vh');
linkWidth(7, '31vh');
linkWidth(8, '41vh');
linkWidth(9, '39vh');
linkWidth(10, '41vh');
linkWidth(11, '43vh');
linkWidth(12, '43vh');
linkWidth(13, '42vh');
linkWidth(14, '27vh');
linkWidth(15, '41vh');
linkWidth(16, '34vh');
linkWidth(17, '42vh');
linkWidth(18, '43vh');
linkWidth(19, '41vh');

var exitButton = document.getElementById('exit');	

exitButton.onclick = function() {
	var hide = document.getElementById('introduccion');
	var show1 = document.getElementById('centering1');
	var show2 = document.getElementById('centering2');

	hide.style.display = 'none';
	show1.style.display = 'block';
	show2.style.display = 'block';
}


function star() {
	var canvas = document.getElementById('star');
	if (canvas && canvas.getContext) {
		canvas.height = 100;
		canvas.width = 100;
	};

	var vr = canvas.getContext('2d');

	if (vr) {
		vr.beginPath();
		vr.moveTo(50, 0);
		vr.lineTo(35, 40);
		vr.lineTo(0, 40);
		vr.lineTo(30, 60);
		vr.lineTo(15, 100);
		vr.lineTo(50, 70);
		vr.lineTo(85, 100);
		vr.lineTo(70, 60);
		vr.lineTo(100,40);
		vr.lineTo(65, 40);
		vr.lineTo(50, 0);
		vr.fillStyle = '#FFB302';
		vr.fill();
	};
}

star();

function showStar(height, marginTop1, marginLeft1, number, marginLeft2) {
	var canvas = document.getElementById('star');
	var pTag = document.getElementById('indigenousName');
	var name = document.getElementById('centering2').querySelectorAll('p');

	canvas.style.display = 'block';
	canvas.style.height = height;
	canvas.style.marginTop = marginTop1;
	canvas.style.marginLeft = marginLeft1;

	pTag.textContent = name[number].textContent;
	pTag.style.marginLeft = marginLeft2;
}


function hideStar() {
	var canvas = document.getElementById('star');
	canvas.style.display = 'none';
}


function animation(image, imageMarginTop, imageMarginLeft, exitMarginTop) {
	var div1 = document.getElementById('centering1');
	var div2 = document.getElementById('centering2');
	var li = document.getElementById('centering2').querySelectorAll('li');
	var name = document.getElementById('centering2').querySelectorAll('p');
	var img = document.getElementById('slide');
	var exit = document.getElementById('return');

	for (var i = 0; i < li.length; i++) {
		li[i].removeAttribute('onmouseover');
	};

	for (var i = 0; i < name.length; i++) {
		name[i].removeAttribute('onclick');
	};

	div2.style.animation = "disappear 1.5s 1";
	
	setTimeout(function() {
		div2.style.display = 'none';
		div1.style.animation = 'expand 1.5s 1';
	}, 1400);

	setTimeout(function() {
		div1.style.width = '190vh';
		img.setAttribute('src', image);
		img.style.marginTop = imageMarginTop;
		img.style.marginLeft = imageMarginLeft;
		img.style.height = '65vh';
		exit.textContent = 'Exit';
		exit.style.marginTop = exitMarginTop;
		img.style.animation = 'showSlide 1.5s 1';
		exit.style.animation = 'showExit 1.5s 1';
	}, 2500);
}

function returnBack() {
	var div1 = document.getElementById('centering1');
	var div2 = document.getElementById('centering2');
	var li = document.getElementById('centering2').querySelectorAll('li');
	var name = document.getElementById('centering2').querySelectorAll('p');
	var img = document.getElementById('slide');
	var exit = document.getElementById('return');

	img.style.animation = 'cutSlide 1.5s 1';
	exit.style.animation = 'cutExit 1.5s 1';

	setTimeout(function() {
		img.removeAttribute('src');
		img.style.height = '0vh';
		exit.textContent = "";
		div1.style.animation = 'shrink 1.5s 1';
	}, 1400);

	setTimeout(function() {
		div1.style.width = '132.1vh';
		div2.style.display = 'block';
		div2.style.animation = 'show 1.5s 1';
	}, 2500);

	setTimeout(function() {
		name[0].setAttribute('onclick', 'animation("history/amuzgo.png", "-50vh", "125vh", "-3vh")');
		name[1].setAttribute('onclick', 'animation("history/chatino.png", "-60vh", "125vh", "-1vh")');
		name[2].setAttribute('onclick', 'animation("history/chinanteco.png", "-20vh", "124vh", "0vh")');
		name[3].setAttribute('onclick', 'animation("history/chocholteco.png", "-20vh", "125vh", "-12vh")');
		name[4].setAttribute('onclick', 'animation("history/chontal.png", "-60vh", "125vh", "-6vh")');
		name[5].setAttribute('onclick', 'animation("history/cuicateco.png", "-10vh", "125vh", "-14vh")');
		name[6].setAttribute('onclick', 'animation("history/huave.png", "-50vh", "125vh", "-10vh")');
		name[7].setAttribute('onclick', 'animation("history/Ixcatec.png", "-20vh", "125vh", "-1vh")');
		name[8].setAttribute('onclick', 'animation("history/mazateco.png", "-5vh", "125vh", "-7vh")');
		name[9].setAttribute('onclick', 'animation("history/mixe.png", "-35vh", "125vh", "-4vh")');
		name[10].setAttribute('onclick', 'animation("history/mixteco.png", "-35vh", "125vh", "-3vh")');
		name[11].setAttribute('onclick', 'animation("history/nahuatl.png", "-5vh", "125vh", "-10vh")');
		name[12].setAttribute('onclick', 'animation("history/popoluca.png", "-5vh", "125vh", "-3vh")');
		name[13].setAttribute('onclick', 'animation("history/tacuate.png", "-40vh", "125vh", "-13vh")');
		name[14].setAttribute('onclick', 'animation("history/trique.png", "-37vh", "125vh", "-1vh")');
		name[15].setAttribute('onclick', 'animation("history/zapoteco.png", "-35vh", "125vh", "-11vh")');
		name[16].setAttribute('onclick', 'animation("history/zoque.png", "-40vh", "125vh", "-10vh")');

		li[0].setAttribute('onmouseover', 'showStar("3vh", "-26vh", "22.5vh", 0, "15vh")');
		li[1].setAttribute('onmouseover', 'showStar("4vh", "-19vh", "40vh", 1, "33vh")');
		li[2].setAttribute('onmouseover', 'showStar("4vh", "-61vh", "63vh", 2, "52vh")');
		li[3].setAttribute('onmouseover', 'showStar("3vh", "-54vh", "35.3vh", 3, "23vh")');
		li[4].setAttribute('onmouseover', 'showStar("3vh", "-19vh", "73vh", 4, "66vh")');
		li[5].setAttribute('onmouseover', 'showStar("3vh", "-60vh", "53.5vh", 5, "44vh")');
		li[6].setAttribute('onmouseover', 'showStar("3vh", "-22vh", "102vh", 6, "96vh")');
		li[7].setAttribute('onmouseover', 'showStar("3vh", "-56vh", "39vh", 7, "31vh")');
		li[8].setAttribute('onmouseover', 'showStar("3vh", "-69vh", "56vh", 8, "46.5vh")');
		li[9].setAttribute('onmouseover', 'showStar("3vh", "-42vh", "80vh", 9, "75vh")');
		li[10].setAttribute('onmouseover', 'showStar("4vh", "-42vh", "30vh", 10, "22.5vh")');
		li[11].setAttribute('onmouseover', 'showStar("3vh", "-65vh", "47vh", 11, "39.5vh")');
		li[12].setAttribute('onmouseover', 'showStar("3vh", "-68vh", "63vh", 12, "54vh")');
		li[13].setAttribute('onmouseover', 'showStar("3vh", "-30.5vh", "23vh", 13, "15.5vh")');
		li[14].setAttribute('onmouseover', 'showStar("3vh", "-39vh", "24vh", 14, "18.5vh")');
		li[15].setAttribute('onmouseover', 'showStar("7vh", "-40vh", "56vh", 15, "49.5vh")');
		li[16].setAttribute('onmouseover', 'showStar("5vh", "-35vh", "100vh", 16, "95vh")');
	}, 3000);
}