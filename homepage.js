const parallax_el = document.querySelectorAll('.parallax');

window.addEventListener("mousemove", (o) => {
    const xValue = (o.clientX - window.innerWidth / 2) / 2;
    const yValue = (o.clientY - window.innerHeight / 2) / 2;

    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    })
})