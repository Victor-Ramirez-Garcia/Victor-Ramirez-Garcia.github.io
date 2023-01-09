function mountain1() {
  var canvas = document.getElementById('mountain1');
  if (canvas && canvas.getContext) {
    canvas.width = '362';
    canvas.height = '600';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.beginPath();
      vr.fillStyle = '#0075B9';//makes color
      vr.strokeStyle = '#0075B9';//makes color
      vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);//fills color
      vr.strokeRect(0,0, vr.canvas.width, vr.canvas.height);//strokes color

      vr.arc(100,100,85,0,2*Math.PI,false)//makes circle
      vr.fillStyle = '#ffd000';//make color
      vr.fill();//fill to make circle

      vr.beginPath();
      vr.moveTo(0, 600);//move to bottom left
      vr.lineTo(190,165);//the line is going to be on the top of mountain
      vr.lineTo(362,600);//then the line will move onto the bottom right
      vr.fillStyle = '#C4EEFF';//make color
      vr.fill();//fill

      vr.beginPath();
      vr.moveTo(0,600);//first point
      vr.lineTo(142,274);//second point
      vr.lineTo(165,340);//third point, you can change y coordinate
      vr.lineTo(190,274);//fourth point
      vr.lineTo(210,340);//fifth point, you can change y coordinate
      vr.lineTo(233,274);//sixth point
      vr.lineTo(362,600);//last point
      vr.fillStyle = 'grey';//make color
      vr.fill();//fill

      //right side
      vr.beginPath();
      vr.moveTo(300,50);
      vr.lineTo(300,100);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(250,150);
      vr.lineTo(250,200);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(300,200);
      vr.lineTo(300,250);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(300,200);
      vr.lineTo(300,250);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(350,400);
      vr.lineTo(350,450);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(320,300);
      vr.lineTo(320,350);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(280,250);
      vr.lineTo(280,300);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      //left side
      vr.beginPath();
      vr.moveTo(40,450);
      vr.lineTo(40,500);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(20,350);
      vr.lineTo(20,400);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(70,250);
      vr.lineTo(70,300);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(30,150);
      vr.lineTo(30,200);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(100,190);
      vr.lineTo(100,240);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();

      vr.beginPath();
      vr.moveTo(120,250);
      vr.lineTo(120,300);
      vr.lineWidth = 3;
      vr.strokeStyle = 'blue';
      vr.stroke();
    }
  }
}

mountain1();

function mountain2() {
  var canvas = document.getElementById('mountain2');
  if (canvas && canvas.getContext) {
    canvas.width = '362';
    canvas.height = '600';
    var vr = canvas.getContext('2d');
    if (vr) {

      vr.fillStyle = '#FD5E53';//makes color
      vr.strokeStyle = '#FD5E53';//makes color
      vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);//fills color
			vr.strokeRect(0,0, vr.canvas.width, vr.canvas.height);//strokes color

      vr.arc(250,330,85,0,2*Math.PI,false)//makes circle
      vr.fillStyle = 'darkorange';//color to darkorange
      vr.fill();//fill to make circle
      vr.beginPath();

      vr.beginPath();
      vr.moveTo(0, 600);//move to bottom left
      vr.lineTo(190,165);//the line is going to be on the top of mountain
      vr.lineTo(362,600);//then the line will move onto the bottom right
      vr.fillStyle = '#FFE4E4';//make color
      vr.fill();//fill

      vr.beginPath();
      vr.moveTo(0,600);//first point
      vr.lineTo(142,274);//second point
      vr.lineTo(165,340);//third point, you can change y coordinate
      vr.lineTo(190,274);//fourth point
      vr.lineTo(210,340);//fifth point, you can change y coordinate
      vr.lineTo(233,274);//sixth point
      vr.lineTo(362,600);//last point
      vr.fillStyle = '#b39e9d';//makes color
      vr.fill();//fill
    }
  }
}

mountain2();

function mountain3() {
  var canvas = document.getElementById('mountain3');
  if (canvas && canvas.getContext) {
    canvas.width = '362';
    canvas.height = '600';
    var vr = canvas.getContext('2d');
    if (vr) {
      vr.fillStyle = '#160F75';//makes color
      vr.strokeStyle = '#160F75';//makes color
      vr.fillRect(0,0, vr.canvas.width, vr.canvas.height);//fills color
			vr.strokeRect(0,0, vr.canvas.width, vr.canvas.height);//strokes color

      vr.beginPath();
      vr.moveTo(65,50);//first point
      vr.quadraticCurveTo(-30,320, 240,230);//second and third point
      vr.moveTo(240,230);//same place as the third point
      vr.quadraticCurveTo(50,240, 65,50);//fourth and same as first point
      vr.fillStyle = '#FEFCD7';//make color
      vr.fill();//fill

      vr.beginPath();
      vr.moveTo(0, 600);//move to bottom left
      vr.lineTo(190,165);//the line is going to be on the top of mountain
      vr.lineTo(362,600);//then the line will move onto the bottom right
      vr.fillStyle = '#C8C6E5';//make color
      vr.fill();//fill

      vr.beginPath();
      vr.moveTo(0,600);//first point
      vr.lineTo(142,274);//second point
      vr.lineTo(165,340);//third point, you can change y coordinate
      vr.lineTo(190,274);//fourth point
      vr.lineTo(210,340);//fifth point, you can change y coordinate
      vr.lineTo(233,274);//sixth point
      vr.lineTo(362,600);//last point
      vr.fillStyle = 'grey';//make color
      vr.fill();//fill
    }
  }
}

mountain3();
