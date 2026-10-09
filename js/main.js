document.querySelector(".box").innerHTML = "BOO!";

document.addEventListener('DOMContentLoaded', (event) => {
            // gsap code here!
            gsap.to('.box', {
                rotation: 360,
                duration: 1
            });
        });