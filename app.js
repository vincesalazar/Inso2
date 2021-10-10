// GSAP PLUGGINS
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ toggleActions: "play resume none reverse", scrub:1 });
// ** VARIABLE FOR LOGICALLY CHECKING WINDOW SIZE // E.G. PHONE OR DEKSTOP ***
var max900 = window.matchMedia("(max-width: 900px)");


// for some reason the page starts on the bottom somehow, 
// this is the solution
gsap.to(window, { scrollTo: "body" });

// ***** LOADING PAGE *******
var tl = gsap.timeline({ repeat: 1000 });
tl.to(".spinner", { duration: 2, rotation: 360, ease: "power4" });
tl.to(".box", { duration: 0.5, width: "100%" }, ">-.8");
tl.to(".spinner", { duration: 2, rotation: 900, ease: "power4" });
tl.to(".box", { duration: 0.5, width: 0 }, ">-.8");
var wordLoad = gsap.timeline({ delay: .3 });
wordLoad.to(".load-page h5", { opacity: .7, duration: .3 });
wordLoad.to(".load-page h5", { letterSpacing: ".1rem", duration: 10 }, "<");
wordLoad.to(".load-page h5", { text: "just trying to inspire", duration: 2 }, "<+1");
wordLoad.to(".load-page h5", { text: "inso" }, ">+2")
wordLoad.to(".load-page h5", { duration: .3, opacity: 0 });

// ******* MODAL *******
function modal(id) {
    var modal = document.querySelector("#" + id);
    var modalTl = gsap.timeline();
    modalTl.to(modal, { display: "flex", opacity: 1 })
    modalTl.fromTo(modal.children[1], { opacity: 0, y: -100 }, { opacity: 1, y: 0 }, "<+.1");
    modalTl.fromTo(modal.children[0], { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "<");
    modal.addEventListener("click", () => {
        modalTl.reverse();
    })
}

// *** IF CONTAINER ROW ONLY HAS TWO PICS / MAINLY FOR TRACKS *****
var rows = document.querySelectorAll(".row");
rows.forEach((e, i) => {
    if (e.childElementCount < 3) {
        e.style.justifyContent = "space-evenly";
    }
});


// *** FOR SOUNDCLOUD PLAYER ON PHONES *****
document.querySelector(".for-phone").style.display = "none"
if (max900.matches) {
    document.querySelector(".for-comp").style.display = "none";
    document.querySelector(".for-phone").style.display = "block";

}

// ***** SHOW MORE/LES TRACKS  BUTTONS *****
var showMoreTracksButton = document.querySelector(".show-more-tracks");
var showLessTracksButton = document.querySelector(".show-less-tracks");
var listenSection = document.querySelector("#listen");
showMoreTracksButton.addEventListener("click", () => {
    gsap.to(listenSection, { height: "auto", duration: 1 })
    showMoreTracksButton.style.display = "none"
    showLessTracksButton.style.display = "block"
    showLessTracksButton.addEventListener("click", () => {
        gsap.to(window, { duration: .1, scrollTo: "#tracks" })
        if (max900.matches) {
            gsap.to(listenSection, { height: "100vh", duration: 2 })
        } else {
            gsap.to(listenSection, { height: "170vh", duration: 2 });
        }
        showMoreTracksButton.style.display = "block"
        showLessTracksButton.style.display = "none"
    });
});

// waiting for everything to load 
window.addEventListener("load", () => {
    document.querySelector(".gif").style.display = "block";
    $(".load-page").fadeOut();
    gsap.to(".load-page", { opacity: 0, display: "none" });
    document.querySelector(".load-page").style.transistion = "opacity .5s";
    document.querySelector(".load-page").style.opacity = 0;

    // ****** LANDING ANIMATION *******
    var openTl = gsap.timeline({});
    openTl.from(".gif", { opacity: 0 });
    openTl.from(".icons a", { y: -10, opacity: 0, }, ">+.9");
    openTl.from(".top .artist", { opacity: 0, y: 10 }, "<");
    document.querySelector(".top .artist").addEventListener("click", () => {
        openTl.restart();
    });

    // tried to do a gradient anime for landing, didnt work out
    // var gTl = gsap.timeline({ repeat: 300 });
    // gTl.to(".wrapper", { background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,0,0,1) 25%, rgba(255,0,211,1) 50%, rgba(0,146,255,1) 75%, rgba(233,227,19,1) 100%, rgba(255,0,0,1) 10025%)", duration: 2 }, ">");
    // gTl.to(".wrapper", { background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(233,227,19,1) 25%, rgba(255,0,0,1) 50%, rgba(255,0,211,1) 75%, rgba(0,146,255,1) 100%, rgba(255,0,0,1) 10025%)", duration: 2 }, ">");
    // gTl.to(".wrapper", { background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,146,255,1) 25%, rgba(233,227,19,1) 50%, rgba(255,0,0,1) 75%, rgba(255,0,211,1) 100%, rgba(255,0,0,1) 10025%)", duration: 2 }, ">");
    // gTl.to(".wrapper", { background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,0,211,1) 25%, rgba(0,146,255,1) 50%, rgba(233,227,19,1) 75%, rgba(255,0,0,1) 100%)", duration: 2 }, ">");

    // inso words anime on landing page
    // var wTl = gsap.timeline();
    // wTl.to(".top .artist", { text: "MUSIC" }, "4");
    // wTl.to(".top .artist", { text: "INSO" }, ">+3");

    // this was for the first website design
    // openTl.from(".artist", { opacity: 0, x: 50, duration: 1 });
    // openTl.from(".social-media ul li", { opacity: 0, x: -30, stagger: .4, duration: .5 }, '<');
    // openTl.from(".watch", { y: -50, opacity: -1 }, '<');
    // if (max900.matches) {
    //     openTl.from(".video", { width: 0, x: 100, ease: "power4", duration: 1 }, '<+.1');
    // } else {
    //     openTl.from(".video", { width: 0, x: 300, ease: "power4", duration: 1 }, '<+.1');
    // }
    // openTl.fromTo(".cookie-disclaimer", { opacity: 0, y: 200 }, { display: "flex", opacity: 1, y: 0 }, ">")

    // GSAP SCROLL ANIMATIONS

    // for the paralax picture titles


    // .a-one
    
    // DIFFERENT ANIMATIONS TO USE WITH CLASS A-ONE, A-TWO, ETC
    var one = document.querySelectorAll(".a-one");
    for (let i = 0; i < one.length; i++) {
        gsap.from(one[i], { opacity: 0, y: -100, scrollTrigger: { trigger: one[i], markers: 0, start: "0% 100%", end:"100% 70%" } })
    }
    // .a-two
    var two = document.querySelectorAll(".a-two");
    for (let i = 0; i < two.length; i++) {
        gsap.from(two[i], { opacity: 0, x: -75, scrollTrigger: { trigger: two[i], markers: 0, start: "0% 100%", end:"100% 70%" } })
    }
    // .fade
    var fade = document.querySelectorAll(".fade");
    for (let i = 0; i < fade.length; i++) {
        gsap.from(fade[i], { opacity: 0, scrollTrigger: { trigger: fade[i], markers: 0, start: "0% 100%", end:"100% 70%" } })
    }
    // ***** netlify form submission ********
    $("#myForm").submit(function(e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize()).then(function() {
            var formtl = gsap.timeline();
            formtl.to(".form, .form form, .form form label, .form form input, .form form textarea, .form container", { opacity: 0, height: 0, padding: 0, margin: 0 });
            formtl.to(".form", { display: "none", }, ">");
            formtl.to(window, { scrollTo: "#contact" }, "<")
            formtl.to("#contact .words", { text: "Thank You" }, ">");
        });
    });
});

// FOR NAV GLOW
var lis = document.querySelectorAll('nav ul li')

lis.forEach(e,i,p => {
    c1 = ''
})

// ***** IDK *******
// var iframeElement = document.querySelector('iframe');
// var iframeElementID = iframeElement.id;
// var widget1 = SC.Widget(iframeElement);
// var widget2 = SC.Widget(iframeElementID);
// console.log(widget1 + ' widget 1 is to the left... and widget two is to the right ');
// // widget1 === widget2
// console.log(widget2);