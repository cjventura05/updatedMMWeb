/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

const leftButton = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.arrow.right');
var activeID = "";

leftButton.addEventListener('click', () => {
    turnSlider('left');
    downloadLink('left');
});

rightButton.addEventListener('click', () => {
    turnSlider('right');
    downloadLink('right');
});

function turnSlider(direction) {
    const slides = document.querySelectorAll(`.carouselslide`);
    slides.forEach(slide => {
        let currentSlide = +(slide.classList + '').split('-')[1];
        let slideToBe;
        switch (direction) {
            case 'left': {
                slideToBe = currentSlide - 1;
                if (slideToBe < 1) {
                    slideToBe = slides.length;
                    slide.style.left = '-500px';
                }
                break;
            }
            case 'right': {
                slideToBe = currentSlide + 1;
                if (slideToBe > slides.length) {
                    slideToBe = 1;
                    slide.style.left = '2000px';
                }
                break;
            }
        }
        slide.classList.remove(`slide-${currentSlide}`);
        slide.classList.add(`slide-${slideToBe}`);
        activeID = currentSlide;
    });
}

function downloadLink(direction) {
    var apple = document.getElementById("apple-app");
    var google = document.getElementById("google-app");
    switch (direction) {
        case 'left': {
            switch (activeID) {
                case 1:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.buyer");
                    apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-buyer-app/id1658293489");
                    break;
                case 2:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.driver");
                    apple.setAttribute("href", "#");
                    break;
                case 3:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.seller");
                    apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-sme-app/id1659207289");
                    break;
            }
        }
            break;
        case 'right': {
            switch (activeID) {
                case 1:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.seller");
                    apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-sme-app/id1659207289");
                    break;
                case 2:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.buyer");
                    apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-buyer-app/id1658293489");
                    break;
                case 3:
                    google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.driver");
                    apple.setAttribute("href", "#");
                    break;
            }
        }
    }
}

$('#google-app, #apple-app').on('click', function () {
    alert(activeID);
    var apple = document.getElementById("apple-app");
    var google = document.getElementById("google-app");
    switch (activeID) {
        case 1:
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.buyer");
            apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-buyer-app/id1658293489");
            break;
        case 2:
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.seller");
            apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-sme-app/id1659207289");
            break;
        case 3:
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.driver");
            apple.setAttribute("href", "#");
            break;
    }
});
/*
$(document).ready(function () {
    $('.carousel').carousel();
});

$('#google-app, #apple-app').on('click', function () {
    var id = $("#carousel-ID a.carousel-item.active").attr('id');
    var apple = document.getElementById("apple-app");
    var google = document.getElementById("google-app");
    switch (id) {
        case "One":
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.buyer");
            apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-buyer-app/id1658293489");
            break;
        case "Two":
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.seller");
            apple.setAttribute("href", "https://apps.apple.com/ph/app/mastermovers-sme-app/id1659207289");
            break;
        case "Three":
            google.setAttribute("href", "https://play.google.com/store/apps/details?id=com.mastermovers.driver");
            apple.setAttribute("href", "#");
            break;
    }
});
*/