const startButton = document.getElementById('start-btn');
const qContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');
const qElement = document.getElementById('question');
const answerElement = document.getElementById('answer-buttons');

let shuffleQuestions, currentIndex;


startButton.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentIndex++;
    nextQuestion();
})

//Start point of the game
function startGame() {
    startButton.classList.add('hide');
    qContainer.classList.remove('hide');
    //shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    nextQuestion();
}

function nextQuestion() {
    resetState();       //Resets the answers and their state
    console.log("Questions question: " + questions[0].question);
    showQuestion(questions);
}

//Show next question
function showQuestion(questions) {
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
    nextBtn.classList.add('hide');
    while (answerElement.firstChild)
        answerElement.removeChild(answerElement.firstChild)
}

//Select the correct answer
function selectAnswer(e) {
    const selectBtn = e.target
    const correct = selectBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questions.length > currentIndex + 1) { //If not last question
        nextBtn.classList.remove('hide');
    } else { 
        startButton.innerText = 'RESTART';
        startButton.classList.remove('hide');
    }
    
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
{ question: 'What is 2 + 2? ',
  answer: [{text: '4', correct: true}, {text: '7', correct: false}, {text: '9', correct: false}, {text: '3', correct: false}] },
  { question: 'What is 2 * 2? ',
  answer: [{text: '4', correct: true}, {text: '7', correct: false}, {text: '9', correct: false}, {text: '3', correct: false}] },
  { question: 'What is 2 - 2? ',
  answer: [{text: '0', correct: true}, {text: '7', correct: false}, {text: '9', correct: false}, {text: '3', correct: false}] }

]