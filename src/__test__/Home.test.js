import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";

describe("Test", () => {
  it("should get navbar title", () => {
    render(<Search />);
  });
});
