import styled from "styled-components";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { MainPageData } from "../SearchDataModel";
import { BoldText } from "../../Utils";

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
            <Typography variant="h5" my={2} sx={{ textAlign: "center" }}>
              {itemData.title}
            </Typography>
            <Typography variant="body1">
              <BoldText>Culture: </BoldText>
              {itemData.culture ? itemData.culture : "Unknown culture"}
            </Typography>
            <Typography variant="body1">
              <BoldText>Century: </BoldText>
              {itemData.dated ? itemData.dated : "Unknown century"}
            </Typography>
            <Typography variant="body1">
              <BoldText>Period: </BoldText>
              {itemData.period ? itemData.period : "No information"}
            </Typography>
          </Item>
        ))}
      </Masonry>
    </Container>
  );
};

export default Main;
