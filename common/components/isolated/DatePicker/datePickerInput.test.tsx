import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";
import { vi } from "vitest";

import { noop } from "@/utils/func";

import { DatePickerInput } from "./DatePickerInput";

const placeholder = "dd/mm/yyyy";

describe("DatePickerInput", () => {
  test("should render input element with role='textbox'", () => {
    render(<DatePickerInput date={new Date().toISOString()} setDate={noop} />);
    const inputElement = screen.queryByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  test("should render popover with calendar when input \"'endIcon' Button\" it clicked", async () => {
    render(<DatePickerInput date={new Date().toISOString()} setDate={noop} />);

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
    render(<DatePickerInput date={new Date().toISOString()} setDate={noop} />);

    const inputElement = screen.queryByPlaceholderText(placeholder);
    inputElement?.click();

    const popoverElem = screen.queryByRole("dialog");
    expect(popoverElem).not.toBeInTheDocument();

    const calendarElem = screen.queryByRole("date-picker-input-calendar");
    expect(calendarElem).not.toBeInTheDocument();
  });

  test("should render calendar with selected date", async () => {
    const date = new Date();
    render(<DatePickerInput date={date.toISOString()} setDate={noop} />);

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
    render(<DatePickerInput date={date.toISOString()} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByPlaceholderText(placeholder);
    expect(inputElement).toHaveValue(dayjs(date).format("YYYY-MM-DD"));
  });

  test("should render input with empty value when date is undefined", async () => {
    render(<DatePickerInput date={undefined} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByPlaceholderText(placeholder);
    expect(inputElement).toHaveValue("");
  });

  test("should call setDate with ISOString when a date is selected", async () => {
    const setDate = vi.fn();
    const date = new Date("2021-01-01");
    render(<DatePickerInput date={date.toISOString()} setDate={setDate} />);

    const popoverButton = screen.getAllByRole("button")[0];
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    await screen.findByTestId("date-picker-input-calendar");
    const dateToFindElem = screen.getByText("15");
    act(() => {
      dateToFindElem.focus();
      dateToFindElem.click();
    });

    expect(setDate).toHaveBeenCalled();
    expect(setDate).toHaveBeenCalledWith("2021-01-15T00:00:00.000Z");
  });

  test("change input value should call 'setDate' when date becomes valid", async () => {
    const setDate = vi.fn();
    const date = new Date();
    render(<DatePickerInput date={date.toISOString()} setDate={setDate} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByPlaceholderText(placeholder);

    if (!inputElement) {
      throw new Error("inputElement is null");
    }

    act(() => {
      fireEvent.change(inputElement, { target: { value: "2015-12-10" } });
    });

    expect(setDate).toHaveBeenCalled();
    expect(setDate).toHaveBeenCalledWith("2015-12-10T00:00:00.000Z");
  });

  test("should render input with empty value when date is undefined", async () => {
    render(<DatePickerInput date={undefined} setDate={noop} />);

    const popoverButton = screen.getByRole("button");
    act(() => {
      popoverButton.focus();
      popoverButton.click();
    });

    const inputElement = screen.queryByPlaceholderText(placeholder);
    expect(inputElement).toHaveValue("");
  });
});
