import { quizData } from './data.js';

const indexButton = document.getElementById('indexButton');
const introButton = document.getElementById('introButton');
const questionTitle = document.getElementById('questionTitle');
const questionIndex = document.getElementById('questionIndex');
const questionText = document.getElementById('questionText');
const answerList = document.getElementById('answerList');
const nextButton = document.getElementById('nextButton');
const progressText = document.getElementById('progressText');
const resultTitle = document.getElementById('resultTitle');
const resultImage = document.getElementById('resultImage');
const resultScore = document.getElementById('resultScore');

let currentQuestionNo = 0;
let score = 0;
const totalQuestions = quizData.length;

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
    while (answerList.firstChild) {
        answerList.removeChild(answerList.firstChild);
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

// Function to show the result (pass or fail)
function showResult() {
    localStorage.setItem('quizScore', score);
    window.location.href = 'result.html';
}

// Function to show next question or end the quiz
function nextQuestion() {
    currentQuestionNo++;
    if (currentQuestionNo < quizData.length) {
        showQuestion();
        updateProgressText();
    } else {
        showResult();
    }
}

// Function to update the progress text
function updateProgressText() {
    if (progressText) {
        progressText.innerHTML = `${currentQuestionNo + 1} of ${totalQuestions} questions`
    }
}

// Add event listener to the next button (for the quiz page)
if (nextButton) {
    nextButton.addEventListener("click", () => {
        if (currentQuestionNo < quizData.length) {
            nextQuestion();
        } else {
            startQuiz();
        }
    });
}

// Function to display the result on the result page
function displayResult() {
    let score = localStorage.getItem('quizScore') || 0;

    if (score >= 5) {
        resultTitle.innerHTML = "Good Job";
        resultImage.src = "assets/images/pass.png";
    } else {
        resultTitle.innerHTML = "Fur-get About It!";
        resultImage.src = "assets/images/fail.png";
    }

    resultScore.innerHTML = `Your score is ${score}/${totalQuestions}`;
}

// Check if we are on the result page
if (resultTitle && resultImage && resultScore) {
    displayResult();
}

// Start the quiz if we are on the quiz page
if (questionTitle && questionText && answerList) {
    startQuiz();
}

// Module exports for jest testing
export {
    navigateToIntro,
    navigateToQuiz,
    showQuestion,
    resetState,
    selectAnswer,
    updateProgressText
};