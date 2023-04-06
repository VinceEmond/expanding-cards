const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
window.addEventListener('resize', checkBoxes);

// Responsible for Initial Show before scrolling
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
