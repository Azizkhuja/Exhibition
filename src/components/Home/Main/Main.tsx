import styled from "styled-components";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const Main = () => {
  const belowSmSize = useMediaQuery("(max-width:600px)");
  return (
    <Container sx={{ marginTop: 5, marginBottom: 20 }}>
      <ImageList variant="woven" cols={3} gap={8} sx={{ height: 650 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListTitleLink to="/visit">
              <ImageListTitle position="below" title={item.author} />
            </ImageListTitleLink>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
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
