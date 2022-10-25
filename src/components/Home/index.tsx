import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Divider from "@mui/material/Divider";

const Home = () => {
  return (
    <>
      <Navbar children={undefined} />
      <Main />
      <Divider />
    </>
  );
};

export default Home;
