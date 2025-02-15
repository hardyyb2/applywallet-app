import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
  test("renders input element", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("handles input change", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });
    expect(inputElement).toHaveValue("Hello, World!");
  });

  test("renders start icon", () => {
    render(<Input startIcon={<span>Icon</span>} />);
    const iconElement = screen.getByTestId("start-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("absolute");
  });

  test("renders end icon", () => {
    render(<Input endIcon={<span>Icon</span>} />);
    const iconElement = screen.getByTestId("end-icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("absolute");
  });

  test("renders start and end icon", () => {
    render(
      <Input
        startIcon={<span>Icon start</span>}
        endIcon={<span>Icon end</span>}
      />,
    );
    const iconStartElement = screen.getByTestId("start-icon");
    const iconEndElement = screen.getByTestId("end-icon");

    expect(iconStartElement).toBeInTheDocument();
    expect(iconEndElement).toBeInTheDocument();

    expect(iconStartElement).toHaveClass("absolute");
    expect(iconEndElement).toHaveClass("absolute");
  });

  test("renders start and end icon and input element", () => {
    render(
      <Input
        startIcon={<span>Icon start</span>}
        endIcon={<span>Icon end</span>}
        placeholder="Placeholder"
      />,
    );
    const iconStartElement = screen.getByTestId("start-icon");
    const iconEndElement = screen.getByTestId("end-icon");
    const inputElement = screen.getByPlaceholderText("Placeholder");

    expect(iconStartElement).toBeInTheDocument();
    expect(iconEndElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(iconStartElement).toHaveClass("absolute");
    expect(iconEndElement).toHaveClass("absolute");
  });

  test("renders start icon and input element with 'non absolute' position if `iconSeparate` is true", () => {
    render(
      <Input
        startIcon={<span>Icon</span>}
        placeholder="Placeholder"
        iconSeparate
      />,
    );
    const iconElement = screen.getByTestId("start-icon");
    const inputElement = screen.getByPlaceholderText("Placeholder");

    expect(iconElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(iconElement).not.toHaveClass("absolute");
  });

  test("renders end icon and input element with 'non absolute' position if `iconSeparate` is true", () => {
    render(
      <Input
        endIcon={<span>Icon</span>}
        placeholder="Placeholder"
        iconSeparate
      />,
    );
    const iconElement = screen.getByTestId("end-icon");
    const inputElement = screen.getByPlaceholderText("Placeholder");

    expect(iconElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(iconElement).not.toHaveClass("absolute");
  });

  test("renders start and end icon and input element with 'non absolute' position if `iconSeparate` is true", () => {
    render(
      <Input
        startIcon={<span>Icon start</span>}
        endIcon={<span>Icon end</span>}
        placeholder="Placeholder"
        iconSeparate
      />,
    );
    const iconStartElement = screen.getByTestId("start-icon");
    const iconEndElement = screen.getByTestId("end-icon");
    const inputElement = screen.getByPlaceholderText("Placeholder");

    expect(iconStartElement).toBeInTheDocument();
    expect(iconEndElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();

    expect(iconStartElement).not.toHaveClass("absolute");
    expect(iconEndElement).not.toHaveClass("absolute");
  });

  test("input wrapper has 'grid' class if `iconSeparate` is true", () => {
    render(
      <Input
        startIcon={<span>Icon start</span>}
        endIcon={<span>Icon end</span>}
        placeholder="Placeholder"
        iconSeparate
      />,
    );
    const inputWrapperElement = screen.getByTestId("input-wrapper");

    expect(inputWrapperElement).toBeInTheDocument();
    expect(inputWrapperElement).toHaveClass("grid");
    expect(inputWrapperElement).toHaveClass("grid-cols-[1fr_auto]");
  });
});
