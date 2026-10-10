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
let box = document.querySelector(".box");

mm.add("(max-width: 500px)", (context) => {
    context.add("spinTheBox", () => {
        gsap.to(box, {
            rotation: 360,
            ease: "none",
            repeat: -1,
            duration: 1
        });
    })
    
    box.addEventListener("click", context.spinTheBox);

    return () => {
        box.removeEventListener("click", context.spinTheBox);
    }
});