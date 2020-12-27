// ==================== PARALLAX EFFECT  ====================
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

            shape.style.transform = `translateX(${x}px)`
    });
}

// ==================== ACTIVE MENU SCROLLING ====================

window.addEventListener('scroll', (event) => {
    event.preventDefault();

    const menuLink = document.querySelectorAll('.navbar__ul-menu a');
    const scrollPositionY = window.scrollY;

    menuLink.forEach( (link) => {
        // Get DOM element by ID.
        const section = document.querySelector(link.hash);

        // If the current scroll position is somewhere within a specific section.
        if ( scrollPositionY >= section.offsetTop && scrollPositionY < section.offsetTop + section.offsetHeight ) {
            link.classList.add('link--active');
        } else {
            link.classList.remove('link--active');
        }
    })
});

/* 
Add event listener depending on whether desktop or mobile device is detected.

Key differences:
    -finger touch vs. cursor movements
    -mobile requires increased sensitivity due to smaller screen
    -on mobile vertical touch motion causes scrolling and little value added for including vertical parallax effect.
*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.addEventListener("touchmove", parallaxMobile);
} else {
    document.addEventListener("mousemove", parallax);
}

