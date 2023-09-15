import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Name of the group", () => {
  test("demo", () => {
    expect(true).toBe(true);
  });

  test("Renders the main page", () => {
    const { container } = render(<App />);
    screen.debug(container);
    expect(true).toBeTruthy();
  });
});
