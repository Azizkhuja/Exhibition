import { styled } from "@mui/material/styles";
import {
  Button,
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
    <Container sx={{ padding: 6 }}>
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
                      <ListItemButton>About</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>Contact us</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>Press</ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>Staff</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>Employment</ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>Collecting Policy</ListItemButton>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ color: "grey" }}>
                © 2022 President and Fellows of iPro museum
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid container>
            <Grid item>
              <Newsletter>Newsletter</Newsletter>
              <Typography>Sign up to get the latest news</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          3
        </Grid>
      </Grid>
    </Container>
  );
};

const Newsletter = styled(Button)`
  && {
    font-size: 16px;
    color: #fff;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 0;
    transition: all 0.6s;
    background-color: #9ca3af;

    &:hover {
      background-color: #8c929d;
      color: #c1c1c1;
    }
  }
`;

export default Footer;
