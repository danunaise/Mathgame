const math1 = document.getElementById("math1");
const operator = document.getElementById("operator");
const math2 = document.getElementById("math2");
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const questionElement = document.getElementById('question');

let result;
function randomNumber() {
  let random1 = Math.floor(Math.random() * 10 + 1);
  let random2 = Math.floor(Math.random() * 10 + 1);
  const operators = ['+', '-', '*', '/'];
  const Arroperator = ['+', '-', '×', '÷'];

  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const show = Arroperator[operators.indexOf(randomOperator)];
  questionElement.innerText = `${random1} ${show} ${random2} = ?`;
  questionElement.style.fontSize = '70px';
  switch (randomOperator) {
    case '+':
      result = random1 + random2;
      break;
    case '-':
      result = random1 - random2;
      break;
    case '*':
      result = random1 * random2;
      break;
    case '/':
      result = random1 / random2;
      break;
    default:
      result = 'ไม่รู้จักตัวดำเนินการนี้';
  }
}

randomNumber(); 
const statusElement = document.getElementById('status');
const countElement = document.getElementById('count');
const resetButton = document.getElementById('reset');

let correctCount = 0;
let questionCount = 0;
answerElement.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submitButton.click();
  }
});

resetButton.addEventListener('click', () => {
  correctCount = 0;
  questionCount = 0;
  countElement.innerText = `ตอบถูก: ${correctCount} / ${questionCount} ข้อ`;
  statusElement.innerText = '';
});

submitButton.addEventListener('click', () => {
  questionCount++;
  if (answerElement.value == result){
    randomNumber();
    correctCount++;
    statusElement.innerText = 'คำตอบถูกต้อง';
    statusElement.style.color = 'green';
    statusElement.style.fontSize = '50px';
    answerElement.value = '';
    countElement.innerText = `ตอบถูก: ${correctCount} / ${questionCount} ข้อ`;
  } else {
    randomNumber();
    statusElement.innerText = 'คำตอบผิด';
    statusElement.style.color = 'red';
    statusElement.style.fontSize = '50px';
    countElement.innerText = `ตอบถูก: ${correctCount} / ${questionCount} ข้อ`;
  }
});