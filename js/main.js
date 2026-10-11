let tl = gsap.timeline({ repeat: -1, repeatDelay: 5});

tl.to('.box', {
    x: 500,
    rotate: 360,
    duration: 2
})
.to('.box', {
    y: 500,
    rotate: "+=360",
    duration: 2
})
.to('.box', {
    x: 0,
    rotate: "+=360",
    duration: 2
})
.to('.box', {
    y: 0,
    rotate: "+=360",
    duration: 2
})