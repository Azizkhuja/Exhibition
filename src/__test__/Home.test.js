import { render, screen, getByTestId, getByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";
import Main from "../components/Home/Main/Main";

describe("Should get home page and nested components", () => {
  it("should get whole subtitle of search component", () => {
    render(<Main />);
    const getTitle = screen.getAllByText(/On View/i);
    expect(getTitle).toBeTruthy();
  });
  it("should get whole subtitle of search component", () => {
    render(<Search />);
    const getTitle = screen.getByText(/The Harvard Art Museums/i);
    expect(getTitle).toBeInTheDocument();
  });
});
