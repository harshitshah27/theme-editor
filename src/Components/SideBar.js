import React, { useState } from "react";
import {
  makeStyles,
  AppBar,
  List,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Collapse,
  Grid,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import PhotoCard from "Components/PhotoCard";
import LicenseCard from "Components/LicenseCard";

const useStyles = makeStyles({
  list: {
    width: 250,
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
  const [open, setopen] = useState(false);

  const toggleDrawer = () => {
    setopenDrawer(!openDrawer);
  };

  const list = () => (
    <div className={classes.list}>
      <List>
        <ListItem button onClick={() => setopen(!open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Color" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Primary Color" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={() => setopen(!open)}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Fonts" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Primary Color" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
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
