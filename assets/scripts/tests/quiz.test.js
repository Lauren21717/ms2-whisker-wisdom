import { navigateToIntro, navigateToQuiz } from '../quiz.js';

// Mock the window.location
const mockLocation = {};
Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

describe('Navigation Functions', () => {
  test('navigateToIntro changes window.location.href to intro.html', () => {
    navigateToIntro();
    expect(window.location.href).toBe('intro.html');
  });

  test('navigateToQuiz changes window.location.href to quiz.html', () => {
    navigateToQuiz();
    expect(window.location.href).toBe('quiz.html');
  });
});