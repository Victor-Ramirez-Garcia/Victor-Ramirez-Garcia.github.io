function change() {
  setTimeout(function() {
    document.getElementById('mainForm').action = 'animation4.html';
    document.getElementById('context').textContent = 'Ok, you can click it now lol';
    }, 5000);
}

change();
