
let parentContainer = document.querySelector('.container');
let mm = gsap.matchMedia(parentContainer);

mm.add("(max-width: 500px)", ()=>{
    gsap.to(".box", {rotation: 360, duration: 1});
});

mm.add("(min-width: 501px)", ()=>{
    gsap.to(".box", {rotation: -360, duration: 1});
});