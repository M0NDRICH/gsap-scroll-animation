document.querySelector(".box").innerHTML = "BOO!";

// document.addEventListener('DOMContentLoaded', (event) => {
//             // gsap code here!
//             // gsap.to('.box', {
//             //     x: 500,
//             //     rotation: 360,
//             //     duration: 1
//             // });
//             // gsap.to(".box", {
//             //     x: '100vw',
//             //     xPercent: -100,
//             //     repeat: -1,
//             //     yoyo: true,
//             //     duration: 2,
//             //     ease: 'power3.inOut'
//             // });
//         });

let mm = gsap.matchMedia();
mm.add("(max-width: 500px)", () => {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.box',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // gsap.to(".box", {
    //     rotation: 360,
    //     ease: 'none',
    //     repeat: -1,
    //     duration: 2
    // });

    tl.to(".box", {
        rotation: 360,
        duration: 2
    })
    .to(".box", {
        scale: 2,
        duration: 1
    })
});