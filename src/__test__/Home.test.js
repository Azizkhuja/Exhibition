import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "../components/Home/Search/Search";
import SearchLists from "../components/Home/Search/SearchLists";
import SearchMasonry from "../components/Home/SearchMasonry/SearchMasonry";
import Footer from "../components/Home/Footer/Footer";
import { Typography } from "@mui/material";

describe("Should get home page and nested components", () => {
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
  // Get "century" filter button in the search
  it("get SearchLists component button: century type and should be in the documents", () => {
    render(<SearchLists />);
    const searchInput = screen.getByText(/century/i);
    expect(searchInput).toBeInTheDocument();
  });
  // Get "Gallery" filter button in the search
  it("get SearchLists component button: gallery type and should be in the documents", () => {
    render(<SearchLists />);
    const searchFilterButton = screen.getByText(/gallery/i);
    expect(searchFilterButton).toBeInTheDocument();
  });
  // Get "On View" filter button in the search
  it("get SearchLists component button: on view type and should be in the documents", () => {
    render(<SearchLists />);
    const searchFilterButton = screen.getByText(/on view/i);
    expect(searchFilterButton).toBeInTheDocument();
  });
  // Get "Load more" button in Home page SearchMasonry component
  it("get SearchMasonry component: load more button", () => {
    render(<SearchMasonry />);
    const loadMoreBtn = screen.getByRole("button", {
      name: /load more/i,
    });
    expect(loadMoreBtn).toBeInTheDocument();
  });
  // Foot part tests
  // Get "company logo" in Home page from Footer component
  it("get footer logo", () => {
    render(<Footer />);
    const getFooterLogo = screen.getByRole("heading", {
      name: /ipro museums/i,
    });
    expect(getFooterLogo).toBeInTheDocument();
  });
  // Get "Menu About" button in Home page footer
  it("get about menu in footer", () => {
    render(<Footer />);
    const getAboutMenu = screen.getByRole("button", { name: /about/i });
    expect(getAboutMenu).toBeInTheDocument();
  });
  // Get "Staff About" button in Home page footer
  it("get staff menu in footer", () => {
    render(<Footer />);
    const getStaffMenu = screen.getByRole("button", { name: /staff/i });
    expect(getStaffMenu).toBeInTheDocument();
  });
  // Get "Contact US" button in Home page footer
  it("get contact us in footer", () => {
    render(<Footer />);
    const getContactUs = screen.getByRole("button", { name: /contact us/i });
    expect(getContactUs).toBeInTheDocument();
  });
  // Get "Employment" button in Home page footer
  it("get Employment in footer", () => {
    render(<Footer />);
    const getEmployment = screen.getByRole("button", { name: /employment/i });
    expect(getEmployment).toBeInTheDocument();
  });
  // Get "Press" button in Home page footer
  it("get Press in footer", () => {
    render(<Footer />);
    const getPress = screen.getByRole("button", { name: /press/i });
    expect(getPress).toBeInTheDocument();
  });
  // Get "Collecting Policy" button in Home page footer
  it("get collecting policy in footer", () => {
    render(<Footer />);
    const getCollectingPolicy = screen.getByRole("button", {
      name: /collecting policy/i,
    });
    expect(getCollectingPolicy).toBeInTheDocument();
  });
  // Get "Current/dynamic year and president and fellows of iPro museum" text in Home page footer
  it("Get 'current/dynamic year' and the copyright text", () => {
    const fullYear = new Date().getFullYear();
    render(
      <Typography variant="caption" sx={{ color: "grey" }}>
        &copy; {fullYear} President and Fellows of iPro museum
      </Typography>
    );
    expect(
      screen.getByText(
        `\u00A9 ${fullYear} President and Fellows of iPro museum`
      )
    ).toBeInTheDocument();
  });
  // Get Newsletter button in Home page footer
  it("Get 'Newsletter' button in Home page footer", () => {
    render(<Footer />);
    const getNewsLetterBtn = screen.getByRole("button", {
      name: /newsletter/i,
    });
    expect(getNewsLetterBtn).toBeInTheDocument();
  });
  // Get "Sign up to get the latest news" text in Home page footer
  it("Get 'Sign up to get the latest news' button in Home page footer", () => {
    render(<Footer />);
    const getSignUpText = screen.getByText(/sign up to get the latest news/i);
    expect(getSignUpText).toBeInTheDocument();
  });
  // Get "Terms of use" text button in Home page footer
  it("Get 'Terms of use' button in Home page footer", () => {
    render(<Footer />);
    const getTermsOfUseText = screen.getByRole("button", {
      name: /terms of use/i,
    });
    expect(getTermsOfUseText).toBeInTheDocument();
  });
  // Get "Privacy statement" text button in Home page footer
  it("Get 'Privacy statement' button in Home page footer", () => {
    render(<Footer />);
    const getPrivacyText = screen.getByRole("button", {
      name: /privacy statement/i,
    });
    expect(getPrivacyText).toBeInTheDocument();
  });
  // Get "Digital accessibility" text button in Home page footer
  it("Get 'Digital accessibility' button in Home page footer", () => {
    render(<Footer />);
  });
});
