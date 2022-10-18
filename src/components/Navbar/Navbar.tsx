import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

interface Props {
  window?: () => Window;
  children: any;
}

function Navbar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {[...new Array(72)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Navbar;
