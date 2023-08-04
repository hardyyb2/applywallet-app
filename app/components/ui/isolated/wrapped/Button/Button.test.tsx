import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Button } from ".";

describe("Button", () => {
  it("Should render button", () => {
    render(<Button>test</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should call onClick once per click event", () => {
    const mockType = vi.fn();
    render(<Button onClick={mockType}>test</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(mockType).toHaveBeenCalledTimes(1);
  });

  it("Should not call onClick from click event if disabled", () => {
    const mockType = vi.fn();
    render(
      <Button onClick={mockType} disabled>
        test
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockType).toHaveBeenCalledTimes(0);
  });
});
