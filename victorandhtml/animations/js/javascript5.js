function answer() {
  var x = document.getElementById('text');
  var y = document.getElementById('button');
  var z = document.getElementById('change');

  y.onclick = function() {
    if (x.value === '2') {
      x.maxLength = '0';
      x.value = '';
      y.type = 'submit';
    } else {
      x.value = '';
      y.formAction = 'index.html';
      y.type = 'submit';
    }
  }
}

answer();
