import { useContext, useRef, useState } from "react";
import { QuizContext } from "../context/QuizContext";
import { Results } from "./Results";

export const Question = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const correctRef = useRef<HTMLLIElement>(null);
  const [show, setShow] = useState(true);
  const [userChooseCorrectOption, setUserChooseCorrectOption] = useState(false);
  const { quizStatus, addCorrectAnswer } = useContext(QuizContext);

  const questionLetters = ["A", "B", "C", "D"];

  if (!questions) return null;

  const listAnswersByCapitalQuestion = (questionItem = []) => {
    if (!questionItem) return null;

    const correctAnswer = questionItem.options.find(
      (item) => item.valid === true
    );

    return (
      <>
        <p className="text-title font-bold w-96 text-2xl my-2">
          La capital de {correctAnswer.countryName} es:{" "}
        </p>
        <ul>
          {questionItem.options.map((item, index) => (
            <li
              onClick={() => validateAnswer(item, correctAnswer)}
              key={`${index}-${item.capital}`}
              className="my-5 border-[2px] cursor-pointer p-2 rounded-[12px] border-title hover:bg-yellow"
              ref={correctRef}
            >
              <span className="font-medium text-title">
                {" "}
                {`${questionLetters[index]}`} {item.capital}{" "}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const validateAnswer = (selectedOption, correctAnswer) => {
    setShow(false);
    console.log("Validating");
    if (userChooseCorrectOption) return;

    if (selectedOption.countryName === correctAnswer.countryName) {
      console.log("Valid answer");
      console.log(correctRef.current.textContent, "respuesta");
      // if (correctRef.current.innerHTML === selectedOption.countryName) {
      //   correctRef.current.classList.add("bg-green");
      //   correctRef.current.classList.remove("hover:bg-yellow");
      // }

      setUserChooseCorrectOption(true);
      addCorrectAnswer();

      return true;
    } else if (selectedOption.countryName !== correctAnswer.countryName) {
      correctRef.current.classList.add("bg-red");
    }

    return false;
  };

  const listAnswersByFlagQuestion = (questionItem = []) => {
    if (!questionItem) return null;

    const correctAnswer = questionItem.options.find(
      (item) => item.valid === true
    );

    return (
      <>
        <img
          className="w-[84px] h-[54px] -translate-y-1"
          src={correctAnswer.flag}
          alt={correctAnswer.flagAlt}
        />
        <p className="text-title font-bold w-96 text-2xl my-2">
          A cual país pertenece esta bandera?
        </p>
        <ul>
          {questionItem.options.map((item, index) => (
            <li
              onClick={() => validateAnswer(item, correctAnswer)}
              key={`${index}-${item.countryName}`}
              className="my-2 border-[2px] cursor-pointer p-2 rounded-[12px] border-title hover:bg-yellow"
              ref={correctRef}
            >
              <span className="font-medium text-title">
                {" "}
                {`${questionLetters[index]}`} {item.countryName}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  const displayAnswerListByQuestionType = (currentQuestionItem) => {
    if (currentQuestionItem.checkFor === "flag") {
      return <>{listAnswersByFlagQuestion(questions[currentQuestion])}</>;
    }

    if (currentQuestionItem.checkFor === "capital") {
      return <>{listAnswersByCapitalQuestion(questions[currentQuestion])}</>;
    }
  };

  const handlePageChange = () => {
    setCurrentQuestion((currentValue) => currentValue + 1);
    setUserChooseCorrectOption(false);
  };
  if (questions.length - 1 <= currentQuestion) {
    return <Results />;
  }

  return (
    <div className="flex flex-col">
      <p className="text-center -translate-y-4 w-[35%] self-center font-bold">
        Pregunta ({currentQuestion + 1} / {questions.length})
      </p>
      {displayAnswerListByQuestionType(questions[currentQuestion])}
      <span className="font-semibold">
        Correctas ({quizStatus.correctAnswers} / {questions.length})
      </span>
      <div
        className="self-end w-[25%] border text-center rounded-[12px] text-white bg-yellow h-10 p-2"
        hidden={show}
      >
        <button
          hidden={show}
          onClick={() => handlePageChange()}
          className={
            questions.length - 1 <= currentQuestion ? "hidden" : "w-[100%]"
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};
