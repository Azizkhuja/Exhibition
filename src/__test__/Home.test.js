import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";
import Main from "../components/Home/Main/Main";
import SearchLists from "../components/Home/Search/SearchLists";

describe("Should get home page and nested components", () => {
  // Get on view text in the main page
  // TODO: FIX next line probably needs to add mock test
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
  // Get search compoent and input
  it("should get Input Search component and return truth", () => {
    render(<Search />);
    const searchInput = screen.getByRole("searchbox", {
      name: /search for gallery number, artist, keyword, title/i,
    });
    expect(searchInput).toBeTruthy();
  });
  // Get "classification" filter button in the search
  it("should get SearchLists component and to be in the document", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/classification/i);
    expect(searchInput).toBeInTheDocument();
  });
  // Get "work type" filter button in the search
  it("get SearchLists component button: work type and should be in the document", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/work type/i);
    expect(searchInput).toBeInTheDocument();
  });
  // Get "period" filter button in the search
  it("get SearchLists component button: period type and should be in the documents", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/period/i);
    expect(searchInput).toBeInTheDocument();
  });
  // Get "place" filter button in the search
  it("get SearchLists component button: place type and should be in the documents", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/place/i);
    expect(searchInput).toBeInTheDocument();
  });
  it("get SearchLists component button: century type and should be in the documents", () => {
    render(<SearchLists />);
  });
});
