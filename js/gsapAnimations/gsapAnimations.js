import gsap from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
    gsap.from("h1", {
        duration: 1,
        y: -50,
        opacity: 0
    });
});
