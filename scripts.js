// ==================== PARALLAX EFFECT  ====================

function parallax(event) {
    this.querySelectorAll('.shape').forEach(shape => {
        const speed = shape.getAttribute('data-speed');

        const x = (window.innerWidth - event.pageX*speed)/100;
        const y = (window.innerHeight - event.pageY*speed)/100;

        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

function parallaxMobile(event) {1
    event.preventDefault();

    this.querySelectorAll('.shape').forEach(shape => {
        const speed = shape.getAttribute('data-speed');

            const x = (window.innerWidth - event.touches[0].screenX * speed) / 85;

            shape.style.transform = `translateX(${x}px)`
    });
}

// ==================== ACTIVE MENU SCROLLING & SCROLL TOP BUTTON ====================

function scrollHandler(event) {
    event.preventDefault();

    const menuLink = document.querySelectorAll('.navbar__ul-menu a');
    const scrollPositionY = window.scrollY;

    menuLink.forEach(link => {
        // Get DOM element by ID.
        const section = document.querySelector(link.hash);

        // If the current scroll position is somewhere within a specific section.
        if (scrollPositionY >= section.offsetTop && scrollPositionY < section.offsetTop + section.offsetHeight) {
            link.classList.add('link--active');
        } else {
            link.classList.remove('link--active');
        }


    });

    const homeEndPositionY = document.getElementById('home').offsetHeight;

    if(scrollPositionY >= homeEndPositionY) {
        document.getElementById('to-top').classList.remove('to-top--hidden');
    } else {
        document.getElementById('to-top').classList.add('to-top--hidden');
    }
}

// ==================== CLOSE MENU ====================

/** Behaviour: Checkbox listens for status change.
 *  It checks whether the checked state is true or false (hamburger menu is open vs closed).
 *  If the menu is opened, it adds an event listeners to allow any user clicks outside of the
 *  menu to cause it to collapse and then removes the event listeners as clean up.
 */

function menuCloseHandler() {
    const checkbox = document.getElementById('checkbox'); 

    checkbox.checked = false;
    document.getElementsByTagName('main')[0].removeEventListener('click', menuCloseHandler);
    document.getElementsByTagName('footer')[0].removeEventListener('click', menuCloseHandler);
}

function menuChangeHandler(event) {
    event.preventDefault();

    const checkbox = document.getElementById('checkbox'); 

    if(checkbox.checked) {
        document.getElementsByTagName('main')[0].addEventListener('click', menuCloseHandler);
        document.getElementsByTagName('footer')[0].addEventListener('click', menuCloseHandler);
    } else {
        document.getElementsByTagName('main')[0].removeEventListener('click', menuCloseHandler);
        document.getElementsByTagName('footer')[0].removeEventListener('click', menuCloseHandler);
    }
}

// ==================== INIT ====================

function init() {
    /* 
    Add event listener depending on whether desktop or mobile device is detected.

    Key differences:
        -finger touch vs. cursor movements
        -mobile requires increased sensitivity due to smaller screen
        -on mobile vertical touch motion causes scrolling and little value added for including vertical parallax effect.
    */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.addEventListener('touchmove', parallaxMobile);
    } else {
        document.addEventListener('mousemove', parallax);
    }

    document.getElementById('checkbox').addEventListener('change', menuChangeHandler);

    window.addEventListener('scroll', scrollHandler);
}


// ==================== DOCUMENT READY ====================

document.addEventListener('DOMContentLoaded', () => {
    init();

});