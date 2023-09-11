const moveElements = (e) => {
    const tracker = document.querySelector(".tracker");

    tracker.style.top = `${e.clientY}px`;
    tracker.style.left = `${e.clientX}px`;

    if (window.scrollY > 800 && window.scrollY < 1800) {
        tracker.style.opacity = 1;
    }
    else {
        tracker.style.opacity=0;
    }
};

document.addEventListener("mousemove", moveElements);
