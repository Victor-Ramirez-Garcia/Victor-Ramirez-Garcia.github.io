function answer() {
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  var z = document.getElementById('change');

  y.onclick = function() {
    if (x.value === '8') {
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
    if (x.value === '8') {
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
  var g = document.getElementById('gone');
  var b = document.getElementById('container');
  var c1 = document.getElementById('context2');
  var c2 = document.getElementById('context3');
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  g.onclick = function() {
    b.style.backgroundColor = 'black';
    x.style.backgroundColor = 'black';
    x.style.borderColor = 'black';
    y.style.backgroundColor = 'black';
    y.style.borderColor = 'black';
    g.parentNode.remove(g);
    c1.textContent = '';
    c2.textContent = '';
    circles();
    setTimeout(function() {
      b.style.backgroundColor = 'darkblue';
      x.style.backgroundColor = 'white';
      x.style.borderColor = 'white';
      y.style.backgroundColor = 'white';
      y.style.borderColor = 'white';
    },1500)
  }
}

change();

function circles() {
  var c1 = document.getElementById('circle1');
  var c2 = document.getElementById('circle2');
  var c3 = document.getElementById('circle3');
  var c4 = document.getElementById('circle4');
  var c5 = document.getElementById('circle5');
  var c6 = document.getElementById('circle6');
  var c7 = document.getElementById('circle7');
  var c8 = document.getElementById('circle8');

  c1.style.backgroundColor = 'white';
  c2.style.backgroundColor = 'white';
  c3.style.backgroundColor = 'white';
  c4.style.backgroundColor = 'white';
  c5.style.backgroundColor = 'white';
  c6.style.backgroundColor = 'white';
  c7.style.backgroundColor = 'white';
  c8.style.backgroundColor = 'white';

  setTimeout(function() {
  c1.style.backgroundColor = 'transparent';
  c2.style.backgroundColor = 'transparent';
  c3.style.backgroundColor = 'transparent';
  c4.style.backgroundColor = 'transparent';
  c5.style.backgroundColor = 'transparent';
  c6.style.backgroundColor = 'transparent';
  c7.style.backgroundColor = 'transparent';
  c8.style.backgroundColor = 'transparent';
  },1500);
}