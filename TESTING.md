# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation
### HTML
I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Validator| File | Screenshot | Notes |
| --- | --- | --- | --- |
|[W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flauren21717.github.io%2Fwhisker-wisdom%2F)| index.html | ![Index W3C](documentation/w3c-html/index.png) | No errors found|
|[W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flauren21717.github.io%2Fwhisker-wisdom%2Fintro.html)| intro.html | ![Intro W3C](documentation/w3c-html/intro.png) | No errors found|
|[W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flauren21717.github.io%2Fwhisker-wisdom%2Fquiz.html)| quiz.html | ![Quiz W3C](documentation/w3c-html/quiz.png) | No errors found|
|[W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Flauren21717.github.io%2Fwhisker-wisdom%2Fresult.html)| result.html | ![Result W3C](documentation/w3c-html/result.png) | No errors found|

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | style.css | ![CSS W3C](documentation/w3c-html/css.png) | No error on style.css file |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | Screenshot | Notes |
| --- | --- | --- | --- |
| assets | quiz.js | ![JShint](documentation/jshint/quiz.png) | ES6 syntax validated, no critical errors found |
| assets | data.js | ![JShint](documentation/jshint/quiz.png) | ES6 syntax validated, no critical errors found |
| assets | quiz.test.js | ![JShint](documentation/jshint/quiz-test.png) | Undefined variables from jest |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Start Modal | Quiz Page | Intro Page | Result Page | Notes |
| --- | --- | --- | --- | --- | --- |
| Chrome | ![Chrome](documentation/browsers/chrome-index.png) | ![Chrome](documentation/browsers/chrome-intro.png) | ![Chrome](documentation/browsers/chrome-quiz.png) | ![Chrome](documentation/browsers/chrome-result.png) | Works as expected |
| Firefox | ![Firefox](documentation/browsers/firefox-index.png) | ![Firefox](documentation/browsers/firefox-intro.png) | ![Firefox](documentation/browsers/firefox-quiz.png) | ![Firefox](documentation/browsers/firefox-result.png) | Works as expected |
| Safari |  ![Safari](documentation/browsers/safari-index.png) | ![Safari](documentation/browsers/safari-intro.png) | ![Safari](documentation/browsers/safari-quiz.png) | ![Safari](documentation/browsers/safari-result.png) | Works as expected |

## Responsiveness

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Browser | Start Modal | Intro Page | Quiz Page | Result Page | Notes |
| --- | --- | --- | --- | --- | --- |
| Mobile (DevTools) (320px) | ![Mobile](documentation/responsiveness/mobile-index.png) | ![Mobile](documentation/responsiveness/mobile-intro.png) | ![Mobile](documentation/responsiveness/mobile-quiz.png) | ![Mobile](documentation/responsiveness/mobile-result.png) | Works as expected |
| Tablet (DevTools) (768px) | ![Tablet](documentation/responsiveness/tablet-index.png) | ![Tablet](documentation/responsiveness/tablet-intro.png) | ![Tablet](documentation/responsiveness/tablet-quiz.png) | ![Tablet](documentation/responsiveness/tablet-result.png) | Works as expected |
| Desktop |![Desktop](documentation/browsers/chrome-index.png) | ![Desktop](documentation/browsers/chrome-intro.png) | ![Desktop](documentation/browsers/chrome-quiz.png) | ![Desktop](documentation/browsers/chrome-result.png) | Works as expected |
| Personal Mobile (Samsung S22 Ultra) | ![Personal](documentation/responsiveness/s22-index.png) | ![Personal](documentation/responsiveness/s22-intro.png) | ![Personal](documentation/responsiveness/s22-quiz.png) | ![Personal](documentation/responsiveness/s22-result.png) | Works as expected |

## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Mobile | Desktop | Notes |
| --- | --- | --- | --- |
| index.html | ![Index Lighthouse](documentation/lighthouse/index-lh-mb.png) | ![Index Lighthouse](documentation/lighthouse/index-lh-dt.png) |  No issues |
| intro.html | ![Intro Lighthouse](documentation/lighthouse/intro-lh-mb.png) | ![Intro Lighthouse](documentation/lighthouse/intro-lh-dt.png) |  No issues |
| quiz.html | ![Quiz Lighthouse](documentation/lighthouse/quiz-lh-mb.png) | ![Quiz Lighthouse](documentation/lighthouse/quiz-lh-dt.png) |  No issues |
| result.html | ![Result Lighthouse](documentation/lighthouse/result-lh-mb.png) | ![Result Lighthouse](documentation/lighthouse/result-lh-dt.png) |  No issues |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Feature | Expectation | Test | Result | Fix | Screenshot |
| --- | --- | --- | --- | --- | --- |
| Start Quiz Button | When the "Start" button is clicked, the quiz should begin, and the intro screen disappears | Tested by clicking the "Start" button | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/start-quiz.gif) |
| Answer List | User should only be able to select one answer from the list  | Tested by selecting multiple answers | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/answer-list.gif) |
| Next Question Button | "Next Question" button should only be enabled after selecting an answer | Tested by attempting to click "Next" without selecting an answer first | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/next-question.gif) |
| Quiz Progress Display | Quiz progress should display correctly based on the current question | Tested by navigating through the quiz and observing progress updates | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/quiz-progress.gif) |
| Final Score Calculation | After completing the quiz, the final score should be displayed | Tested by finishing the quiz and checking the result score | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/score-display.gif) |
| Retry Quiz Button | "Take the quiz" button should restart the quiz, clearing previous progress | Tested by clicking the "Take the quiz" button after completing the quiz | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/retry-quiz.gif) |
| Home Button | "back to home page" button should return the user to the intro page | Tested by clicking the "back to home page" button after completing the quiz | The feature behaved as expected | Test concluded and passed | ![gif](documentation/defensive-design/home-button.gif) |


## User Story Testing

| User Story | Screenshot |
| --- | --- |
| As a new quiz user, I would like to see a clear and memorable title on the landing page, so that I can identify the quiz. | ![heading](documentation/features/landing/header.png) |
| As a new quiz user, I would like to see an engaging image related to cats on the landing page, so that I feel interested in starting the quiz. | ![landing page picture](documentation/features/landing/landpic.png) |
| As a new quiz user, I would like to see a "Let's Start" button on the landing page, so that I can easily begin the quiz journey. | ![start button](documentation/features/landing/startbtn.png) |
| As a new quiz user, I would like to see clear instructions on the Intro page, so that I know what to expect from the quiz. | ![Intro Text](documentation/features/intro/introduction-text.png) |
| As a returning quiz user, I would like to see a "Next Question" button, so that I can easily move on to the next question after answering. | ![Next Button](documentation/features/quiz/next-btn.png) |
| As a returning quiz user, I would like to see my progress displayed (e.g., Question 2 of 10), so that I can keep track of my progress during the quiz. | ![Question Progress](documentation/features/quiz/total-que.png) |
| As a quiz user, I would like to see my correct answers highlighted in green, so that I know when I’ve chosen the right answer. | ![correct answer](documentation/features/quiz/corr-ans.png) |
| As a quiz user, I would like to see my incorrect answers highlighted in red with the correct answer displayed in green, so that I can learn from my mistakes. | ![incorrect answer](documentation/features/quiz/wrong-ans.png) |
| As a quiz user, I would like to see a summary of my score at the end of the quiz on the Pass Page, so that I know how well I did. | ![Pass Score](documentation/features/result/pass-score.png) |
| As a quiz user, I would like to see a humorous message and score summary on the Fail Page, so that I can understand my result and feel motivated to try again. | ![Fail Score](documentation/features/result/fail-score.png) |
| As a quiz user, I would like the option to start the quiz again after I finish, so that I can try to improve my score. | ![Again Button](documentation/features/result/take-aga.png) |
| As a quiz user, I would like the option to return to the home page after completing the quiz, so that I can easily navigate back. | ![Home Button](documentation/features/result/bk-to-home.png) |

## Automated Testing
Although automated testing is valuable for maintaining code quality, implementing it for the quiz functionality in this project would be overly complex. The quiz relies heavily on DOM manipulation and Bootstrap, making accurate simulation in a test environment challenging.

Given the project's scope and time constraints, we opted for thorough manual testing to ensure the quiz operates correctly.

In larger or more complex projects, investing in a robust automated testing setup may be justified. For future iterations or similar projects, automated tests could enhance long-term maintainability and help catch regressions early in development.


## User Feedback

The web application was tested by a few individuals, and the overall feedback was positive. Users described the game as "fun and interactive," which indicates that the gameplay successfully engages users and provides an enjoyable experience. One user specifically noted that the design was "pretty and nice," highlighting the appeal of the visual elements and interface.

### Key Positive Feedback:
 - **Engaging Gameplay:** Users found the game mechanics entertaining and easy to understand, which contributed to the interactive experience.

 - **Aesthetics:** The design and visual elements of the game were well-received, adding to the overall enjoyment.

 - **Usability:** Users appreciated the smooth navigation and clear layout of the game, making it easy to play.

### Potential Areas for Improvement:
 - **Variety of Questions:** Users suggested adding more variety in the questions, or shuffling the answers, to enhance the replayability and challenge.

 - **Additional Features:** Some users expressed interest in extra functionalities, such as a Leaderboard to track high scores and a Timed Quiz Option for an added layer of difficulty and excitement.

These suggestions will be considered for future updates to further enhance the user experience.


## Bugs

No bugs were encountered during testing. The game functioned as intended, providing a smooth and error-free user experience.

## Unfixed Bugs

There are no known unfixed bugs at this time. All identified issues during the development and testing phases were resolved.