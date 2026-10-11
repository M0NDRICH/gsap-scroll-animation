

gsap.to('.box', {
    keyframes: {
        x: [0, 500, 500, 0, 0],
        y: [0, 0, 500, 500, 0],
        ease: 'power4.out'
    },
    duration: 4,
});