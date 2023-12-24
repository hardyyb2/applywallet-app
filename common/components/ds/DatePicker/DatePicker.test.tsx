import { act, render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import { vi } from "vitest";

import { noop } from "@/utils/func";

import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  test("should render input element with role='button'", () => {
    const { container } = render(
      <DatePicker date={new Date().toISOString()} setDate={noop} />,
    );
    const inputElement = container.querySelector("input[role='button']");
    expect(inputElement).toBeInTheDocument();
  });

  test("should not render input with role='textbox'", () => {
    render(<DatePicker date={new Date().toISOString()} setDate={noop} />);

    const inputElement = screen.queryByRole("textbox");
    expect(inputElement).not.toBeInTheDocument();
  });

  test("should render popover with calendar when input it clicked", async () => {
    render(<DatePicker date={new Date().toISOString()} setDate={noop} />);

    const popoverButton = screen.getAllByRole("button")[0];
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const popoverElem = await screen.findByRole("dialog");
    expect(popoverElem).toBeInTheDocument();

    const calendarElem = await screen.findByTestId("date-picker-calendar");
    expect(calendarElem).toBeInTheDocument();
  });

  test("should render calendar with selected date", async () => {
    const date = new Date();
    render(<DatePicker date={date.toISOString()} setDate={noop} />);

    const popoverButton = screen.getAllByRole("button")[0];
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const calendar = await screen.findByTestId("date-picker-calendar");
    const selectedDateElem = calendar.querySelector(
      "button[name='day'][aria-selected='true']",
    );
    expect(selectedDateElem).toBeInTheDocument();
    expect(selectedDateElem).toHaveTextContent(date.getDate().toString());
  });

  test("should render input with selected date as dd/mm/yyyy", async () => {
    const date = new Date();
    const { container } = render(
      <DatePicker date={date.toISOString()} setDate={noop} />,
    );

    const popoverButton = screen.getAllByRole("button")[0];
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = container.querySelector("input[role='button']");
    expect(inputElement).toHaveValue(dayjs(date).format("DD/MM/YYYY"));
  });

  test("should render input with placeholder", () => {
    const placeholder = "dd/mm/yyyy";
    const { container } = render(
      <DatePicker date={undefined} setDate={noop} />,
    );

    const inputElement = container.querySelector("input[role='button']");
    expect(inputElement).toHaveAttribute("placeholder", placeholder);
  });

  test("should call setDate with ISOString when a date is selected", async () => {
    const setDate = vi.fn();
    const date = new Date("2021-01-01");
    render(<DatePicker date={date.toISOString()} setDate={setDate} />);

    const popoverButton = screen.getAllByRole("button")[0];
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    await screen.findByTestId("date-picker-calendar");
    const dateToFindElem = screen.getByText("15");
    act(() => {
      dateToFindElem.focus();
      dateToFindElem.click();
    });

    expect(setDate).toHaveBeenCalled();
    expect(setDate).toHaveBeenCalledWith("2021-01-15T00:00:00.000Z");
  });
});
