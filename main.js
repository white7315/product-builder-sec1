document.getElementById('generate-btn').addEventListener('click', () => {
  const lottoNumbers = generateLottoNumbers();
  displayNumbers(lottoNumbers);
});

function generateLottoNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function displayNumbers(numbers) {
  const container = document.getElementById('lotto-numbers');
  container.innerHTML = '';
  numbers.forEach(num => {
    const ball = document.createElement('div');
    ball.className = 'ball';
    ball.textContent = num;
    ball.style.backgroundColor = getBallColor(num);
    container.appendChild(ball);
  });
}

function getBallColor(num) {
  if (num <= 10) return '#fbc400'; // Yellow
  if (num <= 20) return '#69c8f2'; // Blue
  if (num <= 30) return '#ff7272'; // Red
  if (num <= 40) return '#aaa';    // Grey
  return '#b0d840';                // Green
}
