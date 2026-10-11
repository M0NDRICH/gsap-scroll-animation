
gsap.to(".b", {
    scrollTrigger: {
        trigger: ".a",
        start: "top 50px",
        endTrigger: ".c",
        end: "bottom 80%",
        markers: true,
        toggleActions: "restart pause reverse pause",
    },
    x: 400,
    rotation: 360,
    duration: 3
})