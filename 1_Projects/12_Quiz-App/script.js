const startButton = document.getElementById('start-btn');
const qContainer = document.getElementById('question-container');
const qElement = document.getElementById('question');


const shuffleQuestions, currentIndex;



startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    nextQuestion();
}

function nextQuestion() {

}

function showQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: "What is 2 + 2? ",
        answer: [
            {  text: '4', correct: true }
            {  text: '7', correct: false }
        ]
    }
]