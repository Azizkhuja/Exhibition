import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  CssBaseline,
} from "@mui/material";
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";

interface Props {
  window?: () => Window;
  children: any;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar(props: Props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div>
              <BeachAccessSharpIcon style={{ fontSize: 34 }} />
            </div>
            <div>
              <LinkStyled to={"/visit"}>Visit</LinkStyled>
              <LinkStyled to={"/collections"}>Collections</LinkStyled>
              <LinkStyled to={"/events"}>Events</LinkStyled>
              <LinkStyled to={"/exhibitions"}>Exhibitions</LinkStyled>
              <LinkStyled to={"/learn"}>Learn</LinkStyled>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

const LinkStyled = styled(Link)`
  margin-right: 5px;
  margin-left: 5px;
  color: #000;
  text-decoration: none;
`;

export default Navbar;
