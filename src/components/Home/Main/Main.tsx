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
              On View, {itemImg.publishedData}
            </Typography>
            <Typography variant="h5">{itemImg.title}</Typography>
          </Item>
        ))}
      </Masonry>
    </Container>
  );
};

// Styled components
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "A Colloquium in the Visual Arts",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Funerary Portraits from Roman Egypt: Facing Forward",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Dare to Know: Prints and Drawings in the Age of Enlightenment",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Kitchen",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Laptop",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Lua",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    publishedData: "August 27, 2022–December 30, 2022",
  },
];

export default Main;
