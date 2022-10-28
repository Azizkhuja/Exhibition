import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar children={undefined} />
      <Main />
      <Divider />
      <Search />
      <Box sx={{ margin: 20 }}></Box>
    </>
  );
};

export default Home;
