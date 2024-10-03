import {
    navigateToIntro,
    navigateToQuiz,
    navigateToHome,
} from '../quiz.js';

describe('Navigation Functions', () => {
  beforeAll(() => {
    global.window = Object.create(window);
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
      },
      writable: true,
    });
  });

  test('navigateToIntro changes window.location.href to intro.html', () => {
    navigateToIntro();
    expect(window.location.href).toBe('intro.html');
  });

  test('navigateToQuiz changes window.location.href to quiz.html', () => {
    navigateToQuiz();
    expect(window.location.href).toBe('quiz.html');
  });

  test('navigateToHome changes window.location.href to index.html', () => {
    navigateToHome();
    expect(window.location.href).toBe('index.html');
  });
});
