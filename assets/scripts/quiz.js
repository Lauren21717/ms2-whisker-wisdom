import { quizData } from './data.js';

const indexButton = document.getElementById('indexButton');
const introButton = document.getElementById('introButton');
const questionTitle = document.getElementById('questionTitle');
const questionText = document.getElementById('questionText');
const answerList = document.getElementById('answerList');
const nextButton = document.getElementById('nextButton');
const progressText = document.getElementById('progressText');

let currentQuestion = 0;
let score = 0;

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

// Module exports for jest testing
export {
    navigateToIntro,
    navigateToQuiz,
};