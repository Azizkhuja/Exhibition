import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";

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
                <BeachAccessSharpIcon
                  style={{ fontSize: 34, marginRight: 5 }}
                />
                iPro Museums
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>Staff</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>Employment</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>www</ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item></Grid>
              </Grid>
            </Grid>
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
