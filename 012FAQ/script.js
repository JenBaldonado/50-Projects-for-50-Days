//when the box is active the x is shown
//when the x is click the size will lessen and the chevron will show

const buttons = document.querySelectorAll('.faq-toggle');
const faq = document.querySelector('.faq');

buttons.forEach((element) => {
  element.addEventListener('click', () => {
    element.parentNode.classList.toggle('active');
  });
});
