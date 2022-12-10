import { useEffect, useState } from "react";

import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";
import SearchMasonry from "./SearchMasonry/SearchMasonry";
import Footer from "./Footer/Footer";

// TODO: Get data from API
// TODO: Prepare Interface

// Wrapped with Home component
const Home = () => {
  const [getMainPageObjectData, setGetMainPageObjectData] = useState([]);

  return (
    <>
      <Navbar children={undefined} />
      <Main />
      <Divider />
      <Search />
      <SearchMasonry />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
