import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  CssBaseline,
} from "@mui/material";

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
          <Toolbar>
            <LinkStyled to={"/visit"}>Visit</LinkStyled>
            <LinkStyled to={"/collections"}>Collections</LinkStyled>
            <LinkStyled to={"/events"}>Events</LinkStyled>
            <LinkStyled to={"/exhibitions"}>Exhibitions</LinkStyled>
            <LinkStyled to={"/learn"}>Learn</LinkStyled>
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
`;

export default Navbar;
