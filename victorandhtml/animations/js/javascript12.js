function trapezoid() {
  var canvas = document.getElementById('trapezoid');
  if (canvas && canvas.getContext) {
    canvas.width = '300';
    canvas.height = '200';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.moveTo(0,200);
      vr.lineTo(300,200);
      vr.lineTo(225,50);
      vr.lineTo(75,50);
      vr.lineTo(0,200);
      vr.fillStyle = '#CC0066';
      vr.fill();
    }
  }
}

trapezoid();