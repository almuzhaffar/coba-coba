let pages = document.querySelectorAll(".page");
let current = 0;
let music = document.getElementById("bgMusic");
let autoFlip;

pages.forEach((page, i) => {
    page.style.zIndex = pages.length - i;
});

// Reset ke awal
function resetBook() {
    clearInterval(autoFlip);
    pages.forEach(page => page.style.transform = "rotateY(0deg)");
    current = 0;
}

// Kontrol manual
function nextPage() {
    if (current < pages.length) {
        pages[current].style.transform = "rotateY(-180deg)";
        current++;
    }
}

function prevPage() {
    if (current > 0) {
        current--;
        pages[current].style.transform = "rotateY(0deg)";
    }
}

// Musik sinkron
function toggleMusic() {
    if (music.paused) {
        music.play();
        startAutoFlip();
    } else {
        music.pause();
        clearInterval(autoFlip);
    }
}


