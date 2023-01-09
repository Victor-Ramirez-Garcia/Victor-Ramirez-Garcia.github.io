function answer() {
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  var z = document.getElementById('change');

  y.onclick = function() {
    if (x.value === 'blue,green,red,orange,purple,pink') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else {
      x.value = '';
      y.formAction = 'index.html';
      y.type = 'submit';
    }
  }

  x.onclick = function() {
    if (x.value === 'blue,green,red,orange,purple,pink') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else {
      x.value = '';
      x.formAction = 'index.html';
      y.type = 'submit';
    }
  }
}

answer();

function change() {
	var x = document.getElementById('text');
	var h1 = document.getElementById('context');
	var h = document.getElementById('context2');
  	var y = document.getElementById('button');
	var c = document.getElementById('circle');
	setTimeout(function() {
		c.style.backgroundColor = 'green';
	}, 2000);

	setTimeout(function() {
		c.style.backgroundColor = 'red';
	}, 4000);

	setTimeout(function() {
		c.style.backgroundColor = 'orange';
	}, 6000);

	setTimeout(function() {
		c.style.backgroundColor = 'purple';
	}, 8000);

	setTimeout(function() {
		c.style.backgroundColor = 'pink';
	}, 10000);

	setTimeout(function() {
		c.style.backgroundColor = 'transparent';
		x.style.backgroundColor = 'white';
		y.style.backgroundColor = 'white';
		x.style.borderColor = 'white';
		y.style.borderColor = 'white';
		h1.style.color = 'black';
		h.style.color = 'black';
		y.style.color = 'black';
	}, 12000);
}

change();