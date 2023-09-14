import { useState } from "react";
import { QuizContext } from "./QuizContext";
import { ContextState } from "../interfaces/countries";

export const QuizProvider = ({ children }) => {
  const [questionArray, setQuestionArray] = useState<unknown>();
  const [quizStatus, setQuizStatus] = useState<ContextState>({
    completed: false,
    currentQuestion: 1,
    correctAnswers: 0,
  });

  const addCorrectAnswer = () => {
    setQuizStatus((state) => ({
      ...state,
      correctAnswers: state.correctAnswers + 1,
    }));
  };

  return (
    <QuizContext.Provider
      value={{
        questionArray,
        setQuestionArray,
        quizStatus,
        addCorrectAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
