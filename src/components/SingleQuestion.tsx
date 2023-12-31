import { useEffect, useMemo, useState } from "react";
import { Option } from "../interfaces/countries";

const questionLetters = ["A", "B", "C", "D"];

export const SingleQuestion = ({ question, onAnswerSubmit }) => {
  // Guarda la respuesta correcta

  const correctAnswer = useMemo(
    () => question.options.find((item) => item.valid === true),
    [question]
  );

  const [userSelectedAnswer, setUserSelectedAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Limpia la respuesta seleccionada cuando se cambia de pregunta
  useEffect(() => {
    setSelectedAnswer(null);
    setUserSelectedAnswer(false);
  }, [question]);

  const listAnswersByCapitalQuestion = (questionItem: Option) => {
    if (!questionItem) return null;

    const correctAnswer = questionItem.options.find(
      (item) => item.valid === true
    );

    return (
      <>
        <p className="text-title font-bold w-96 text-2xl my-2">
          La capital de {correctAnswer.countryName} es:{" "}
        </p>
        <div className="h-[320px] flex flex-col gap-5">
          {questionItem.options.map((item, index) => (
            <div
              style={{
                backgroundColor: selectedAnswer
                  ? getAnswerColors(item)
                  : "transparent",
              }}
              onClick={() => validateAnswer(item, correctAnswer)}
              key={`${index}-${item.capital}`}
              className="hover:border-[5px]  border-[2px] rounded-[6px] p-2 border-title cursor-pointer "
            >
              <span className="text-title text-[18px]">
                {`${questionLetters[index]}.`} {item.capital}{" "}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  };

  const validateAnswer = (selectedOption, correctAnswer) => {
    if (userSelectedAnswer) return;

    setSelectedAnswer(selectedOption);
    setUserSelectedAnswer(true);

    if (selectedOption.countryName === correctAnswer.countryName) {
      onAnswerSubmit({
        correct: true,
        selectedAnswer: selectedOption,
        correctAnswer,
      });
      return;
    }
    onAnswerSubmit({
      correct: false,
      selectedAnswer: selectedOption,
      correctAnswer,
    });
  };

  const getAnswerColors = (questionItem) => {
    // Primero se valida si es una respuesta correcta, comparando el item iterado con la respuesta correcta.
    if (questionItem.valid === correctAnswer.valid) return "#60BF88";

    // Si el item actual no es la respuesta seleccionada, entonces se marca naranja.
    if (questionItem.countryName !== selectedAnswer.countryName)
      return "orange";

    // De lo contrario, si es una respuesta incorrecta, se marca rojo.
    if (selectedAnswer.valid !== correctAnswer.valid) return "#EA8282";
  };

  const listAnswersByFlagQuestion = (questionItem: Option) => {
    if (!questionItem) return null;
    return (
      <>
        <div className="h-[365px] flex flex-col gap-2">
          <img
            src={correctAnswer.flag}
            alt={correctAnswer.flagAlt}
            className="w-[84px] h-[54px]"
          />
          <p className="text-title font-bold w-96 text-2xl my-2">
            A cual país pertenece esta bandera?
          </p>
          <>
            {questionItem.options.map((item, index) => (
              <div
                style={{
                  backgroundColor: selectedAnswer
                    ? getAnswerColors(item)
                    : "transparent",
                }}
                className="hover:border-[3px] border-[2px] rounded-[6px] p-2 border-title cursor-pointer"
                onClick={() => validateAnswer(item, correctAnswer)}
                key={`${index}-${item.countryName}`}
              >
                <span className="text-title text-[18px]">
                  {`${questionLetters[index]}.`} {item.countryName}
                </span>
              </div>
            ))}
          </>
        </div>
      </>
    );
  };

  const displayAnswerListByQuestionType = (currentQuestionItem) => {
    if (currentQuestionItem.checkFor === "flag") {
      return <>{listAnswersByFlagQuestion(question)}</>;
    }

    if (currentQuestionItem.checkFor === "capital") {
      return <>{listAnswersByCapitalQuestion(question)}</>;
    }
  };

  return (
    <div className="question">{displayAnswerListByQuestionType(question)}</div>
  );
};
