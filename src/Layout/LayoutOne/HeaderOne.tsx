import { Container } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const HeaderOne = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileMenu />
          <DesktopMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderOne;
