//script for menu toggle
var menuBtn = document.getElementById('menu');
var navLinks = document.getElementById('nav-links');
var check = document.getElementById('check');

// these elements are targeted to handle color of nav-bar
var header = document.getElementById('header');
var sectionA = document.getElementById('section-a');
var sectionB = document.getElementById('section-b');
var sectionD = document.getElementById('section-d');
var projectGrid = document.getElementById('project-grid-first');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var leftInfo = document.querySelector('.hover-info-left');
var rightInfo = document.querySelector('.hover-info-right');

// element to change on scroll at certain point
var logo = document.getElementById('logo');
var bar = document.getElementsByClassName('bar');


//display content on other side
left.addEventListener('mouseover', function(event) {
  leftInfo.classList.toggle('hover-info-show');
});
left.addEventListener('mouseleave', function(event) {
  leftInfo.classList.toggle('hover-info-hide');
});

// show menu function............
menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('open-nav');
  check.classList.toggle('check');
});


// change color of nav at certain points.............
function changeToWhite() {
  logo.style.fill = 'var(--white)';
  for(var i =0; i< bar.length; i++) {
    bar[i].style.backgroundColor = 'var(--white)';
  }
}
function changeToBlack() {
  logo.style.fill = 'var(--lighter-black)';
  for(var i =0; i< bar.length; i++) {
    bar[i].style.backgroundColor = 'var(--lighter-black)';
  }
}

window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset; 

  // for section-a info-in-white
  if(currentScrollPos > sectionA.offsetTop && currentScrollPos < (sectionA.offsetHeight + sectionA.offsetTop)) {
    changeToBlack();
  }
  // for section-b info-in-white
  else if(currentScrollPos > sectionB.offsetTop && currentScrollPos < (sectionB.offsetHeight + sectionB.offsetTop)) {
    changeToBlack();
  } 
  // for section-d info-in-white
  else if(currentScrollPos > sectionD.offsetTop && currentScrollPos < (sectionD.offsetHeight + sectionD.offsetTop)) {
    changeToBlack();
  } 
  else {
    changeToWhite();
  }
});
