import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Grid container sx={{ flexDirection: "column" }}>
            <Grid item>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                iPro Museums
              </Typography>
            </Grid>
            <Grid item>2</Grid>
          </Grid>
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
