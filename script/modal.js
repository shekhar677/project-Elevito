var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName('openmodal');
var close = document.getElementsByClassName('close');
var i;

// function to open modal
for(let i=0; i<btns.length; i++) {
  btns[i].addEventListener('click', function() {
    modals[i].style.opacity = '1';
    modals[i].style.display = 'block';
  });
}

// function to close modal
for(let i=0; i<close.length; i++) {
  close[i].addEventListener('click', function() {
    modals[i].style.display = 'none';
  });
}

// function to close modal when clicked outside of modal
window.onclick = function(event) {
  for(let i=0; i<modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
  }
}