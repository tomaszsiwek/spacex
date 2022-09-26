import { render, screen, fireEvent } from "@testing-library/react";
import MyButton from "./index";

const onClick = jest.fn();

describe("MyButton", () => {
  test("should render search input", async () => {
    render(<MyButton label="Test button" />);
    const button = screen.getByText("Test button");
    expect(button).toBeInTheDocument();
  });

  test("should call onClick method once", async () => {
    render(<MyButton onClick={onClick} label="Test button" />);
    const button = screen.getByText("Test button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
