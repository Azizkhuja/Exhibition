import styled from "styled-components";
// Material UI
import { Container, Typography, TextField, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import SearchLists from "./SearchLists";

const Search = () => {
  // Get responsive size
  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:400px)");

  return (
    <Container>
      <Typography
        variant={belowXsSize ? "h5" : belowMdSize ? "h4" : "h3"}
        my={belowMdSize ? 3 : 6}
        sx={{ textAlign: "center" }}
      >
        The Harvard Art Museums — the <NameUnderline>Fogg</NameUnderline>,
        <NameUnderline>Busch-Reisinger</NameUnderline>, and{" "}
        <NameUnderline>Arthur M. Sackler</NameUnderline> Museums
      </Typography>
      <TextField
        fullWidth={true}
        id="outlined-search"
        label="Search for Gallery Number, Artist, Keyword, Title"
        type="search"
      />
      <SearchLists />
      <Divider sx={{ marginBottom: 5 }} />
    </Container>
  );
};

// Styled components
const NameUnderline = styled("span")`
  border-bottom: 2px solid #000;
`;

export default Search;
