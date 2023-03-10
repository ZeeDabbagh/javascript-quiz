var startBtn = document.querySelector('.start-btn')
var timeEl = document.querySelector('.timer')
var welcomePage = document.querySelector('.start-pg')
var questionContainerEl = document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerBtnEl = document.querySelector('.answer-btn')
var containerEl = document.querySelector('.container')
var answerContainerEl = document.getElementById('answer-container')
var assessmentEl = document.querySelector('.assessment')
var assessmentP = document.getElementById('assessment')
var scoresPg = document.getElementById('scores-pg')
var submitBtn = document.getElementById('submit-btn')
var highScorePg = document.querySelector('.highscore-page')

let currentQIndex
var timeLeft = 75
var score = 0

// Event listeners
startBtn.addEventListener('click', startQuiz)
answerContainerEl.addEventListener('click', selectA)
submitBtn.addEventListener('click', storeData)

// Start button function
function startQuiz() {
  welcomePage.classList.add('hide')
  currentQIndex = 0
  questionContainerEl.classList.remove('hide')
  startTimer()
  queQ()

}

// Set up question
function queQ() {
  showQs(questions[currentQIndex])
}

// Show question
function showQs(question) {
  questionEl.innerText = question.question;
  answerContainerEl.innerHTML = ''
  question.answers.forEach((answer, i) => {
    var btnNew = document.createElement('button')
    btnNew.innerText = answer.text
    btnNew.classList.add('btn')
    btnNew.classList.add('answer-btn')
    btnNew.classList.add('answer-btn-' + i)
    answerContainerEl.appendChild(btnNew)
  })
}

// Move through questions
function resetAs() {
  selectA()
  queQ()
}

// Timer starter
function startTimer() {

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


// Answer selection code
function selectA(event) {

  var selectedA = event.target
  if (selectedA.matches(".answer-btn")) {
    var answerClass = selectedA.classList[2]
    answerClass = answerClass.split('-')
    var chosenIndex = answerClass[2]

    var isCorrect = questions[currentQIndex].answers[chosenIndex].correct;

    currentQIndex++;
    if (currentQIndex >= questions.length) {
      questionContainerEl.classList.add('hide');
      scoresPg.classList.remove('hide');
      timeEl.classList.add('hide');
      

      return;
    }

    if (isCorrect) {
      score = score + 25
      queQ();
      assessmentEl.classList.remove('hide')
      assessmentP.innerText = 'Correct!'


    } else {
      timeLeft = timeLeft - 10
      queQ();
      assessmentEl.classList.remove('hide')
      assessmentP.innerText = 'Wrong!'

    }
  }

}

// Local storage for user input 
function storeData() {
  console.log('function called')
  if (localStorage.getItem("data") === null) {
    var data = [];
    localStorage.setItem("data", JSON.stringify(data));
  }
  var userInit = document.getElementById('form-input');
  if (userInit !== "") {
    data = JSON.parse(localStorage.getItem("data"));
    var newPlayer = userInit.value + "-" + score;
    data.push(newPlayer);
    localStorage.setItem("data", JSON.stringify(data));
    
  };
  // redirect to highscore page
  window.location.replace("./highscore.html")
}

// All questions
var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      { text: 'Strings', correct: false },
      { text: 'Boolean', correct: false },
      { text: 'Alerts', correct: true },
      { text: 'Numbers', correct: false },
    ]
  },
  {
    question: 'The condition in an if /  else statement is enclosed within:',
    answers: [
      { text: 'Quotes', correct: false },
      { text: 'Curly Brackets', correct: false },
      { text: 'Parentheses', correct: true },
      { text: 'Square Brackets', correct: false },
    ]
  },
  {
    question: 'Arrays in JavaScript can be used to store:',
    answers: [
      { text: 'Numbers and Strings', correct: false },
      { text: 'Other Arrays', correct: false },
      { text: 'Booleans', correct: false },
      { text: 'All the above', correct: true },
    ]
  },
  {
    question: 'String values must be enclosed within ____ when being assigned a variable:',
    answers: [
      { text: 'Commas', correct: false },
      { text: 'Curly Brackets', correct: true },
      { text: 'Quotes', correct: false },
      { text: 'Parentheses', correct: true },
    ]
  },
  {
    question: 'A very useful tool during development And debugging for printing content To the debugger is:',
    answers: [
      { text: 'JavaScript', correct: false },
      { text: 'console.log', correct: true },
      { text: 'Termina/Bash', correct: false },
      { text: 'For Loops', correct: true },
    ]
  }
];