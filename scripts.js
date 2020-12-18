function parallax(event) {
    this.querySelectorAll('.shape').forEach(shape => {
        const speed = shape.getAttribute('data-speed');

        const x = (window.innerWidth - event.pageX*speed)/100;
        const y = (window.innerHeight - event.pageY*speed)/100;

        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
        // console.log(x, y);
        // console.log(speed);
    });
}

document.addEventListener("mousemove", parallax);
