// Workflow:
// 1. Start quiz
// 1a. Que next Q
// 1b. startTimer
// 2. Select Answers
// 3. Get score
// 4. Enter initials
// 5. Local storage save and display scores

var startBtn = document.querySelector('.start-btn')
var timeEl = document.querySelector('.timer')
var welcomePage = document.querySelector('.start-pg')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerBtnEl = document.querySelector('answer-btn')
var containerEl = document.querySelector('.container')
var answerContainerEl = document.getElementById('answer-container')
var assessmentEl = document.querySelector('.assessment')

let shuffledQs, currentQIndex

startBtn.addEventListener('click', startQuiz)
btnNew.addEventListener('click', queQ)

  function startQuiz () {
  welcomePage.classList.add('hide')
  shuffledQs = questions.sort(() => Math.random() -.5)
  currentQIndex = 0
  questionContainerEl.classList.remove('hide')
  startTimer()
  queQ()

}

function queQ() {
  resetAs() 
  showQs(shuffledQs[currentQIndex])
}

function showQs (question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    var btnNew = document.createElement('button')
    btnNew.innerText = answer.text
    btnNew.classList.add('btn')
    answerContainerEl.appendChild(btnNew);
  })
}

function resetAs() {
  while (answerContainerEl.firstChild) {
    answerContainerEl.removeChild(answerContainerEl.firstChild)
  }
}  

function startTimer() {
    var timeLeft = 70;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        timeEl.textContent = "Time left: " + timeLeft;
        timeLeft--;
      } else if (timeLeft === 0) {
        timeEl.textContent = timeLeft;
        timeLeft--;
      } else {
        clearInterval(timeInterval);
      }
    }, 1000);

    return;
  }



function selectA(event) {
  var selectedA = event.target
  if (selectedA.correct) {
    score++
    queQ();
    assessmentEl.classList.remove('hide')
    assessmentEl.appendChild('<hr>')
    assessmentEl.appendChild('Correct!')
  } else {
    timeLeft-5
    queQ();
    assessmentEl.classList.remove('hide')
    assessmentEl.appendChild('<hr>')
    assessmentEl.appendChild('Correct!')
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    var scorePage = document.createElement('h2')
    timeEl.classList.add('hide')
    containerEl.classList.add('hide')
    document.body.appendChild('scorePage')
  }
}

var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      {text: 'Strings', correct: false},
      {text: 'Boolean', correct: false},
      {text: 'Alerts', correct: true},
      {text: 'Numbers', correct: false},
    ]
  },
  {
    question: 'The condition in an if /  else statement is enclosed within:',
    answers: [
      {text: 'Quotes', correct: false},
      {text: 'Curly Brackets', correct: false},
      {text: 'Parentheses', correct: true},
      {text: 'Square Brackets', correct: false},
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store:',
    answers: [
      {text: 'Numbers and Strings', correct: false},
      {text: 'Other Arrays', correct: false},
      {text: 'Booleans', correct: false},
      {text: 'All the above', correct: true},
    ]
  },
  {
    question: 'String values must be enclosed within ____ when being assigned a variable:',
    answers: [
      {text: 'Commas', correct: false},
      {text: 'Curly Brackets', correct: true},
      {text: 'Quotes', correct: false},
      {text: 'Parentheses', correct: true},
    ]
  },
  {
    question: 'A very useful tool during development And debugging for printing content To the debugger is:',
    answers: [
      {text: 'JavaScript', correct: false},
      {text: 'console.log', correct: true},
      {text: 'Termina/Bash', correct: false},
      {text: 'For Loops', correct: true},
    ]
  }
];