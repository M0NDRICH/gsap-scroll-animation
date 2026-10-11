let mm = gsap.matchMedia();

let reduceMotionCB = document.querySelector("#motionToggle");
reduceMotionCB.checked = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

reduceMotionCB.addEventListener("change", gsap.matchMediaRefresh);

let conditions = {
    reduceMotion: '(prefers-reduced-motion: reduce)',
    safeToAnimate: '(prefers-reduced-motion: no-preference)'
};

mm.add(conditions, (context)=>{
    let { reduceMotion, safeToAnimate } = context.conditions;
    reduceMotion = reduceMotionCB.checked;

    gsap.to(".box", {
        rotation: reduceMotion ? 0 : 360,
        opacity: 0,
        duration: 2,
    });
});