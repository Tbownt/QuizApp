import { useState } from "react";
import { QuizContext } from "./QuizContext";
import { getCountryGroupArray } from "../helpers/countriesApi";
import { generateQuestionArray } from "../helpers/questionHelper";

export const QuizProvider = ({ children }) => {
  const initialQuizStatus = {
    completed: false,
    currentQuestion: 1,
    correctAnswers: 0,
  };

  const [rawCountryData, setRawCountryData] = useState();
  const [questionArray, setQuestionArray] = useState();
  const [quizStatus, setQuizStatus] = useState(initialQuizStatus);

  const increaseCorrectAnswerCount = () => {
    setQuizStatus((state) => ({
      ...state,
      correctAnswers: state.correctAnswers + 1,
    }));
  };

  const goToNextQuestion = () => {
    setQuizStatus((state) => ({
      ...state,
      completed: state.currentQuestion === 10 ? true : false,
      currentQuestion:
        state.currentQuestion < 10
          ? state.currentQuestion + 1
          : state.currentQuestion,
    }));
  };

  const restartQuiz = () => {
    const countryGroupArray = getCountryGroupArray(rawCountryData);
    setQuestionArray(generateQuestionArray(countryGroupArray));

    setQuizStatus(initialQuizStatus);
  };

  return (
    <QuizContext.Provider
      value={{
        questionArray,
        quizStatus,
        setRawCountryData,
        setQuestionArray,
        increaseCorrectAnswerCount,
        goToNextQuestion,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
