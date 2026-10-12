
// gsap.to(".c", {
//     scrollTrigger: {
//         trigger: ".c",
//         start: "top center",
//         end: "top 100px",
//         markers: true
//     },
//     x: 400,
//     rotation: 360,
//     duration: 3
// })

ScrollTrigger.defaults({
    toggleActions: "restart pause resume none"
});

ScrollTrigger.create({
    trigger: ".c",
    start: "top center",
    end: "top 100px",
    id: "my-id",
    toggleClass: "active",
    markers: true,
    xPercent: 100
});

gsap.to(".box", {
    scrollTrigger: {
        trigger: ".c",
        start: "top center",
        end: "top 100px",
        id: "my-id",
        toggleClass: "active",
        markers: true,
    },
    x: 550,
    rotate: 360
});

let trigger = ScrollTrigger.getById("my-id");