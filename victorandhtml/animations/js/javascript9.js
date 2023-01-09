function answer() {
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  var z = document.getElementById('change');

  y.onclick = function() {
    if (x.value === '7,6,5,4,3,2,1,12,11,10,9,8,7') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else if (x.value === '7,6,5,4,3,2,1,12,11,10,9,8') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    }  else {
      x.value = '';
      y.formAction = 'index.html';
      y.type = 'submit';
    }
  }

  x.onclick = function() {
    if (x.value === '7,6,5,4,3,2,1,12,11,10,9,8,7') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else if (x.value === '7,6,5,4,3,2,1,12,11,10,9,8') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    }  else {
      x.value = '';
      x.formAction = 'index.html';
      y.type = 'submit';
    }
  }
}

answer();

function clock() {
  var canvas = document.getElementById('clock');
  if (canvas && canvas.getContext) {
    canvas.width = '500';
    canvas.height = '500';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.arc(250,250,245,0,2*Math.PI,false);
      vr.lineWidth = 10;
      vr.stroke();

      vr.beginPath();
      vr.moveTo(0,250);
      vr.lineTo(100,250);
      vr.lineWidth = 15;
      vr.stroke();

      vr.beginPath();
      vr.moveTo(500,250);
      vr.lineTo(400,250);
      vr.lineWidth = 15;
      vr.stroke();

      vr.beginPath();
      vr.moveTo(250,500);
      vr.lineTo(250,400);
      vr.lineWidth = 15;
      vr.stroke();

      vr.beginPath();
      vr.moveTo(250,0);
      vr.lineTo(250,100);
      vr.lineWidth = 15;
      vr.stroke();
    }
  }
}

clock();
