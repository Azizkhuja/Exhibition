import styled from "styled-components";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { MainPageData } from "../SearchDataModel";

type MainPageDataTypes = {
  mainPageData: MainPageData[];
};

const Item = styled(Paper)(({ theme }) => ({
  padding: 8,
}));

const Main = ({ mainPageData }: MainPageDataTypes) => {
  // Get responsive size
  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");

  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Masonry columns={belowXsSize ? 1 : belowMdSize ? 2 : 3} spacing={2}>
        {mainPageData.map((itemData, index) => (
          <Item key={index}>
            <img
              src={itemData.primaryimageurl}
              alt={itemData.title}
              style={{ width: "100%" }}
            />
            <Typography variant="caption">
              {`Published on ${itemData.dateoffirstpageview}`}
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {itemData.title}
            </Typography>
            <Typography variant="body2">Culture: {itemData.culture}</Typography>
            <Typography variant="body2">Century: {itemData.dated}</Typography>
            <Typography variant="body2">Period: {itemData.period}</Typography>
          </Item>
        ))}
      </Masonry>
    </Container>
  );
};

export default Main;
