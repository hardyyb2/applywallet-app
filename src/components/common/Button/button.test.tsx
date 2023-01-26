import { render, fireEvent } from "@testing-library/react";
import { expect, describe, vi } from "vitest";

import { Button } from "./Button";

describe("Button", () => {
  test("renders with default props", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const button = getByText("Click me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn-md");
  });

  test("renders with custom props", () => {
    const { getByText } = render(
      <Button variant="secondary" size="sm" shape="square">
        Click me
      </Button>,
    );
    const button = getByText("Click me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn-sm");
    expect(button).toHaveClass("btn-secondary");
    expect(button).toHaveClass("btn-square");
  });

  test("handles click events", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText("Click me");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("renders in loading state", () => {
    const { getByText } = render(<Button loading>Click me</Button>);
    const button = getByText("Click me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("loading");
  });
});
