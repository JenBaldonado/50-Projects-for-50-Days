const sCup = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');
const bCup = document.querySelector('.bCup');

updateBigCup();

sCup.forEach((eachCup, idx) => {
  eachCup.addEventListener('click', () => fillUpCup(idx));
});

function fillUpCup(idx) {
  if (
    sCup[idx].classList.contains('full') &&
    idx === sCup.length - 1 &&
    sCup[idx].nextElementSibling == null
  ) {
    alert('The cup is already full.');
    return;
  }

  if (
    sCup[idx].classList.contains('full') &&
    !sCup[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  sCup.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = sCup.length;

  console.log(fullCups);

  if (totalCups === 0) {
    // Handle division by zero error
    console.error('Error: No small cups found.');
    return;
  }

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = `hidden`;
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
