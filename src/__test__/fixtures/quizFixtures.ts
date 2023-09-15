import { questionArrayFixture } from "./questionFixtures";

export const completedQuizStatusSuccessful = {
  completed: true,
  currentQuestion: 10,
  correctAnswers: 10,
};
export const completedQuizStatusFailed = {
  ...completedQuizStatusSuccessful,
  correctAnswers: 5,
};

export const successfulQuizContext = {
  quizStatus: completedQuizStatusSuccessful,
  questionArray: questionArrayFixture,
  restartQuiz: () => {},
};

export const failedQuizContext = {
  quizStatus: completedQuizStatusFailed,
  questionArray: questionArrayFixture,
  restartQuiz: () => {},
};
