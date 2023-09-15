import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export const Results = () => {
  const { quizStatus, restartQuiz } = useContext(QuizContext);
  return (
    <div className="flex flex-col items-center">
      <img
        src={"/undraw_winners_ao2o2.svg"}
        alt="results_icon"
        className="w-[238px] flex-shrink-0 top"
      />
      <h2 className="text-5xl font-bold text-title mt-10">Resultado</h2>
      <p className="mt-5">
        Obtuviste{" "}
        <span className="text-2xl font-bold text-green">
          {quizStatus.correctAnswers}{" "}
        </span>
        respuestas correctas
      </p>
      <div className="text-title border-2 mt-6 p-4 rounded-2xl hover:bg-title hover:text-white">
        <button className="text-[18px] font-semibold" onClick={restartQuiz}>
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
};
