const startButton = document.getElementById('start-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question');
const answer = document.getElementById('answer-buttons');


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
    showQuestion();
}

//Show next question
function showQuestion() {
    qElement.innerText = questions.question;
    console.log("Question answer: " + questions.answer);
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