import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { QuizContext } from "../context/QuizContext";
import { getCountryGroupArray } from "../helpers/countriesApi";
import { generateQuestionArray } from "../helpers/questionHelper";
import { Question } from "./QuestionContainer";
import { CountryMap } from "../interfaces/countries";

export const MainContainer = () => {
  const { questionArray, setQuestionArray } = useContext(QuizContext);
  const { data, isLoading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,capital"
  );

  useEffect(() => {
    if (!isLoading && data) {
      const countryGroupArray: CountryMap[] = getCountryGroupArray(data);
      setQuestionArray(generateQuestionArray(countryGroupArray));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <>
      <Question questions={questionArray} />
    </>
  );
};
