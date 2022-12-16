import { useEffect, useState } from "react";
import axios from "axios";

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
  const baseUrl = "https://api.harvardartmuseums.org/";

  useEffect(() => {}, []);
  const fetchObjectData = async () => {};

  return (
    <>
      <Navbar children={undefined} />
      <Main mainPageData={getMainPageObjectData} />
      <Divider />
      <Search />
      <SearchMasonry />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
