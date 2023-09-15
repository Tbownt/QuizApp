import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { QuizContext } from "../context/QuizContext";
import { getCountryGroupArray } from "../helpers/countriesApi";
import { generateQuestionArray } from "../helpers/questionHelper";
import { Question } from "./QuestionContainer";
import { Results } from "./Results";

export const MainContainer = () => {
  const { questionArray, setQuestionArray, quizStatus, setRawCountryData } =
    useContext(QuizContext);
  const { data, isLoading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital"
  );

  useEffect(() => {
    if (!isLoading && data) {
      setRawCountryData(data);
      const countryGroupArray = getCountryGroupArray(data);
      setQuestionArray(generateQuestionArray(countryGroupArray));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      {quizStatus.completed && <Results />}

      {!quizStatus.completed && <Question questions={questionArray} />}
    </>
  );
};
