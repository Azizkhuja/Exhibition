import { styled } from "@mui/material/styles";
import { Container, Paper, Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import useMediaQuery from "@mui/material/useMediaQuery";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SearchMasonry = () => {
  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
              {index + 1}
            </Item>
          ))}
        </Masonry>
      </Box>
    </Container>
  );
};

export default SearchMasonry;
