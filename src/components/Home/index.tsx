import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";
import Search from "./Search/Search";

const Home = () => {
  return (
    <>
      <Navbar children={undefined} />
      <Main />
      <Divider />
      <Search />
    </>
  );
};

export default Home;
