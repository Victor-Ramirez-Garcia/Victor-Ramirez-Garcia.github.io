function answer() {
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  var z = document.getElementById('change');

  y.onclick = function() {
    if (x.value === 'circle,square,rectangle,triangle,trapezoid,pentagon') {
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
    if (x.value === 'circle,square,rectangle,triangle,trapezoid,pentagon') {
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
    triangle();
    trapezoid();
    pentagon();
    
    setTimeout(function() {
      b.style.backgroundColor = 'darkblue';
      x.style.backgroundColor = 'white';
      x.style.borderColor = 'white';
      y.style.backgroundColor = 'white';
      y.style.borderColor = 'white';
    },2000)
  }
}

change();

function circles() {
  var c1 = document.getElementById('circle');
  var c2 = document.getElementById('square');
  var c3 = document.getElementById('rectangle');

  c1.style.backgroundColor = 'white';
  c2.style.backgroundColor = 'white';
  c3.style.backgroundColor = 'white';

  setTimeout(function() {
  c1.style.backgroundColor = 'transparent';
  c2.style.backgroundColor = 'transparent';
  c3.style.backgroundColor = 'transparent';
  },2000);
}

function triangle() {
  var canvas = document.getElementById('triangle');
  if (canvas && canvas.getContext) {
    canvas.width = '100';
    canvas.height = '100';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.moveTo(50,0);
      vr.lineTo(0,100);
      vr.lineTo(100,100);
      vr.lineTo(50,0);
      vr.fillStyle = 'white';
      vr.fill();
    }
  }
    setTimeout(function() {
    canvas.parentNode.remove(canvas);
  },2000);
}

function trapezoid() {
  var canvas = document.getElementById('trapezoid');
  if (canvas && canvas.getContext) {
    canvas.width = '200';
    canvas.height = '100';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.moveTo(0,100);
      vr.lineTo(200,100);
      vr.lineTo(150,0);
      vr.lineTo(50,0);
      vr.lineTo(0,100);
      vr.fillStyle = 'white';
      vr.fill();
    }
  }
  setTimeout(function() {
    canvas.parentNode.remove(canvas);
  },2000);
}

function pentagon() {
  var canvas = document.getElementById('pentagon');
  if (canvas && canvas.getContext) {
    canvas.width = '100';
    canvas.height = '100';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.moveTo(25,100);
      vr.lineTo(75,100);
      vr.lineTo(100,40);
      vr.lineTo(50,0);
      vr.lineTo(0,40);
      vr.lineTo(25,100);
      vr.fillStyle = 'white';
      vr.fill();
    }
  }
  setTimeout(function() {
    canvas.parentNode.remove(canvas);
  },2000);
}