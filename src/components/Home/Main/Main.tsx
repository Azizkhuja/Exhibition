import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";
import { Masonry } from "@mui/lab";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));

const Main = () => {
  const belowSmSize = useMediaQuery("(min-width:600px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");
  return (
    <Container sx={{ marginTop: 5, marginBottom: 5 }}>
      <Masonry columns={belowXsSize ? 1 : 2} spacing={2}>
        {itemData.map((itemImg, index) => (
          <Item>
            <img
              src={itemImg.img}
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
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    publishedData: "August 27, 2022–December 30, 2022",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    publishedData: "August 27, 2022–December 30, 2022",
  },
];

const ImageListTitleLink = styled(Link)`
  color: #000;
  text-decoration: none;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 0.1em;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.5s, transform 0.5s;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }
`;
const ImageListTitle = styled(ImageListItemBar)`
  margin-top: 6px;
  text-align: center;
  text-transform: uppercase;
`;

export default Main;
