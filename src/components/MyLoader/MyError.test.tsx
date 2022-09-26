import { render, screen } from "@testing-library/react";
import MyLoader from "./index";

describe("MyLoader", () => {
  test("should render search input", async () => {
    render(<MyLoader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
