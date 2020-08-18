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

function resetState() {
    nex
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2? ',
        answer: [
            {  text: '4', correct: true }, 
            {  text: '7', correct: false }
        ]
    }
]