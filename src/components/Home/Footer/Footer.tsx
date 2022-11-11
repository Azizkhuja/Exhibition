import { Container, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
          1
        </Grid>
        <Grid item md={4}>
          2
        </Grid>
        <Grid item md={4}>
          3
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
