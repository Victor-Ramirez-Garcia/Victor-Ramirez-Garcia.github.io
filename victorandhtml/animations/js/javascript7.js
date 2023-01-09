function change() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(1);//console log every time you click
  el.onclick = function() { change2();}//change the onlick function set to the other function
}

function change2() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(2);//console log every time you click
  el.onclick = function() { change3();}//change the onlick function set to the other function
}

function change3() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(3);//console log every time you click
  el.onclick = function() { change4();}//change the onlick function set to the other function
}

function change4() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(4);//console log every time you click
  el.onclick = function() { change5();}//change the onlick function set to the other function
}

function change5() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(5);//console log every time you click
  el.onclick = function() { change6();}//change the onlick function set to the other function
}

function change6() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(6);//console log every time you click
  el.onclick = function() { change7();}//change the onlick function set to the other function
}

function change7() {//declare function
  var el = document.getElementById('button');//grab id
  console.log(7);//console log every time you click
  el.type = 'submit';//change input type to submit
}

//this is the timeout function set to 1.9 seconds
setTimeout(function() {//declare anonymous function
  var el = document.getElementById('button');//grab id
  var h1 = document.getElementById('h1');//grab id
  h1.textContent = 'Whoops you were too slow!! Click twice to try again';//change h1 text
  form.action = 'index.html';//change form html link
  el.type = 'submit';//change input type to submit
}, 1900);
