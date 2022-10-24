import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  Slide,
  useScrollTrigger,
  InputBase,
  CssBaseline,
  Typography,
} from "@mui/material";
import BeachAccessSharpIcon from "@mui/icons-material/BeachAccessSharp";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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
  const belowMdSize = useMediaQuery("(max-width:900px)");
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: "#fff" }}>
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <LinkStyled to={"/"}>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <BeachAccessSharpIcon
                  style={{ fontSize: 34, marginRight: 5 }}
                />
                iPro Exhibitions
              </Typography>
            </LinkStyled>
            {belowMdSize ? (
              <MenuIcon style={{ fontSize: 34, color: "#000" }} />
            ) : (
              <LinkContainer>
                <LinkStyled to={"/visit"}>Visit</LinkStyled>
                <LinkStyled to={"/collections"}>Collections</LinkStyled>
                <LinkStyled to={"/events"}>Events</LinkStyled>
                <LinkStyled to={"/exhibitions"}>Exhibitions</LinkStyled>
                <LinkStyled to={"/learn"}>Learn</LinkStyled>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </LinkContainer>
            )}
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
const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.8),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.9),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default Navbar;
