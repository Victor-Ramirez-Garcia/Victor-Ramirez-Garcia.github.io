
/*The maze grid is 84 by 84 vh*/
/*The maze im going to make is going to be a 6 by 6 grid meaning every 12vh pixels = 1 dot */


/*Lost function below will assign the window location to restart the current maze*/
function lost() {
 	window.location.assign("../HTML/imaze3.html");
}/*End of function*/
 

/*Win function below will assing the window location to go on to the next maze*/
function win() {
 	window.location.assign("../HTML/imaze4.html");
}/*End of function*/


/*The two add event listeners below will set the square css properties and
will make the square move with the arrow keys of your keyboard*/


/*These two new variables are super important otherwise the whole code you see on screen
wouldn't have happened.*/
var square = document.getElementById('MovingSquare');/*square: grab MovingSquare id*/
var moveBy = 3;/*New variable: move 1 virtual height pixel*/


/*The first event listener below when the browser loads, it will:*/
/*add position relative property(relative and absolute position property makes top and left work),*/
/*add top property to 0 virtual height pixels,*/
/*and add left property to 0 virtual height pixels.*/
/*top and left are properties that were going to be using to make this work, 
but without the position property, those properties wont work so please use the position property.*/
window.addEventListener('load', () => {
	square.style.position = "relative";
	square.style.top = '0vh';
	square.style.left = '0vh';
});/*End of event listener*/


/*The second event listener below when you press the arrow keys down, it will:*/


/*set a new variable called integerTop that turns the square style top string into a integer*/
/*and set a new variable called integerLeft that turns the square style left string into a integer.*/
/*We do this so that it can subtract moveBy from the amount of vh pixels there is in the square.*/

/*Then it will declare switch statement with event.key method(keyboard event declares keyboard options)*/
/*that will move the square style top or left(depending which arrow your holding on) and after 
the square moved, then the switch statement will stop.*/
window.addEventListener('keydown', (e) => {
	var integerLeft = parseInt(square.style.left);
	var integerTop = parseInt(square.style.top);

	switch(e.key) {
		case 'ArrowUp':/*When pressed the up arrow key*/
			square.style.top = integerTop - moveBy + 'vh';
			/*The amount of virtual height pixels currently - 1 virtual height pixel*/
			break;/*stop*/
		case 'ArrowDown':/*When pressed the down arrow key*/
			square.style.top = integerTop + moveBy + 'vh';
			/*The amount of virtual height pixels currently + 1 virtual height pixel*/
			break;/*stop*/
		case 'ArrowLeft':/*When pressed the left arrow key*/
			square.style.left = integerLeft - moveBy + 'vh';
			/*The amount of virtual height pixels currently - 1 virtual height pixel*/
			break;/*stop*/
		case 'ArrowRight':/*When pressed the right arrow key*/
			square.style.left = integerLeft + moveBy + 'vh';
			/*The amount of virtual height pixels currently + 1 virtual height pixel*/
			break;/*stop*/
	}/*End of switch statement*/
})/*End of event listener*/


/*This maze collision function will make it so that every wall and border the 
square touches will restart the maze entirely, but if you touch the green 
square, you'll move on to the next maze*/
function mazeCollision() {
	/*This is the border collision that will make sure that the square can go out of bounds*/
	function borderCollision() {
		if(square.style.top === '-3vh' || square.style.top === '87vh' || 
			square.style.left === "-3vh" || square.style.left === '87vh') {
			lost();
		}/*End of if statement*/
	}/*End of function*/

	borderCollision();

	/*This is the win collision that will send you to another maze when the square touches
	the green square.*/
	function winCollision() {
		if(square.style.top === '0vh' && square.style.left === '84vh') {
			win();
		}/*End of if statement*/		
	}/*End of function*/

	winCollision();

	/*These 7 functions are the process to make the wall collision detection.*/


	/*First it will make a function that if the square collides with ONE unit,
	it will call lost function.*/
 	function unitCollision(top,left) {
		if (square.style.top === top + 'vh' && square.style.left === left + 'vh') {
			lost();
		}/*End of if statement*/
	}/*End of function*/


	/*Once I created my one unit collision function, I can now make another function
	so that I can make ONE wall collide only for the horizontal walls.*/
	function wallHorizontalCollision(to,y,from) {
		for (var i = from; i < to; i++) {
			unitCollision(y,i);
		}/*End of for loop*/
	}/*End of function*/


	/*Once I created my one unit collision function, I can now make another function
	so that I can make ONE wall collide only for the vertical walls.*/
	function wallVerticalCollision(to,x,from) {
		for (var i = from; i < to; i++) {
			unitCollision(i,x);
		}/*End of for loop*/
	}/*End of function*/


	/*Then after I created my one wallHorizontalCollision function, I decided to
	grab the id and add the style width, top and left to the wallHorizontalCollision function 
	to save me even more time. I named the function newDivHorizontalCollision*/
	function newDivHorizontalCollision(number) {
		/*Grab all div id's inside of the id named border*/
		var x = document.getElementById('border').querySelectorAll('div');
		
		/*change the style string of width,top and left to a whole number or integer.*/
		var parseWidth = parseInt(x[number].style.width);
		var integerTop = parseInt(x[number].style.top);
		var integerLeft = parseInt(x[number].style.left);

		/*Then because of the issue of the Width, I had to add integerLeft to the 
		integerWidth to work.*/
		var integerWidth = parseWidth + integerLeft;

		/*Last put the parameters inside of the wallHorizontalCollision function.*/
		wallHorizontalCollision(integerWidth,integerTop,integerLeft);
	}


	/*Then after I created my one wallVSerticalCollision function, I decided to
	grab the id and add the style height, left and top to the wallVerticalCollision function 
	to save me even more time. I named the function newDivVerticalCollision.*/
	function newDivVerticalCollision(number) {
		/*Grab all div id's inside of the id named border*/
		var x = document.getElementById('border').querySelectorAll('div');
		
		/*change the style string of height,left and top to a whole number or integer.*/
		var parseHeight = parseInt(x[number].style.height);
		var integerLeft = parseInt(x[number].style.left);
		var integerTop = parseInt(x[number].style.top);

		/*Then because of the issue of the height, I had to add integerTop to the 
		integerHeight to work.*/
		var integerHeight = parseHeight + integerTop;

		/*Last put the parameters inside of the wallCollisionY function.*/
		wallVerticalCollision(integerHeight,integerLeft,integerTop);
	}

	/*Now the last part from this process is to make two more functions, one for the
	Horizontal walls and another for the Vertical walls that I will place the beginning number
	of the horizontal or vertical wall in the "from" parameter and the last horizontal or vertical 
	wall in the "to" parameter.*/


	function makeHorizontalWalls(from,to) {
		for (var i = 1 + from; i < 2 + to; i++) {
			newDivHorizontalCollision(i);
		};		
	}

	makeHorizontalWalls(1,8);	

	function makeVerticalWalls(from,to) {
		for (var i = 1 + from; i < 2 + to; i++) {
			newDivVerticalCollision(i);
		};		
	}

	makeVerticalWalls(9,20);
}/*End of function*/


/*This event listener will call mazeCollision function whenever the arrow keys are pressed down*/
window.addEventListener('keydown',mazeCollision);


/*This function named newDiv will make a new div that you can add 
marginTop, height, width, top and left properties*/
/*First it will:*/
/*make a new const named newDiv that will create a new div element,*/
/*then will make the square's position relative and add a background color of grey.*/
/*Then you can add a new marginTop,height,width,top and left property.*/
/*The units that ill be using are vh(virtual height pixels)*/
/*At last it will append the div element to the maze*/
function newDiv(marginTop,height,width,top,left) {
	 
  	const newDiv = document.createElement("div"); 

  	
  	newDiv.style.position = 'relative';
  	newDiv.style.backgroundColor = 'grey';

  	
  	newDiv.style.marginTop = -3 + marginTop + 'vh';
  	newDiv.style.height = 3 + height + 'vh';
	newDiv.style.width = 3 + width + 'vh';
	newDiv.style.top = top + 'vh';
	newDiv.style.left = left + 'vh';
 
 	document.getElementById("border").appendChild(newDiv);
}/*End of function*/


/*This is were all of the walls are going to be.*/
/*Im going to start with all horizontal walls first then all vertical walls.*/

/*I need a marginTop parameter because it will help me organize my code whenever I add a vertical wall
because whenever I add a height greater than 0, it will add the amount of height I put to the 
margin-top for the next div because I want every wall to default to top left.*/

/*newDiv(marginTop,height,width,top,left);#*/
/*Star of maze*/
newDiv(0,0,12,12,60);/*1*/ newDiv(0,0,12,24,12);/*2*/ newDiv(0,0,12,24,48);/*3*/

newDiv(0,0,12,36,24);/*4*/ newDiv(0,0,24,36,48);/*5*/ newDiv(0,0,12,60,72);/*6*/

newDiv(0,0,24,72,12);/*7*/ newDiv(0,0,12,72,48);/*8*/ 
/*End of horizontal walls*/

newDiv(0,12,0,0,12);/*9*/ newDiv(-12,24,0,0,24);/*10*/ newDiv(-24,72,0,0,36);/*11*/ 

newDiv(-72,24,0,0,48);/*12*/ newDiv(-24,48,0,0,72);/*13*/ newDiv(-48,12,0,24,12);/*14*/

newDiv(-12,24,0,36,24);/*15*/ newDiv(-24,12,0,36,48);/*16*/ newDiv(-12,24,0,48,12);/*17*/

newDiv(-24,24,0,48,60);/*18*/ newDiv(-24,24,0,60,48);/*19*/ newDiv(-24,12,0,60,72);/*20*/
/*End of vertical walls*/

/*End of maze*/




/*Below this is the buttons code and collision code for the people who use their ipads or phones*/
/*Its the same code as for the keyboard its just in a different format:*/

//variable button will grab all buttons id's
var button = document.getElementById('buttonCenter').querySelectorAll('button');

/*Then make one addEvent listener for each button, making the square move by clicking the button
and then activating the mazeCollision function to not go threw walls*/

/*I made 4 event listeners, one for each button, 
and every event listener will do when you click the button down:*/

/*will set a new variable called integerTop that turns the square style top string into a integer */
/*or will set a new variable called integerLeft that turns the square style left string into a integer
(depending on what button is being pressed).*/
/*We do this so that it can subtract moveBy from the amount of vh pixels there is in the square.*/

/*At last it will call mazeCollision function to add collision detection.*/


button[3].addEventListener('mousedown', (e) => {/*When up button clicked:*/
	var integerTop = parseInt(square.style.top);

	square.style.top = integerTop - moveBy + 'vh';
	/*The amount of virtual height pixels currently - 1 virtual height pixel*/

	//call mazeCollision function
	mazeCollision();
});/*End of event listener*/


button[2].addEventListener('mousedown', (e) => {/*When down button clicked:*/

	var integerTop = parseInt(square.style.top);

	square.style.top = integerTop + moveBy + 'vh';
	/*The amount of virtual height pixels currently + 1 virtual height pixel*/

	//call mazeCollision function
	mazeCollision();
});/*End of event listener*/


button[0].addEventListener('mousedown', (e) => {/*When left button clicked:*/
	var integerLeft = parseInt(square.style.left);

	square.style.left = integerLeft - moveBy + 'vh';
	/*The amount of virtual height pixels currently - 1 virtual height pixel*/

	//call mazeCollision function
	mazeCollision();
});/*End of event listener*/


button[1].addEventListener('mousedown', (e) => {/*When right button clicked:*/
	var integerLeft = parseInt(square.style.left);

	square.style.left = integerLeft + moveBy + 'vh';
	/*The amount of virtual height pixels currently + 1 virtual height pixel*/

	//call mazeCollision function
	mazeCollision();
});/*End of event listener*/