import { render } from "@testing-library/react";
import { QuizContext } from "../../context/QuizContext";
import { Results } from "../../components/Results";
import { failedQuizContext, successfulQuizContext } from "../fixtures";

describe("Pruebas en <Results />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el resultado de un quiz completado con 10/10 preguntas correctas.", () => {
    const { container } = render(
      <QuizContext.Provider value={successfulQuizContext}>
        <Results />
      </QuizContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el resultado de un quiz completado con 5/10 preguntas correctas.", () => {
    const { container } = render(
      <QuizContext.Provider value={failedQuizContext}>
        <Results />
      </QuizContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
