import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";
import SearchMasonry from "./SearchMasonry/SearchMasonry";
import Footer from "./Footer/Footer";
import useFetch from "../Hooks/useFetch";

// Wrapped with Home component
const Home = () => {
  const baseUrl = "https://api.harvardartmuseums.org/";
  const { data, loading, error }: any = useFetch(
    `${baseUrl}object?apikey=${process.env.REACT_APP_API_KEY}`
  );

  return (
    <>
      <Navbar children={undefined} />
      <Main mainPageData={data?.records?.slice(0, 9)} loading={loading} />
      <Divider />
      <Search />
      <SearchMasonry />
      <Divider />
      <Footer />
    </>
  );
};

export default Home;
