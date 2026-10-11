
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 100px",
        scrub: 3,
        markers: true
    }
});

tl.to(".c", {
    x: 400,
    rotation: 360,
    duration: 3
})
.to(".c", {
    backgroundColor: "purple",
    duration: 1
})
.to(".c", {
    x: 0,
    duration: 3
});