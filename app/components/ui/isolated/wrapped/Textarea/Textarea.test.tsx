import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("should render", () => {
    render(<Textarea data-testid="textarea" />);
    expect(screen.getByTestId("textarea")).toBeInTheDocument();
  });

  it("should render disabled", () => {
    render(<Textarea disabled data-testid="textarea" />);
    expect(screen.getByTestId("textarea")).toBeDisabled();
  });

  it("should have placeholder", () => {
    render(<Textarea placeholder="textarea placeholder" />);
    expect(
      screen.getByPlaceholderText("textarea placeholder"),
    ).toBeInTheDocument();
  });
});
