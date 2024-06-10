// header scroll
// const header = document.querySelector('header');
// window.addEventListener('scroll', function() {
//     if(window.scrollY > 0) {
//         header.classList.add('scroll');
//     } else {
//         header.classList.remove('scroll');
//     }
// });
const header = document.querySelector('header');
const list = document.querySelector('.hero ul');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    if (window.scrollY < lastScrollY) {
        header.classList.add('scroll');
        try{
        list.classList.add('sticky');
        }
        catch(err){
        }
        console.log('scrolling up');
    } else {
        header.classList.remove('scroll');
        try{
        list.classList.remove('sticky');
        }
        catch(err){
        }
        console.log('scrolling down');
    }
    lastScrollY = window.scrollY;
});
window.addEventListener('scroll', function() {
    if (window.scrollY == 0) {
        header.classList.remove('scroll');
        list.classList.remove('sticky');
    } 
});
// menu
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menuToggle');
const menuToggletext = document.querySelector('.menuToggle p');
const menulistitem = document.querySelectorAll('.menu ul li');
const navlinks = document.querySelector('.hero ul');
menuToggle.onclick = function() {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    // header.classList.remove('scroll');
    document.body.classList.toggle('noscroll');    
    try{
        navlinks.classList.remove('sticky');
    }
    catch(err){
    }
    // disable scrolling when menu is open
};
    
const mousecirkel = document.querySelector('.mousecirkel');
    
window.addEventListener('mousemove', event => { 
    const { clientX, clientY } = event;
    if (document.body.id == "home") {
        const blob = document.getElementById("blob");
        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 5000, fill: "forwards" });
    }
    if (menu.classList.contains('active')) {
        mousecirkel.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
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

// Function to toggle the theme
function toggleTheme() {
    // Get the body element
    const body = document.querySelector("body");
    // Toggle the 'light' class on the body
    body.classList.toggle("light");

    // Save the current theme to localStorage
    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

// Add a click event listener to the theme toggle button
themeToggle.onclick = toggleTheme;

// Check the saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.querySelector("body").classList.add("light");
    }
};