const PROGRESS = document.getElementById('progress');
const PREV = document.getElementById('prev');
const NEXT = document.getElementById('next');
const CIRCLES = document.querySelectorAll('.circle');

let currentActive = 1;

NEXT.addEventListener('click', () => {
  currentActive++;

  if (currentActive > CIRCLES.length) {
    currentActive = CIRCLES.length;
  }
  update();
});

PREV.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  CIRCLES.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const ACTIVES = document.querySelectorAll('.active');

  PROGRESS.style.width =
    ((ACTIVES.length - 1) / (CIRCLES.length - 1)) * 100 + '%';
  console.log(((ACTIVES.length - 1) / (CIRCLES.length - 1)) * 100);

  if (currentActive === 1) {
    PREV.disabled = true;
  } else if (currentActive === CIRCLES.length) {
    NEXT.disabled = true;
  } else {
    PREV.disabled = false;
    NEXT.disabled = false;
  }
}

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }

  console.log('Hello World');
}

x();
