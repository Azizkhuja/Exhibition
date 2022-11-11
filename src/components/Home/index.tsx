import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";
import { Box } from "@mui/material";
import SearchMasonry from "./SearchMasonry/SearchMasonry";

const Home = () => {
  return (
    <>
      <Navbar children={undefined} />
      <Main />
      <Divider />
      <Search />
      <SearchMasonry />
      <Divider />
      <Box sx={{ margin: 20 }}></Box>
    </>
  );
};

export default Home;
