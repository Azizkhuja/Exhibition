import { useEffect, useState } from "react";
import axios from "axios";

import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";
import SearchMasonry from "./SearchMasonry/SearchMasonry";
import Footer from "./Footer/Footer";

// Wrapped with Home component
const Home = () => {
  const [getMainPageObjectData, setGetMainPageObjectData] = useState([]);
  const baseUrl = "https://api.harvardartmuseums.org/";

  useEffect(() => {
    // Call function & get data from server
    fetchObjectData();
  }, []);

  // Create function request to server asynchronously
  const fetchObjectData = async () => {
    const { data } = await axios.get(
      `${baseUrl}object?apikey=${process.env.REACT_APP_API_KEY}`
    );
    setGetMainPageObjectData(data.records);
  };

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
