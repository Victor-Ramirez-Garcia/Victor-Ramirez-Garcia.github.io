function displayNone(n1, n2, n3, n4, n5, n6, n7) {
	var notes = document.getElementById('border').querySelectorAll("#notes");
	
	notes[n1].style.display = 'none';
	notes[n2].style.display = 'none';
	notes[n3].style.display = 'none';
	notes[n4].style.display = 'none';
	notes[n5].style.display = 'none';
	notes[n6].style.display = 'none';
	notes[n7].style.display = 'none';
}

/*Dont change*/
function changeBigText(h1a, h1b, h1c) {
	var h1 = document.getElementById("bigText").querySelectorAll("h1");
	
	h1[0].textContent = h1a;
	h1[1].textContent = h1b;
	h1[2].textContent = h1c;
}

/*Dont change*/
function changeBigImage(src, marginLeft) {
	var img = document.getElementById("bigImage");
	
	img.src = src;
	img.style.marginLeft = marginLeft;
}

/*Dont change*/
function changeMovementImage(src, height, marginLeft) {
	var img = document.getElementById("movementImage");
	
	img.src = src;
	img.style.height = height;
	img.style.marginLeft = marginLeft;
}

/*Dont change*/
function changeMovementSource(link, content, width, marginTop) {
	var source = document.getElementById("mImgSource");
	source.href = link;
	source.textContent = content;
	source.style.width = width;
	source.style.marginTop = marginTop;
}

/*Dont change*/
function changeBigImage2(src, marginLeft, rotate) {
	var img = document.getElementById("bigImage2");
	
	img.src = src;
	img.style.marginLeft = marginLeft;
	img.style.transform = rotate;
}

/*Dont change*/
function leftArrow(number) {
	var notes = document.getElementById('border').querySelectorAll("#notes");
	var dButton = document.getElementById("discussionButton");
	var img = document.getElementById("bigImage");
	var bigText = document.getElementById("bigText");
	var mImg = document.getElementById("movementImage");
	var mSource = document.getElementById("mImgSource");
	var img2 = document.getElementById("bigImage2");
	var title = document.getElementById("dTitle");
	var bigText2 = document.getElementById("bigText2");
	var canvas = document.getElementById("leftArrow");

	if (canvas && canvas.getContext) {

		var vr = canvas.getContext("2d");
		if (vr) {
			/*height: 150, width: 300*/
			vr.beginPath();
			vr.moveTo(70,0);
			vr.lineTo(0, 75);
			vr.lineTo(70, 150);
			vr.lineTo(70, 115);
			vr.lineTo(300, 115);
			vr.lineTo(300, 35);
			vr.lineTo(70, 35);
			vr.lineTo(70,0);
			vr.lineWidth = 4;
			vr.strokeStyle = "black";
			vr.fillStyle = "white";
			vr.fill();
			vr.stroke();

			vr.fillStyle = "black";
			vr.font = '6vh Serif';
  			vr.fillText('BACK', 90, 95);
		};
	};

	canvas.onclick = function() {
		img2.style.display = "none";
		title.style.display = "none";
		bigText2.style.display = "none";
		canvas.style.display = "none";

		notes[number].style.display = "block";
		dButton.style.display = "flex";
		img.style.display = "block";
		bigText.style.display = "flex";
		mImg.style.display = "block";
		mSource.style.display = "block";
	}
}

/*Dont change*/
function dQuestion3(question1, question2, question3) {
	var h1 = document.getElementById("bigText2").querySelectorAll("h1");

	h1[0].textContent = question1;
	h1[1].textContent = question2;
	h1[2].textContent = question3;
}

/*Dont change*/
function hideDQuestions() {
	var img2 = document.getElementById("bigImage2");
	var title = document.getElementById("dTitle");
	var bigText2 = document.getElementById("bigText2");
	var canvas = document.getElementById("leftArrow");

	img2.style.display = "none";
	title.style.display = "none";
	bigText2.style.display = "none";
	canvas.style.display = "none";
}

/*These 3 functions are the main functions that would make this website*/

function showDQuestions(number) {
	var notes = document.getElementById('border').querySelectorAll("#notes");
	var dButton = document.getElementById("discussionButton");
	var img = document.getElementById("bigImage");
	var bigText = document.getElementById("bigText");
	var mImg = document.getElementById("movementImage");
	var mSource = document.getElementById("mImgSource");
	var img2 = document.getElementById("bigImage2");
	var title = document.getElementById("dTitle");
	var bigText2 = document.getElementById("bigText2");
	var canvas = document.getElementById("leftArrow");

	dButton.onclick = function() {
		notes[number].style.display = "none";
		dButton.style.display = "none";
		img.style.display = "none";
		bigText.style.display = "none";
		mImg.style.display = "none";
		mSource.style.display = "none";

		img2.style.display = "block";
		title.style.display = "block";
		bigText2.style.display = "flex";
		canvas.style.display = "block";

		if (number === 0) {
			changeBigImage2("logos/aaa.png", "107vh", "rotate(13deg)");
			leftArrow(0);
			bigText2.style.borderColor = "blue";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "Why might groups of differing Asian heritage have has difficulty unifying?");
		};

		if (number === 1) {
			changeBigImage2("logos/blm.png", "113vh", "rotate(0deg)");
			leftArrow(1);
			bigText2.style.borderColor = "black";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "Why might the Black Panthers & SNCC have trouble sustaining support?");
		};

		if (number === 2) {
			changeBigImage2("logos/ufw.png", "113.5vh", "rotate(0deg)");
			leftArrow(2);
			bigText2.style.borderColor = "brown";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "What was Cesar Chavez greatest accomplishment? Why is it important?");
		};

		if (number === 3) {
			changeBigImage2("logos/glm.png", "109.5vh", "rotate(0deg)");
			leftArrow(3);
			bigText2.style.borderImage = "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)";
			bigText2.style.borderImageSlice = "1";
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "What is the biggest shortcoming still faced by the gay community?");
		};

		if (number === 4) {
			changeBigImage2("logos/nam.png", "113vh", "rotate(0deg)");
			leftArrow(4);
			bigText2.style.borderColor = "red";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "Why might Indians have turned to more radical, violent forms of protest?");
		};

		if (number === 5) {
			changeBigImage2("logos/wm.png", "116.2vh", "rotate(0deg)");
			leftArrow(5);
			bigText2.style.borderColor = "pink";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "What were 3 achievements of the womens movement? Shortcomings?");
		};

		if (number === 6) {
			changeBigImage2("logos/em.png", "113vh", "rotate(0deg)");
			leftArrow(6);
			bigText2.style.borderColor = "green";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("Who was involved in the movement? (specific people?)", "Why did this movement take place? (goals/problems?)", "How does the success of Green Power compare to that of other movements?");
		};
		if (number === 7) {
			changeBigImage2("logos/bllm.jpg", "113vh", "rotate(0deg)");
			leftArrow(7);
			bigText2.style.borderColor = "blue";
			bigText2.style.borderImage = 'none';
			bigText2.style.borderImageSlice = 'none';
			dQuestion3("How did the civil rights movement of the 1960s influence the Disabilities Rights Movement?", "What were some key successes of the Disability Rights Movement?", "Compare challenges of this movement with those of other Power Movements of the 1960s and 70s.");
		};
	}
}

function displayNotes(number) {
	var introduccion = document.getElementById("introduccion");
	var img = document.getElementById("bigImage");
	var bigText = document.getElementById("bigText");
	var mImg = document.getElementById("movementImage");
	var mSource = document.getElementById("mImgSource");
	var dButton = document.getElementById("discussionButton");
	var notes = document.getElementById('border').querySelectorAll("#notes");

	introduccion.style.display = 'none';
	img.style.display = "block";
	bigText.style.display = "flex";
	mImg.style.display = "block";
	mSource.style.display = "block";
	dButton.style.display = "flex";
	notes[number].style.display = 'block';

	if (number === 0) {
		hideDQuestions();
		displayNone(1,2,3,4,5,6,7);
		changeBigText("Yellow Power:", "Asian American Movement", "");
		changeBigImage("logos/aaa.png", "5vh");
		changeMovementImage("logos/maaa.jpg", "38vh", "21vh");
		changeMovementSource("https://www.aalead.org/asian-pacific-american-heritage-month/", "Source: aalead", "18vh", "-30vh");
		showDQuestions(0);
		dButton.style.backgroundColor = "yellow";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
	if (number === 1) {
		hideDQuestions();
		displayNone(0,2,3,4,5,6,7);
		changeBigText("Black Power:", "SNCC & the Black Panthers", "");
		changeBigImage("logos/blm.png", "16vh");
		changeMovementImage("logos/mblm.jpg", "30vh", "8vh");
		changeMovementSource("https://www.historylearningsite.co.uk/the-civil-rights-movement-in-america-1945-to-1968/the-black-panthers/", "Source: historylearningsite", "47vh", "");
		showDQuestions(1);
		dButton.style.backgroundColor = "black";
		dButton.style.color = "white";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "white";
	};
	if (number === 2) {
		hideDQuestions();
		displayNone(0,1,3,4,5,6,7);
		changeBigText("Brown Power:", "Chicanos, Cesar Chavez,", "& the United Farm Workers");
		changeBigImage("logos/ufw.png", "11vh");
		changeMovementImage("logos/mufw.jpg", "38vh", "20vh");
		changeMovementSource("https://www.latimes.com/nation/la-na-1968-east-la-walkouts-20180301-htmlstory.html", "Source: latimes", "20vh", "-25vh");
		showDQuestions(2);
		dButton.style.backgroundColor = "brown";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
	if (number === 3) {
		hideDQuestions();
		displayNone(0,1,2,4,5,6,7);
		changeBigText("Rainbow Power:", "The Gay Liberation", "Movement");
		changeBigImage("logos/glm.png", "11vh");
		changeMovementImage("logos/mglm.jpg", "30vh", "3vh");
		changeMovementSource("https://news.harvard.edu/gazette/story/2019/06/harvard-scholars-reflect-on-the-history-and-legacy-of-the-stonewall-riots/", "Source: news.harwvrd.edu", "47vh", "");
		showDQuestions(3);
		dButton.style.backgroundColor = "transparent";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)";
		dButton.style.borderColor = "black";
	};
	if (number === 4) {
		hideDQuestions();
		displayNone(0,1,2,3,5,6,7);
		changeBigText("Red Power:", "The Native American", "Movement");
		changeBigImage("logos/nam.png", "12vh");
		changeMovementImage("logos/mnam.jpg", "30vh", "9vh");
		changeMovementSource("https://classracegender.wordpress.com/2015/04/13/alcatraz-the-birthplace-of-the-native-american-red-power-movement/", "Source: classracegender", "47vh", "");
		showDQuestions(4);
		dButton.style.backgroundColor = "red";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
	if (number === 5) {
		hideDQuestions();
		displayNone(0,1,2,3,4,6,7);
		changeBigText("Pink Power:", "The Women's Movement", "");
		changeBigImage("logos/wm.png", "16.5vh");
		changeMovementImage("logos/mwm.jpeg", "21vh", "2vh");
		changeMovementSource("https://www.sutori.com/story/american-civil-rights-for-women-a-women-s-rights-movement--BRCeHkJJwRE5DczgKH8dMoKU", "Source: sutori", "47vh", "");
		showDQuestions(5);
		dButton.style.backgroundColor = "pink";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
	if (number === 6) {
		hideDQuestions();
		displayNone(0,1,2,3,4,5,7);
		changeBigText("Green Power:", "The Environmental", "Movement");
		changeBigImage("logos/em.png", "11vh");
		changeMovementImage("logos/mem.jpg", "38vh", "22vh");
		changeMovementSource("http://www.herinst.org/BusinessManagedDemocracy/environment/environmentalists/index.html", "Source: herinst", "20vh", "-25vh");
		showDQuestions(6);
		dButton.style.backgroundColor = "green";
		dButton.style.color = "black";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
	if (number === 7) {
		hideDQuestions();
		displayNone(0,1,2,3,4,5,6);
		changeBigText("", "Disability Rights", "Movement");
		changeBigImage("logos/bllm.jpg", "11vh");
		changeMovementImage("logos/mbllm.jpg", "30vh", "1.5vh");
		changeMovementSource("https://icsny.org/dr-martin-luther-king-disability-rights-movement/", "Source: icsny", "47vh", "");
		showDQuestions(7);
		dButton.style.backgroundColor = "blue";
		dButton.style.color = "white";
		dButton.style.backgroundImage = "none";
		dButton.style.borderColor = "black";
	};
}

function returnHome() {
	var introduccion = document.getElementById('introduccion');
	var img = document.getElementById("bigImage");
	var h1 = document.getElementById("bigText");
	var mImg = document.getElementById("movementImage");
	var mSource = document.getElementById("mImgSource");
	var dButton = document.getElementById("discussionButton");
	var notes = document.getElementById('border').querySelectorAll("#notes");
	var img2 = document.getElementById("bigImage2");
	var title = document.getElementById("dTitle");
	var bigText2 = document.getElementById("bigText2");
	var canvas = document.getElementById("leftArrow");
	
	img.style.display = "none";
	h1.style.display = "none";
	mImg.style.display = "none";
	mSource.style.display = "none";
	img2.style.display = "none";
	title.style.display = "none";
	bigText2.style.display = "none";
	canvas.style.display = "none";
	dButton.style.display = "none";
	notes[0].style.display = 'none';
	notes[1].style.display = 'none';
	notes[2].style.display = 'none';
	notes[3].style.display = 'none';
	notes[4].style.display = 'none';
	notes[5].style.display = 'none';
	notes[6].style.display = 'none';
	notes[7].style.display = 'none';
	introduccion.style.display = "block";
}