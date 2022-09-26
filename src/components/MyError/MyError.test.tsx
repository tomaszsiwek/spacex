import { render, screen } from "@testing-library/react";
import MyError from "./index";

describe("MyError", () => {
  test("should render search input", async () => {
    render(<MyError />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });
});
