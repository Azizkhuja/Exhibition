import {
  render,
  screen,
  getByRole,
  getByTestId,
  getByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";
import Main from "../components/Home/Main/Main";
import SearchLists from "../components/Home/Search/SearchLists";

describe("Should get home page and nested components", () => {
  // Get on view text in the main page
  it("should get card component's on view text", () => {
    render(<Main />);
    const getOnViewText = screen.getAllByText(/On View/i);
    expect(getOnViewText).toBeTruthy();
  });
  // Get subtitle of the application in the main page
  it("should get whole subtitle of search component", () => {
    render(<Search />);
    const getTitle = screen.getByText(/The Harvard Art Museums/i);
    expect(getTitle).toBeInTheDocument();
  });
  it("should get Input Search component and return truth", () => {
    render(<Search />);
    const searchInput = screen.getByRole("searchbox", {
      name: /search for gallery number, artist, keyword, title/i,
    });
    expect(searchInput).toBeTruthy();
  });
  it("should get Input Search component and return truth", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/classification/i);
    expect(searchInput).toBeTruthy();
  });
});
