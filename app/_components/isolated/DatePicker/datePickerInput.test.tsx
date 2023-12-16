import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import { vi } from "vitest";

import { noop } from "@/utils/func";

import { DatePickerInput } from "./DatePickerInput";

describe("DatePickerInput", () => {
  test("should render input element with role='textbox'", () => {
    render(<DatePickerInput date={new Date()} setDate={noop} />);
    const inputElement = screen.queryByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("should render popover with calendar when input \"'endIcon' Button\" it clicked", async () => {
    render(<DatePickerInput date={new Date()} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const popoverElem = await screen.findByRole("dialog");
    expect(popoverElem).toBeInTheDocument();

    const calendarElem = await screen.findByTestId(
      "date-picker-input-calendar",
    );
    expect(calendarElem).toBeInTheDocument();
  });

  test("should not render popover with calendar when input it clicked", async () => {
    render(<DatePickerInput date={new Date()} setDate={noop} />);

    const inputElement = screen.getByRole("textbox");
    inputElement.click();

    const popoverElem = screen.queryByRole("dialog");
    expect(popoverElem).not.toBeInTheDocument();

    const calendarElem = screen.queryByRole("date-picker-input-calendar");
    expect(calendarElem).not.toBeInTheDocument();
  });

  test("should render calendar with selected date", async () => {
    const date = new Date();
    render(<DatePickerInput date={date} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const calendar = await screen.findByTestId("date-picker-input-calendar");
    const selectedDateElem = calendar.querySelector(
      "button[name='day'][aria-selected='true']",
    );
    expect(selectedDateElem).toBeInTheDocument();
    expect(selectedDateElem).toHaveTextContent(date.getDate().toString());
  });

  test("should render input with selected date as dd/mm/yyyy", async () => {
    const date = new Date();
    render(<DatePickerInput date={date} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByRole("textbox");
    expect(inputElement).toHaveValue(dayjs(date).format("DD/MM/YYYY"));
  });

  test("should render input with empty value when date is undefined", async () => {
    render(<DatePickerInput date={undefined} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByRole("textbox");
    expect(inputElement).toHaveValue("");
  });

  test("change input value should call setDate", async () => {
    const setDate = vi.fn();
    const date = new Date();
    render(<DatePickerInput date={date} setDate={setDate} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.getByRole("textbox");
    const dateString = dayjs(date).format("DD/MM/YYYY") + "t";

    await userEvent.type(inputElement, "t");
    expect(setDate).toHaveBeenCalledWith(dateString);
  });

  test("should render input with empty value when date is undefined", async () => {
    render(<DatePickerInput date={undefined} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByRole("textbox");
    expect(inputElement).toHaveValue("");
  });
});
