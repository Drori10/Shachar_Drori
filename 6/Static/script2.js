const rotateBtn = document.getElementById('Btn');
let rotationDegrees = 0;

rotateBtn.addEventListener('click', () => {
  rotationDegrees += 90;
  rotateBtn.style.transform = `rotate(${rotationDegrees}deg)`;
});
