import styled from "styled-components";
import { Container, Typography, TextField } from "@mui/material";

const Search = () => {
  return (
    <Container>
      <Typography variant="h3" my={6} sx={{ textAlign: "center" }}>
        The Harvard Art Museums — the <NameUnderline>Fogg</NameUnderline>,
        <NameUnderline>Busch-Reisinger</NameUnderline>, and{" "}
        <NameUnderline>Arthur M. Sackler</NameUnderline> Museums
      </Typography>
      <TextField
        sx={{ width: "100%" }}
        id="outlined-search"
        label="Search field"
        type="search"
      />
    </Container>
  );
};

const NameUnderline = styled("span")`
  border-bottom: 2px solid #000;
`;

export default Search;
