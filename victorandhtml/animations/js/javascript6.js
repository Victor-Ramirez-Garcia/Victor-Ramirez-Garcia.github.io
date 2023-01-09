function answer() {
  var x = document.getElementById('text');//input text
  var y = document.getElementById('button');//input button
  var z = document.getElementById('change');//a tag

  y.onclick = function() {
    if (x.value === '18') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else {
      x.maxLength = '0';
      x.value = '';
      y.formAction = 'index.html';
      y.type = 'submit';
    }
  }

  x.onclick = function() {
    if (x.value === '18') {
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
