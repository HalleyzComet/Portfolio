const parallax_el = document.querySelectorAll('.bg, .stop, .double, .triangle');

window.addEventListener("mousemove", (o) => {
    const xValue = (o.clientX - window.innerWidth / 2) / 2;
    const yValue = (o.clientY - window.innerHeight / 2) / 2;

    // parallax_el.forEach((el) => {
    //     el.style.transform = `translateX(calc(-50% + ${-xValue}px)) translateY(calc(-50% + ${yValue}px))`;
    // });
    updateTransform(o, 0, ".bg", 70);
    updateTransform(o, 15, ".stop", 20);
    updateTransform(o, 25, ".double", 15);
    updateTransform(o, -35, ".triangle", 8);
});

function updateTransform(mouse, rotateValue, className, factor) {
    const xValue = (mouse.clientX - window.innerWidth / 2) / factor;
    const yValue = (mouse.clientY - window.innerHeight / 2) / factor;
    const image = document.querySelector(className);

    image.style.transform = `  translateX(calc( ${-xValue}px)) translateY(calc(${yValue}px)) rotate(${rotateValue}deg) translate(-50%, -50%)     `;
}