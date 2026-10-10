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
// mm.add("(max-width: 500px)", () => {

//     gsap.to(".box", {
//         rotation: 360,
//         duration: 2
//     })
// });

// mm.add("(min-width: 501px)", () => {

//     gsap.to(".box", {
//         rotation: -360,
//         duration: 2
//     })
// });

mm.add({
    isMobile: "(max-width: 500px) and (prefers-reduced-motion: no-preference)",
    isDesktop: "(min-width: 501px) and (prefers-reduced-motion: no-preference)"
}, (context)=>{
    console.log(context.conditions);
    let {isMobile, isDesktop, reducedMotion} = context.conditions;

    // let duration = context.isReverted ? 0 : 2;

    gsap.to(".box", {
        // rotation: reducedMotion ? 0: isMobile ? -360 : 360,
        rotation: () => {
            rotation: () => {
                if (reducedMotion) {
                    return 0;
                } else if (isMobile) {
                    return -360;
                } else if (!isMobile) {
                    return 360;
                }
            }
        },
        duration: 2,
    });
})