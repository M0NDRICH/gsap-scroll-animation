gsap.defaults({ease: "none", duration: 2});

const tl = gsap.timeline();
tl.from(".a",{xPercent: -100})
  .from(".b",{xPercent: 100})
  .from(".c", {yPercent: -100});

ScrollTrigger.create({
    animation: tl,
    trigger: ".container",
    start: "top top",
    end: "+=4000",
    scrub: true,
    pin: true,
    aniticipatePin: 1
});