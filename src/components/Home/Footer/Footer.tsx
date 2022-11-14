import { styled } from "@mui/material/styles";
import {
  Button,
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Link,
} from "@mui/material";

// Icons
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Container sx={{ padding: 6, color: "#9ca3b0" }}>
      <Grid container>
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
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid item>
              <Newsletter>Newsletter</Newsletter>
              <Typography variant="caption">
                Sign up to get the latest news
              </Typography>
            </Grid>
            <Grid item sx={{ fontSize: 12 }}>
              <List>
                <ListItem disablePadding>
                  <NewsletterItem>Terms of Use</NewsletterItem>
                </ListItem>
                <ListItem disablePadding>
                  <NewsletterItem>Privacy Statement</NewsletterItem>
                </ListItem>
                <ListItem disablePadding>
                  <NewsletterItem>Digital Accessibility</NewsletterItem>
                </ListItem>
                <ListItem disablePadding>
                  <NewsletterItem>FAQs</NewsletterItem>
                </ListItem>
              </List>
            </Grid>
            <Grid item>
              <List sx={{ display: "flex", padding: 0 }}>
                <ListItem>
                  <Link href="https://github.com/Azizkhuja" target="_blank">
                    <GitHubIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://azeezkhujaev.netlify.app" target="_blank">
                    <LanguageIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="https://twitter.com/aziz_ipro" target="_blank">
                    <TwitterIcon />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.linkedin.com/in/azizkhujakhujaev"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </Link>
                </ListItem>
              </List>
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
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 0;
    transition: all 0.6s;
    background-color: #9ca3af;
    display: block;

    &:hover {
      background-color: #8c929d;
      color: #c1c1c1;
    }
  }
`;
const NewsletterItem = styled(ListItemButton)`
  padding: 1px;
`;
const LinkIcon = styled(Link)`
  color: #9ca3b0;
`;

export default Footer;
