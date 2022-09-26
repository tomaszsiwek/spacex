import { render, screen, fireEvent } from "@testing-library/react";
import MySearch from "./index";

describe("MySearch", () => {
  test("should render search input", async () => {
    render(<MySearch onApplyButton={jest.fn()} />);
    const search = screen.getByText("Search");
    expect(search).toBeInTheDocument();
  });

  test("should add some text in search input", async () => {
    let value = "";
    const onApplyButton = jest.fn((v) => {
      value = v;
    });

    render(<MySearch value={value} onApplyButton={onApplyButton} />);
    const search = screen.getByPlaceholderText("Find mission...");
    const searchButton = screen.getByText("Search");
    fireEvent.change(search, { target: { value: "Search test value" } });
    fireEvent.click(searchButton);
    expect(screen.getByDisplayValue("Search test value")).toBeInTheDocument();
    expect(onApplyButton).toHaveBeenCalledTimes(1);
  });
});
