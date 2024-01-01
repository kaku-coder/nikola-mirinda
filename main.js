const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// Import gsap library
// import { gsap } from "gsap";

var tl = gsap.timeline();

tl.to(".page1", {
    y: "100vh",
    scale: 0.5,
    duration: 1,
    stagger: 1
});

tl.to(".page1", {
    y: "0vh",
    duration: 1,
    delay: 1,
    stagger: 1
});

tl.to(".page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 2
});
