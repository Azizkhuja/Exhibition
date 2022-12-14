import styled from "styled-components";

// Image
import iProCoin from "../../../assets/ipro_coin.png";

// Material UI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Divider, Paper, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import { MainPageData } from "../SearchDataModel";
import { BoldText } from "../../Utils";
import { getRandomDate } from "../../Utils/Helpers";
import Loading from "./Loading";

type MainPageDataTypes = {
  mainPageData: MainPageData[];
  loading: string;
};

const Item = styled(Paper)(({ theme }) => ({
  padding: 8,
}));

const Main = ({ mainPageData, loading }: MainPageDataTypes) => {
  // Get responsive size
  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");

  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      {loading ? (
        <Loading />
      ) : (
        <Masonry columns={belowXsSize ? 1 : belowMdSize ? 2 : 3} spacing={2}>
          {mainPageData?.map((itemData, index) => (
            <Item key={index}>
              <img
                src={
                  itemData.primaryimageurl ? itemData.primaryimageurl : iProCoin
                }
                alt={itemData.title}
                style={{ width: "100%" }}
              />
              <Typography variant="caption">
                <BoldText>Published on: </BoldText>
                {`${
                  itemData.dateoffirstpageview
                    ? itemData.dateoffirstpageview
                    : getRandomDate()
                }`}
              </Typography>
              <Typography variant="h5" my={1} sx={{ textAlign: "center" }}>
                {itemData.title}
              </Typography>
              <Typography variant="body1">
                <BoldText>Culture: </BoldText>
                {itemData.culture ? itemData.culture : "Unknown culture"}
              </Typography>
              <Divider />
              <Typography variant="body1">
                <BoldText>Century: </BoldText>
                {itemData.dated ? itemData.dated : "Unknown century"}
              </Typography>
              <Divider />
              <Typography variant="body1">
                <BoldText>Period: </BoldText>
                {itemData.period ? itemData.period : "No information"}
              </Typography>
            </Item>
          ))}
        </Masonry>
      )}
    </Container>
  );
};

export default Main;
