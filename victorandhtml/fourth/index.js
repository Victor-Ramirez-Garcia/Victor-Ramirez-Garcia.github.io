function myOpinion() {
	var continueButton = document.getElementById('continueButton');
	var interestingCase = document.getElementById('interestingCase');
	var myOpinion = document.getElementById('myOpinion');
	
	myOpinion.style.display = "block";
	interestingCase.remove();
	continueButton.remove();
}

function interestingCase() {
	var continueButton = document.getElementById('continueButton');
	var interestingCase = document.getElementById('interestingCase');
	var violatedRights = document.getElementById('violatedRights');
	
	continueButton.onclick = function() {
		myOpinion();
	}
	
	interestingCase.style.display = "block";
	violatedRights.remove();
}


function violatedRights() {
	var continueButton = document.getElementById('continueButton');
	var exercisingRights = document.getElementById('exercisingRights');
	var violatedRights = document.getElementById('violatedRights');
	
	continueButton.onclick = function() {
		interestingCase();
	}
	
	violatedRights.style.display = "block";
	exercisingRights.remove();
}

function exercisingRights() {
	var continueButton = document.getElementById('continueButton');
	var animation2 = document.getElementById('animation2');
	var exercisingRights = document.getElementById('exercisingRights');
	
	continueButton.onclick = function() {
		violatedRights();
	}
	
	exercisingRights.style.display = "block";
	animation2.remove();
}

function incorrectWay() {
	var continueButton = document.getElementById('continueButton');
	var wrongSign = document.getElementById('wrongSign');
	continueButton.onclick = function() {
		//This is were the you can move from one slide to the other
		correctWay();
	}

	fullAnimation('animation1', 'resident1', 'police1', 'a1context');
	
	wrongSign.style.display = "block";
}

function correctWay() {
	var warrant = document.getElementById('warrant');
	var checkMark = document.getElementById('checkMark');
	var animation1 = document.getElementById('animation1');
	var police = document.getElementById('police');

	continueButton.onclick = function() {
		exercisingRights();
	}

	animation1.remove();

	fullAnimation('animation2', 'resident2', 'police2', 'a2context');

	checkMark.style.display = "block";
	warrant.style.display = "flex";
}

function fullAnimation(id, residentID, policeID, context) {
	var animationID = document.getElementById(id);
	var resident = document.getElementById(residentID);
	var residentDiv = document.getElementById(residentID).querySelectorAll('div');
	var police = document.getElementById(policeID);
	var policeDiv = document.getElementById(policeID).querySelectorAll('div');
	var context = document.getElementById(context);

	//The animation changes will be the starting point
	animationID.style.display = "block";
	animationChanges(policeID, '-88vh', 'rotate(-70deg)', '-12vh', '5.3vh', 'rotate(-50deg)', '-4vh', '5vh');
	animationChanges(residentID, '-70vh', 'rotate(70deg)', '-12vh', '0.5vh', 'rotate(50deg)', '-4vh', '0.7vh');

	setTimeout(function() {
		police.style.animation = "hide 3s 1";
		resident.style.animation = "hide 3s 1";
	}, 1000);


	setTimeout(function() {
		animationChanges(policeID, '-68vh', 'rotate(-70deg)', '-12vh', '5.3vh', 'rotate(-50deg)', '-4vh', '5vh');
		animationChanges(residentID, '-70vh', 'rotate(-120deg)', '-14vh', '5.3vh', 'rotate(-95deg)', '-4vh', '5.2vh');
		context.style.marginTop = "-64vh";
		police.style.animation = "show 3s 1";
		resident.style.animation = "show 3s 1";
	}, 2900);

	/*End of first frame*/

	setTimeout(function() {
		police.style.animation = "hide 3s 1";
		resident.style.animation = "hide 3s 1";
	}, 5900);

	setTimeout(function() {
		animationChanges(policeID, '-48vh', 'rotate(-70deg)', '-12vh', '5.3vh', 'rotate(50deg)', '-4vh', '1vh');
		animationChanges(residentID, '-60vh', 'rotate(-120deg)', '-14vh', '5.3vh', 'rotate(-95deg)', '-4vh', '5.2vh');
		police.style.animation = "show 3s 1";
		resident.style.animation = "show 3s 1";
	}, 7800);

	/*End of second frame*/

	setTimeout(function() {
		police.style.animation = "hide 3s 1";
		resident.style.animation = "hide 3s 1";
	}, 10800);

	setTimeout(function() {
		animationChanges(policeID, '-28vh', 'rotate(100deg)', '-13vh', '0.6vh', 'rotate(50deg)', '-3vh', '1vh');
		animationChanges(residentID, '-40vh', 'rotate(-120deg)', '-14vh', '5.3vh', 'rotate(-95deg)', '-4vh', '5.2vh');
		police.style.animation = "show 3s 1";
		resident.style.animation = "show 3s 1";
	}, 12700);

	/*End of third frame*/

	setTimeout(function() {
		police.style.animation = "hide 3s 1";
		resident.style.animation = "hide 3s 1";
	}, 15700);

	setTimeout(function() {
		animationChanges(policeID, '-14vh', 'rotate(100deg)', '-13vh', '0.6vh', 'rotate(85deg)', '-4vh', '0.6vh');
		animationChanges(residentID, '-60vh', 'rotate(-230deg)', '-14vh', '1vh', 'rotate(-130deg)', '-5vh', '5vh');
		context.style.marginTop = "-62vh";
		police.style.animation = "show 3s 1";
		resident.style.animation = "show 3s 1";
	}, 17600);

	/*End of fourth frame*/

	setTimeout(function() {
		police.style.animation = "hide 3s 1";
		resident.style.animation = "hide 3s 1";
	}, 20600);

	setTimeout(function() {
		police.style.display = "none";
		animationChanges(residentID, '-30vh', 'rotate(-120deg)', '-14vh', '5.3vh', 'rotate(-95deg)', '-4vh', '5.2vh');
		context.style.marginTop = "-64.1vh";
		police.style.animation = "show 3s 1";
		resident.style.animation = "show 3s 1";
	}, 22500);

	/*End of Fifth frame*/
}

function animationChanges(iD, idMarginLeft, lhRotate, lhMarginTop, lhMarginLeft, rhRotate, rhMarginTop, rhMarginLeft) {
	//Grabs id and all divs containing inside that id
	var id = document.getElementById(iD);
	var idDiv = document.getElementById(iD).querySelectorAll('div');

	//Add new css stylesheets on the id, left hand and right hand of sitck figure
	id.style.marginLeft = idMarginLeft;
	
	idDiv[4].style.transform = lhRotate;
	idDiv[4].style.marginTop = lhMarginTop;
	idDiv[4].style.marginLeft = lhMarginLeft;

	idDiv[5].style.transform = rhRotate;
	idDiv[5].style.marginTop = rhMarginTop;
	idDiv[5].style.marginLeft = rhMarginLeft;
}

function continueTo() {
	//Get introduccion and buttons id from index.html
	var introduccion = document.getElementById('introduccion');
	var button = document.getElementById('buttons');
	var continueButton = document.getElementById('continueButton');

	//Hide the objects from sight slowly
	introduccion.style.animation = "hide 3s 1";
	continueButton.style.animation = "hide 2.9s 1";
	continueButton.style.cursor = "context-menu";
	continueButton.onclick = function() {
		//This is blank because i dont want this
		//button to be clicked yet
	}

	//In 2.9 seconds, diplay none to introduccion and buttons id
	//Then start animation 1
	setTimeout(function() {
		introduccion.style.display = "none";
		continueButton.style.display = "block";
		continueButton.style.cursor = "pointer";
		incorrectWay();
	}, 2900);
}

function displayBorder() {
	//Get border id from index.html
	var border = document.getElementById('border');

	//In 3 seconds, display border
	setTimeout(function() {
		border.style.display = "block";
		border.style.animation = "displayBorder 3s 1";
	}, 3000);
}

function startAnimation() {
	//Display border
	displayBorder();

	//Get introduccion and buttons id from index.html
	var introduccion = document.getElementById('introduccion');
	var buttons = document.getElementById('buttons');

	//In 6.5 seconds, display introdiccion and slowly display introduccion on screen
	setTimeout(function() {
		introduccion.style.display = "flex";
		introduccion.style.animation = "introduccion 6s 1";
		button.style.display = "flex";
		button.style.animation = "introduccion 6s 1";
	}, 6500);
}

//This function starts my hole journey
startAnimation();