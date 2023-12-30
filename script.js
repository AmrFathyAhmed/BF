const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const stepContent = document.getElementById('stepContent');

const stepsContent = [
  "If you reached this site, know you are a special person in my life and...",
  "I just want to tell you...",
  "Before 2023 ends...",
  "Thank you for coming into my life. You are actually making me smile and laugh. Thank you for being so understanding. Thank you for being my biggest supporter and thank you for caring about me. I really appreciate you so much.🤍🤍"
];

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    stepContent.textContent = stepsContent[currentActive - 1];

    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

// Initial update to set the content for the first step
update();
