const cursor = document.querySelector('.circle');
const para = document.querySelector('.para');
document.addEventListener('mousemove', e => {
  cursor.setAttribute('style', 'top: '+ (e.pageY - 45)+'px; left: '+(e.pageX - 45)+'px;');
  para.setAttribute('style', 'top: '+ (e.pageY - 60)+'px; left: '+(e.pageX - 50)+'px;');
})

function expand() {
    cursor.classList.add('expand');//add expand1 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand');//remove expand1 class
      }, 500);
}

function expand2() {
    cursor.classList.add('expand2');//add expand2 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand2');//remove expand2 class
      }, 500);
}

function expand3() {
    cursor.classList.add('expand3');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand3');//remove expand3 class
      }, 500);
}

function expand4() {
    cursor.classList.add('expand4');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand4');//remove expand3 class
      }, 500);
}

function expand5() {
    cursor.classList.add('expand5');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand5');//remove expand3 class
      }, 500);
}

function expand6() {
    cursor.classList.add('expand6');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand6');//remove expand3 class
      }, 500);
}

function expand7() {
    cursor.classList.add('expand7');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand7');//remove expand3 class
      }, 500);
}

function expand8() {
    cursor.classList.add('expand8');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand8');//remove expand3 class
      }, 500);
}

function expand9() {
    cursor.classList.add('expand9');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand9');//remove expand3 class
      }, 500);
}

function expand10() {
    cursor.classList.add('expand10');//add expand3 class
    setTimeout(() => {//set a timeout for 500 milliseconds & declare anonymous function
      cursor.classList.remove('expand10');//remove expand3 class
      }, 500);
}

/*What im trying to do is you will get a bigger scale
and a different color every time you click*/
function action() {
      para.onclick = function() {expand();
      para.onclick = function() {expand2();
      para.onclick = function() {expand3();
      para.onclick = function() {expand4();
      para.onclick = function() {expand5();
      para.onclick = function() {expand6();
      para.onclick = function() {expand7();
      para.onclick = function() {expand8();
      para.onclick = function() {expand9();
      para.onclick = function() {expand10(); action();//action() will repeat the hole code
}}}}}}}}}}}

action();
