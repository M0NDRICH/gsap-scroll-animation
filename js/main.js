

gsap.to('.box', {
    keyframes: {
        "25%": {x: 500, y: 0},
        "50%" : {y: 500, x: 500, ease: 'power3.in'},
        // "75%": {x: 0, y: 500, rotate: 360},
        "75%": {x: 0, y: 500},
        "100%": {y: 0, x: 0},
        easeEach: 'none',
        ease: 'power3.out'
    },
    rotate: 360,
    ease: 'elastic.in',
    duration: 4
});