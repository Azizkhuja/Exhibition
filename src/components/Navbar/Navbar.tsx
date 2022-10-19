import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
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
            <Link to={"/gamelist/"}>app1</Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}

export default Navbar;
