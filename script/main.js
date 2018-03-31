//script for menu toggle
var menuBtn = document.getElementById('menu');
var navLinks = document.getElementById('nav-links');
var check = document.getElementById('check');

// these elements are targeted to handle color of nav-bar
var header = document.getElementById('header');
var projectGrid = document.getElementById('project-grid-first');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var leftInfo = document.querySelector('.hover-info-left');
var rightInfo = document.querySelector('.hover-info-right');

var sectionA = document.getElementById('section-a');
var sectionB = document.getElementById('section-b');
var sectionD = document.getElementById('section-d');
var sectionE = document.getElementById('section-e');
var loveMeMore = document.getElementById('love-me-more');
var contactForm = document.getElementById('contact-form');
var elevitoAhead = document.getElementById('elevito-ahead');
var weWrite = document.getElementById('we-write');
var articleGist = document.getElementById('article-gist');
var someCompany = document.getElementById('some-company');

// element to change on scroll at certain point
var logo = document.getElementById('logo');
var bar = document.getElementsByClassName('bar');

// show menu function............
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    navLinks.classList.toggle('open-nav');
    check.classList.toggle('check');
});


// change color of nav at certain points.............
function changeToWhite() {
    logo.style.fill = 'var(--white)';
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = 'var(--white)';
    }
}

function changeToBlack() {
    logo.style.fill = 'var(--lighter-black)';
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = 'var(--lighter-black)';
    }
}

// ................EVENT LISTENER FOR index.html............................

window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    // for section-a info-in-white
    if (currentScrollPos > sectionA.offsetTop && currentScrollPos < (sectionA.offsetHeight + sectionA.offsetTop)) {
        changeToBlack();
    }
    // for section-b info-in-white
    else if (currentScrollPos > sectionB.offsetTop && currentScrollPos < (sectionB.offsetHeight + sectionB.offsetTop)) {
        changeToBlack();
    }
    // for section-d info-in-white
    else if (currentScrollPos > sectionD.offsetTop && currentScrollPos < (sectionD.offsetHeight + sectionD.offsetTop)) {
        changeToBlack();
    } else {
        changeToWhite();
    }
});


// ...........................EVENT LISTENER FOR projects.html............................
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    // for section-e info-in-white
    if (currentScrollPos > sectionE.offsetTop && currentScrollPos < (sectionE.offsetHeight + sectionE.offsetTop)) {
        changeToBlack();
    } else {
        changeToWhite();
    }
});

// .............................EVENT LISTENER FOR services.html.............................
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    // for section-e info-in-white
    if (currentScrollPos > loveMeMore.offsetTop && currentScrollPos < (loveMeMore.offsetHeight + loveMeMore.offsetTop)) {
        changeToBlack();
    } else {
        changeToWhite();
    }
});


// .............................EVENT LISTENER FOR contact.html.............................
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    // for section-e info-in-white
    if (currentScrollPos > contactForm.offsetTop && currentScrollPos < (contactForm.offsetHeight + contactForm.offsetTop)) {
        changeToBlack();
    } else {
        changeToWhite();
    }
});

// ................................EVENT LISTENER FOR about.html..........................
window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    // for section-e info-in-white
    if (currentScrollPos > elevitoAhead.offsetTop && currentScrollPos < (elevitoAhead.offsetHeight + elevitoAhead.offsetTop)) {
        changeToBlack();
    }
		else if (currentScrollPos > weWrite.offsetTop && currentScrollPos < (weWrite.offsetHeight + weWrite.offsetTop)) {
        changeToBlack();
    }
		else if (currentScrollPos > articleGist.offsetTop && currentScrollPos < (articleGist.offsetHeight + articleGist.offsetTop)) {
				changeToBlack();
		}
		else if (currentScrollPos > someCompany.offsetTop && currentScrollPos < (someCompany.offsetHeight + someCompany.offsetTop)) {
        changeToBlack();
    } else {
        changeToWhite();
    }
});

// //this listenes for mouseover for projects-
//
// window.addEventListener("resize", function() {
//   var size = document.documentElement.clientWidth;
//   if( size < 768) {
//     console.log('its ok');
//     for(var i=0; i< servicesBox.length; i++) {
//         servicesBox[i].addEventListener('click', function() {
//           servicesBox[i].classList.toggle('services-hover');
//         });
//     }
//   }
// });


// //display content on other side
// left.addEventListener('mouseover', function(event) {
//   leftInfo.classList.toggle('hover-info-show');
// });
// left.addEventListener('mouseleave', function(event) {
//   leftInfo.classList.toggle('hover-info-hide');
// });
