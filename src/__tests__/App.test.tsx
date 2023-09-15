import { render, screen } from "@testing-library/react";
import { Results } from "../components/Results";
import { QuizContext } from "../context/QuizContext";
import { describe, jest, test } from "@jest/globals";

describe("Pruebas en <SingleQuestion/> ", () => {
  test("Results ", () => {
    const contextValue = {
      quizStatus: 1,
      restartQuiz: jest.fn(),
    };
    render(
      <QuizContext.Provider value={contextValue}>
        <Results />
      </QuizContext.Provider>
    );
    screen.debug();
  });
});
