// header scroll
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});
try{

window.addEventListener('scroll', function() {
    var element = document.querySelector('.hero ul');
    var rect = element.getBoundingClientRect();
    var offset = rect.top;
    var threshold = -150; // Adjust this value as needed
    
    if (window.pageYOffset > offset - threshold) {
      element.classList.add('sticky');
    } else {
      element.classList.remove('sticky');
    }
  });
}
catch(err){
    console.log("no sticky");
}
// menu
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuToggle');
const menuToggletext = document.querySelector('.menuToggle p');
const menulistitem = document.querySelectorAll('.menu ul li');
const navlinks = document.querySelector('.hero ul');
menuToggle.onclick = function() {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    header.classList.remove('scroll');
    document.body.classList.toggle('noscroll');    
    try{
        navlinks.classList.remove('sticky');
    }
    catch(err){
    }
    // disable scrolling when menu is open
};

// mouse tracker menu

// document.addEventListener('mousemove', function(e) {
    //     mousecirkel.style.left = e.clientX + 'px';
    //     mousecirkel.style.top = e.clientY + 'px';   
    // });
    
const mousecirkel = document.querySelector('.mousecirkel');
    
window.addEventListener('mousemove', event => { 
    const { pageX, pageY } = event;
    if (document.body.id == "home") {
        const blob = document.getElementById("blob");
        blob.animate({
            left: `${pageX}px`,
            top: `${pageY}px`
        }, { duration: 3000, fill: "forwards" });
    }
    if (menu.classList.contains('active')) {
    mousecirkel.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, { duration: 3000, fill: "forwards" });
    }
});
const homepagetext = document.querySelectorAll('.homepagetext');
const overonscol = document.querySelectorAll('.overonscol');
const learnmore = document.querySelectorAll('.learnmore');

homepagetext.forEach(sec => {
    // add class active to section when mouse is over it
    sec.addEventListener('mouseover', function() {
        sec.classList.add('active');
        sec.addEventListener('mousemove', event => {
            const { clientX, clientY } = event;
            const rect = sec.getBoundingClientRect();
            const offsetX = clientX - rect.left;
            const offsetY = clientY - rect.top;
            learnmore.forEach(learn => {
                learn.style.left = `${offsetX}px`;
                learn.style.top = `${offsetY}px`;
            });
        });
    });
    sec.addEventListener('mouseout', function() {
        sec.classList.remove('active');
    });
});


menulistitem.forEach(list => {
    list.addEventListener('mouseover', function() {
        mousecirkel.classList.add('active');
    });
    list.addEventListener('mouseout', function() {
        mousecirkel.classList.remove('active');
    });
    
});


// scroll to id
function scrollToElement(elementId) {
    var access = document.getElementById(elementId);
    var offset = -125; // Adjust this value as needed

    // Calculate the actual offset
    var elementTop = access.getBoundingClientRect().top;
    var offsetPosition = elementTop + window.pageYOffset + offset;

    // Scroll to the calculated position
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
}

function scrolltoWebsite() {
    scrollToElement("website");
}

function scrolltoSEO() {
    scrollToElement("SEO");
}

function scrolltoAanpassen() {
    scrollToElement("aanpassen");
}

function scrolltoSocialmedia() {
    scrollToElement("socialmedia");
}

function scrolltoUitstraling() {
    scrollToElement("uitstraling");
}

// ----------------- Theme switcher -----------------
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.onclick = () => {
document.querySelector("body").classList.toggle("light");
};