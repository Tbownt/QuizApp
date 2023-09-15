import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import { SingleQuestion } from "./SingleQuestion";

export const Question = ({ questions }) => {
  const { quizStatus, increaseCorrectAnswerCount, goToNextQuestion } =
    useContext(QuizContext);
  const [enableButtonNext, setEnableButtonNext] = useState(false);

  if (!questions) return null;

  const handlePageChange = () => {
    goToNextQuestion();
    setEnableButtonNext(false);
  };

  const handleUserClick = (response) => {
    if (response.correct) increaseCorrectAnswerCount();
    setEnableButtonNext(true);
  };

  return (
    <>
      <p className="text-title font-bold w-96 text-[16px]  text-center">
        Pregunta ({quizStatus.currentQuestion} / {questions.length})
      </p>
      {questions && (
        <SingleQuestion
          question={questions[quizStatus.currentQuestion - 1]}
          onAnswerSubmit={handleUserClick}
        />
      )}
      <div className="flex flex-row">
        <span className="text-title font-bold w-96 text-[16px]  text-left mt-3">
          Correctas ({quizStatus.correctAnswers} / {questions.length})
        </span>
        <div
          className={
            enableButtonNext
              ? "w-[35%] border text-center rounded-[12px] text-white bg-yellow h-10 self-end hover:border-title hover:border-[3px]"
              : ""
          }
        >
          {enableButtonNext && (
            <button onClick={handlePageChange} className="pt-[5px]">
              {quizStatus.currentQuestion === 10 ? "Resultados" : "Siguiente"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
