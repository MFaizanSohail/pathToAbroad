import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Mobilenav from "../Mobilenav/Mobilenav";
import './Muinavbar.scss'
import MenuIcon from '@mui/icons-material/Menu';

export default function Muinavbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileOpen = () => {
    if (mobileOpen == true) {
      setMobileOpen(false);
    } else {
      setMobileOpen(true);
    }
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Mobilenav />
    </Box>
  );

  return (
    <div className="muinavbar"> 
      {mobileOpen == true ? (
        <Muinavbar
          mobileOpen={mobileOpen}
          handleMobileOpen={handleMobileOpen}
          className="mobilenav"
        />
      ) : (
        ""
      )}
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <div className="menuicon"><MenuIcon fontSize="large" /></div> </Button>
          <Drawer
          className="ghjk"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
