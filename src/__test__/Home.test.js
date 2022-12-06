import { render, screen, getByRole, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";
import Main from "../components/Home/Main/Main";

describe("Should get home page and nested components", () => {
  it("should get card component's on view text", () => {
    render(<Main />);
    const getTitle = screen.getAllByText(/On View/i);
    expect(getTitle).toBeTruthy();
  });
  it("should get whole subtitle of search component", () => {
    render(<Search />);
    const getTitle = screen.getByText(/The Harvard Art Museums/i);
    expect(getTitle).toBeInTheDocument();
  });
  it("should get main page of hero image", () => {
    render(<Search />);
    const heroImage = screen.getByRole("searchbox", {
      name: /search for gallery number, artist, keyword, title/i,
    });
    expect(heroImage).toBeTruthy();
  });
});
