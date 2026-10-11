// let tl = gsap.timeline({ repeat: -1, repeatDelay: 5});


gsap.to('.box', {
    keyframes: [
        {x: 500},
        {y: 500, ease: 'power2.out'},
        {x: 0, onComplete: ()=> {console.log("boom!")}},
        {y: 0, ease: 'power2.in'}
    ],
    // ease: 'power2.out'
    rotate: 360,
    transformOrigin: 'center center'
})
