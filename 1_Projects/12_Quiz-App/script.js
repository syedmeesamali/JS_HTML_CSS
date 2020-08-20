const startButton = document.getElementById('start-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question');
const answerElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentIndex;


startButton.addEventListener('click', startGame);

//Start point of the game
function startGame() {
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    resetState();       //Resets the answers and their state
    showQuestion();
}

//Show next question
function showQuestion() {
    qElement.innerText = questions[0].question;
    questions[0].answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerElement.appendChild(button);        
    })
}

//Reset status after each question
function resetState() {
    nextButton.classList.add('hide');
    while (answerElement.firstChild)
        answerElement.removeChild
    (answerElement.firstChild)
}

//Select the correct answer
function selectAnswer(e) {
    const selectBtn = e.target
    const correct = selectBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

//Set status of element
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

//Array containing various questions
const questions = [
    {
        question: 'What is 2 + 2? ',
        answer: [
            {  text: '4', correct: true }, 
            {  text: '7', correct: false }
        ]
    }
]