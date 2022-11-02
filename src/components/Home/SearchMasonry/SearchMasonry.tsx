import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const SearchMasonry = () => {
  return (
    <Container>
      <Box sx={{ width: 500, minHeight: 393 }}>
        <Masonry columns={4} spacing={2}></Masonry>
      </Box>
    </Container>
  );
};

export default SearchMasonry;
