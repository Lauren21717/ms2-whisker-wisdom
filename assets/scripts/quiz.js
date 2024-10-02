import { quizData } from './data.js';

const indexButton = document.getElementById('indexButton');
const introButton = document.getElementById('introButton');
const questionTitle = document.getElementById('questionTitle');
const questionIndex = document.getElementById('questionIndex');
const questionText = document.getElementById('questionText');
const answerList = document.getElementById('answerList');
const nextButton = document.getElementById('nextButton');
const progressText = document.getElementById('progressText');


// Function to navigate from index to intro page
function navigateToIntro() {
    window.location.href = 'intro.html';
}

// Function to navigate from intro to quiz page
function navigateToQuiz() {
    window.location.href = 'quiz.html';
}

// Add event listeners for navigation buttons
if (indexButton) {
    indexButton.addEventListener('click', navigateToIntro);
}

if (introButton) {
    introButton.addEventListener('click', navigateToQuiz);
}

let currentQuestionNo = 0;
let score = 0;

// Function to initialise the quiz
function startQuiz() {
    currentQuestionNo = 0;
    score = 0;
    showQuestion();
}

// Function to show the current question
function showQuestion() {
    resetState();
    let currentQuestion = quizData[currentQuestionNo];
    questionIndex.innerHTML = currentQuestion + 1;
    questionText.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const li = document.createElement("li");
        li.innerHTML = answer.text;
        li.classList.add("list-group-item", "custom-list-item", "mb-4", "rounded", "py-4");
        answerList.appendChild(li);
        if (answer.correct) {
            li.dataset.correct = answer.correct;
        }
        li.addEventListener("click", selectAnswer)
    });
}

// Function to reset the state between questions
function resetState() {
    nextButton.style.setProperty('display', 'none', 'important');
    while(answerList.firstChild) {
        answerList.removeChild(answerList.firstChild)
    }
}

// Function to handle answer selection
function selectAnswer(e) {
    const selectedOption = e.target;
    const isCorrect = selectedOption.dataset.correct === "true";
    if (isCorrect) {
        selectedOption.classList.add("bg-success");
        score++;
    } else {
        selectedOption.classList.add("bg-danger");
    }
    Array.from(answerList.children).forEach(option => {
        if (option.dataset.correct === "true") {
            option.classList.add("bg-success");
        }
        option.classList.add("disabled-option");
    });
    nextButton.style.setProperty('display', 'block', 'important');
}

// Function to show next question or end the quiz
function nextQuestion() {

}

// Function to update the progress text
function updateProgressText() {
}


startQuiz();

// Module exports for jest testing
export {
    navigateToIntro,
    navigateToQuiz,
    showQuestion,
    resetState,
    selectAnswer,
};