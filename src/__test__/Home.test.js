import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";

describe("Should get home page and nested components", () => {
  it("should get subtitle of search component", () => {
    render(<Search />);
    const getTitle = screen.getByText(/Fogg/i);
    expect(getTitle).toBeInTheDocument();
  });
});
