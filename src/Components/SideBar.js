import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/MenuOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhotoCard from "Components/PhotoCard";
import LicenseCard from "Components/LicenseCard";
import ColorPicker from "Components/ColorPicker";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  cardContainer: {
    padding: "10px",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [openDrawer, setopenDrawer] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");

  const toggleDrawer = () => {
    setopenDrawer(!openDrawer);
  };

  const list = () => (
    <>
      <h3 style={{ paddingLeft: 10 }}>Theme Editor</h3>
      <div className={classes.list}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ColorPicker
              setColor={setPrimaryColor}
              buttonTitle="Primary Color"
            />
            <div style={{ paddingLeft: 38 }}>
              <div
                style={{
                  background: primaryColor,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}
              />
            </div>
          </AccordionDetails>
          <AccordionDetails>
            <ColorPicker
              setColor={setSecondaryColor}
              buttonTitle="Secondary Color"
            />
            <div style={{ paddingLeft: 20 }}>
              <div
                style={{
                  background: secondaryColor,
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                }}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {list()}
      </SwipeableDrawer>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
        className={classes.cardContainer}
      >
        <Grid item>
          <PhotoCard />
        </Grid>
        <Grid item>
          <LicenseCard />
        </Grid>
      </Grid>
    </>
  );
}
