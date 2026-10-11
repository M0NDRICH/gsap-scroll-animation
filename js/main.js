
gsap.to(".c", {
    scrollTrigger: {
        trigger: ".c",
        toggleActions: "restart pause resume pause"
    },
    x: 400,
    rotation: 360,
    duration: 3
});