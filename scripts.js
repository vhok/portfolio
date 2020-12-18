function parallax(event) {
    this.querySelectorAll('.shape').forEach(shape => {
        const speed = shape.getAttribute('data-speed');

        const x = (window.innerWidth - event.pageX*speed)/100;
        const y = (window.innerHeight - event.pageY*speed)/100;

        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

function parallaxMobile(event) {
    this.querySelectorAll('.shape').forEach(shape => {
        const speed = shape.getAttribute('data-speed');

            const x = (window.innerWidth - event.touches[0].screenX * speed) / 85;
            // const y = (window.innerHeight - event.touches[0].screenY * speed) / 90;

            // shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
            shape.style.transform = `translateX(${x}px)`
    });
}

document.addEventListener("mousemove", parallax);
document.addEventListener("touchmove", parallaxMobile);