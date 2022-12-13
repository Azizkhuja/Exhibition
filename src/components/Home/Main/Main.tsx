import styled from "styled-components";
import { Link } from "react-router-dom";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { MainPageData } from "../SearchDataModel";

type MainPageDataTypes = {
  mainPageData: MainPageData[];
};

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

const Main = ({ mainPageData }: MainPageDataTypes) => {
  console.log(mainPageData);

  // Get responsive size
  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");

  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Masonry columns={belowXsSize ? 1 : belowMdSize ? 2 : 3} spacing={2}>
        {mainPageData.map((itemImg, index) => (
          <Item key={index}>
            <img
              src={itemImg.primaryimageurl}
              alt={itemImg.title}
              style={{ width: "100%" }}
            />
            <Typography variant="caption">
              {`Published on ${itemImg.dateoffirstpageview}`}
            </Typography>
            <Typography variant="h5">{itemImg.title}</Typography>
          </Item>
        ))}
      </Masonry>
    </Container>
  );
};

export default Main;
