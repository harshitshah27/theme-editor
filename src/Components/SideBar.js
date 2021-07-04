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
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Snackbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhotoCard from "Components/PhotoCard";
import LicenseCard from "Components/LicenseCard";
import ColorPicker from "Components/ColorPicker";
import axios from "axios";

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
  buttonContainer: {
    padding: 20,
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [openDrawer, setopenDrawer] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#808080");
  const [font, setFont] = useState("Arial");
  const [openNotification, setopenNotification] = useState(false);

  const toggleDrawer = () => {
    setopenDrawer(!openDrawer);
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleSave = async () => {
    const data = {
      color: {
        primary: primaryColor,
        secondary: secondaryColor,
      },
      font: font,
    };
    try {
      const response = await axios.post(
        `https://e8e67cee3540e96594a791e23ad056d6.m.pipedream.net/`,
        data
      );
      if (response.status === 200) {
        setopenDrawer(false);
        setopenNotification(true);
      }
    } catch (e) {}
  };

  const handleUndo = () => {
    setPrimaryColor("#000000");
    setSecondaryColor("#808080");
    setFont("Arial");
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
            <div
              style={{ paddingLeft: 63, display: "flex", alignItems: "center" }}
            >
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
            <div
              style={{ paddingLeft: 38, display: "flex", alignItems: "center" }}
            >
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Fonts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl variant="filled" fullWidth>
              <InputLabel>Select font type</InputLabel>
              <Select onChange={handleFontChange} value={font}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Roboto">Roboto</MenuItem>
                <MenuItem value="Arial">Arial</MenuItem>

                <MenuItem value="Times New Roman">Times New Roman</MenuItem>
                <MenuItem value="Times">Times</MenuItem>
                <MenuItem value="serif">Serif</MenuItem>
                <MenuItem value="sans-serif">Sans-Serif</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Grid
          container
          spacing={2}
          justify="center"
          className={classes.buttonContainer}
        >
          <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={handleUndo}>
              Undo All
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
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
          <PhotoCard
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            font={font}
          />
        </Grid>
        <Grid item>
          <LicenseCard
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            font={font}
          />
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openNotification}
        onClose={() => setopenNotification(true)}
        message="Theme saved successfully!"
        autoHideDuration={2000}
        action={
          <Button onClick={() => setopenNotification(false)} color="secondary">
            Close
          </Button>
        }
      />
    </>
  );
}
