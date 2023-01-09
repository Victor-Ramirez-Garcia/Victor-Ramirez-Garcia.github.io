//This is my javascript file

//This is what im going to do
//I am going to set a timeout function
//so that when the animation turns into a message icon
//the link is going to change
//and you have to click it super fast because it will disappear
//and im going to set another timeout function for when
//the message icon changes, the link will change to a you lose file
//and Ill also set a timeout function so that the h1 tag says,
//'You lost click on the square to retry again'
//and then ill set a timeout function that will make a <a href> tag
//with a link to the you lose file

function changes() {
  setTimeout(function() {
    document.getElementById('mainForm').action = "animation2.html";
  }, 2200);//in 2.2 seconds the form will change action from #mainForm to animation2.html

  setTimeout(function() {
    document.getElementById('mainForm').action = '';
  }, 3300);//in 3.3 seconds, the mainForm will change action from animation2.html to nothing
}

changes();

function button() {
  setTimeout(function() {
    var form = document.getElementById('mainForm');
    var input = document.getElementById('button');
    input.style.height = '600px';
    input.style.width = '600px';
    form.action = 'index.html';
    document.getElementById('context').textContent = 'Wow you lost?!? Click the square to restart';
  }, 4000);
}

button();
