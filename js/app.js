
//Side Menu Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Auto Type 
var typed = new Typed('#auto-type', {
    strings: ["Developer.", "Professional Coder."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// WOW js

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();



// Mobile nav 
let menuToggleBtn = document.querySelector("#nav-toggle-btn");
let menuCloseBtn = document.querySelector("#nav-close-btn");
let mobileNavOverlay = document.querySelector("#mobile-nav-overlay");
let mobileNav = document.querySelector("#mobile-nav");

menuToggleBtn.addEventListener("click", () => {

    mobileNavOverlay.style.display = "block";
    mobileNav.style.right = "0%";

})

menuCloseBtn.addEventListener("click", () => {

    mobileNavOverlay.style.display = "none";
    mobileNav.style.right = "-100%";

})


//Side Navbar Active Class

let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");
let skillSection = document.getElementById("skill");
let resumeSection = document.getElementById("resume");
let servicesSection = document.getElementById("services");
let portfolioSection = document.getElementById("portfolio");
let contactSection = document.getElementById("contact");

// console.log(aboutSection);

let sideNavs = document.querySelectorAll(".side-nav-box a i");

let mobileNavs = document.querySelectorAll("#mobile-menu ul li a");


const homeSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    homeNav = document.querySelector(".side-nav-home");
    mobHomeNav = document.querySelector(".mobile-nav-home");

    if (entries[0].isIntersecting) {

        homeNav.classList.add("side-nav-active");
        mobHomeNav.classList.add("mobile-nav-active");
    }

}, { threshold: .9 })

homeSectionObserver.observe(homeSection);



const aboutSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    aboutNav = document.querySelector(".side-nav-about");
    mobAboutNav = document.querySelector(".mobile-nav-about");


    if (entries[0].isIntersecting) {

        aboutNav.classList.add("side-nav-active");
        mobAboutNav.classList.add("mobile-nav-active");
    }

}, { threshold: 1 })

aboutSectionObserver.observe(aboutSection);



const skillSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    skillNav = document.querySelector(".side-nav-skill");
    mobSkillNav = document.querySelector(".mobile-nav-skill");


    if (entries[0].isIntersecting) {

        skillNav.classList.add("side-nav-active");
        mobSkillNav.classList.add("mobile-nav-active");
    }



}, { threshold: 1 })

skillSectionObserver.observe(skillSection);



const resumeSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    resumeNav = document.querySelector(".side-nav-resume");
    mobResumeNav = document.querySelector(".mobile-nav-resume");


    if (entries[0].isIntersecting) {

        resumeNav.classList.add("side-nav-active");
        mobResumeNav.classList.add("mobile-nav-active");
    }

}, { threshold: 0.5 })

resumeSectionObserver.observe(resumeSection);



const servicesSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    servicesNav = document.querySelector(".side-nav-services");
    mobServicesNav = document.querySelector(".mobile-nav-services");


    if (entries[0].isIntersecting) {

        servicesNav.classList.add("side-nav-active");
        mobServicesNav.classList.add("mobile-nav-active");
    }

}, { threshold: 0.5 })

servicesSectionObserver.observe(servicesSection);



const portfolioSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    portfolioNav = document.querySelector(".side-nav-portfolio");
    mobPortfolioNav = document.querySelector(".mobile-nav-portfolio");


    if (entries[0].isIntersecting) {

        portfolioNav.classList.add("side-nav-active");
        mobPortfolioNav.classList.add("mobile-nav-active");
    }

}, { threshold: 0.3 })

portfolioSectionObserver.observe(portfolioSection);




const contactSectionObserver = new IntersectionObserver((entries) => {

    sideNavs.forEach((singleSideNav) => {
        singleSideNav.classList.remove("side-nav-active");
    });

    mobileNavs.forEach((singleMobileNav) => {
        singleMobileNav.classList.remove("mobile-nav-active");
    });

    contactNav = document.querySelector(".side-nav-contact");
    mobContactNav = document.querySelector(".mobile-nav-contact");


    if (entries[0].isIntersecting) {
        contactNav.classList.add("side-nav-active");
        mobContactNav.classList.add("mobile-nav-active");
    }

}, { threshold: 1 })

contactSectionObserver.observe(contactSection);


// Protfolio Sec 

const protShowBtn = document.getElementById("protfolio-show-btn");

const portHideSec = document.querySelectorAll(".protfolio-hide-sec");

protShowBtn.addEventListener("click", (e) => {

    portHideSec.forEach((sinSec) => {
        sinSec.style.display = "flex";
    })

    e.target.style.display = "none";

})



// To Top Btn

const toTopBtn = document.getElementById("to-top");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop < 150) {
        toTopBtn.style.display = "none";
    } else {
        toTopBtn.style.display = "flex";
    }

    toTopBtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
});


