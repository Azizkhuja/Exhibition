import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import FooterListItem from "./FooterListItem";
// Dummy data
import {
  policies,
  services,
  addressInfo,
  socialAccInfo,
  menuAbout,
  menuStaff,
} from "./FooterData";
// Material UI
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
import useMediaQuery from "@mui/material/useMediaQuery";
// Material UI icons
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  // Get full current year
  let fullYear = new Date().getFullYear();

  const belowMdSize = useMediaQuery("(max-width:900px)");
  const belowXsSize = useMediaQuery("(max-width:600px)");

  return (
    <Container sx={{ paddingTop: 6, paddingBottom: 3, color: "#9ca3b0" }}>
      <Grid container sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={4}>
          <Grid
            container
            sx={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: belowXsSize ? 2 : null,
            }}
          >
            <Grid item sx={{ color: "#000" }}>
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
                    {menuAbout.map((item: string) => (
                      <Fragment key={item}>
                        <ListItem disablePadding>
                          <ListItemButton>{item}</ListItemButton>
                        </ListItem>
                      </Fragment>
                    ))}
                  </List>
                </Grid>
                <Grid item>
                  <List>
                    {menuStaff.map((item: string) => (
                      <Fragment key={item}>
                        <ListItem disablePadding>
                          <ListItemButton>{item}</ListItemButton>
                        </ListItem>
                      </Fragment>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ color: "grey" }}>
                &copy; {fullYear} President and Fellows of iPro museum
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
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
            <Grid item>
              <FooterListItem policies={policies} />
            </Grid>
            <Grid item>
              <List
                sx={{
                  display: "flex",
                  padding: 0,
                }}
              >
                {socialAccInfo.map((item) => (
                  <Fragment key={item.link}>
                    <ListItem sx={{ paddingLeft: belowXsSize ? 1 : null }}>
                      <LinkIcon href={item.link} target="_blank">
                        {item.icon}
                      </LinkIcon>
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Grid>
              {belowMdSize ? null : (
                <LocationOnIcon style={{ fontSize: 60, color: "#000" }} />
              )}
            </Grid>
            <Grid>
              <List>
                {addressInfo.map((item: string) => (
                  <Fragment key={item}>
                    <ListItem disablePadding>{item}</ListItem>
                  </Fragment>
                ))}
              </List>
            </Grid>
          </Grid>
          <Grid item>
            <FooterListItem services={services} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

const Newsletter = styled(Button)`
  && {
    font-size: 16px;
    color: #000;
    padding-left: 50px;
    padding-right: 50px;
    border-radius: 0;
    transition: all 0.6s;
    background-color: #fff;
    border: 1px solid #000;
    display: block;

    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
const LinkIcon = styled(Link)`
  color: #41444b;
  transition: all 0.6s;

  &:hover {
    color: #9ca3b0;
  }
`;

export default Footer;
